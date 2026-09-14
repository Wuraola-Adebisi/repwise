import type { VercelRequest, VercelResponse } from "@vercel/node";

type WorkoutInput = {
  goal: string;
  duration: string;
  equipment: string;
  energy: string;
  context: string;
};

type WorkoutExercise = {
  name: string;
  sets: number;
  reps: number;
  reason: string;
};

type Workout = {
  sessionTitle: string;
  duration: number;
  intensity: string;
  exercises: WorkoutExercise[];
  considerations: string[];
};

type ExerciseTemplate = {
  name: string;
  sets: number;
  reps: number;
  reason: string;
  category:
    | "lower"
    | "upper-push"
    | "upper-pull"
    | "core"
    | "conditioning"
    | "mobility";
  equipment: string[];
};

const noEquipment = ["No equipment"];
const dumbbells = ["Dumbbells", "Home gym", "Full gym"];
const gym = ["Home gym", "Full gym"];

const exerciseLibrary: ExerciseTemplate[] = [
  {
    name: "Goblet Squat",
    sets: 3,
    reps: 8,
    reason:
      "A compound lower-body movement that works well for strength and muscle.",
    category: "lower",
    equipment: dumbbells,
  },
  {
    name: "Dumbbell Romanian Deadlift",
    sets: 3,
    reps: 8,
    reason:
      "Loads the posterior chain while keeping the movement simple and controlled.",
    category: "lower",
    equipment: dumbbells,
  },
  {
    name: "Bodyweight Squat",
    sets: 3,
    reps: 12,
    reason: "Provides lower-body work without requiring equipment.",
    category: "lower",
    equipment: noEquipment,
  },
  {
    name: "Glute Bridge",
    sets: 3,
    reps: 12,
    reason: "Targets the glutes and posterior chain without external load.",
    category: "lower",
    equipment: noEquipment,
  },
  {
    name: "Dumbbell Floor Press",
    sets: 3,
    reps: 8,
    reason:
      "Provides a stable upper-body pushing movement without requiring a bench.",
    category: "upper-push",
    equipment: dumbbells,
  },
  {
    name: "Push-Up",
    sets: 3,
    reps: 10,
    reason: "Provides accessible upper-body pushing work using bodyweight.",
    category: "upper-push",
    equipment: noEquipment,
  },
  {
    name: "One-Arm Dumbbell Row",
    sets: 3,
    reps: 8,
    reason: "Adds upper-body pulling work using the available dumbbells.",
    category: "upper-pull",
    equipment: dumbbells,
  },
  {
    name: "Backpack Row",
    sets: 3,
    reps: 10,
    reason: "Provides a pulling movement using a simple household load.",
    category: "upper-pull",
    equipment: noEquipment,
  },
  {
    name: "Dead Bug",
    sets: 2,
    reps: 8,
    reason:
      "Builds controlled core stability without adding unnecessary fatigue.",
    category: "core",
    equipment: noEquipment,
  },
  {
    name: "Plank",
    sets: 2,
    reps: 30,
    reason: "Adds simple core stability work with minimal setup.",
    category: "core",
    equipment: noEquipment,
  },
  {
    name: "Mountain Climber",
    sets: 3,
    reps: 20,
    reason: "Raises heart rate while adding full-body movement.",
    category: "conditioning",
    equipment: noEquipment,
  },
  {
    name: "Jumping Jack",
    sets: 3,
    reps: 30,
    reason: "Provides simple conditioning work that requires no equipment.",
    category: "conditioning",
    equipment: noEquipment,
  },
  {
    name: "World’s Greatest Stretch",
    sets: 2,
    reps: 6,
    reason: "Moves several major areas through controlled ranges of motion.",
    category: "mobility",
    equipment: noEquipment,
  },
  {
    name: "Cat-Cow",
    sets: 2,
    reps: 8,
    reason: "Adds gentle spinal movement at a controlled pace.",
    category: "mobility",
    equipment: noEquipment,
  },
  {
    name: "90/90 Hip Switch",
    sets: 2,
    reps: 8,
    reason: "Works hip rotation through a controlled range of motion.",
    category: "mobility",
    equipment: noEquipment,
  },
];

function getAvailableExercises(equipment: string) {
  return exerciseLibrary.filter((exercise) =>
    exercise.equipment.includes(equipment),
  );
}

function scaleVolume(
  exercise: ExerciseTemplate,
  energy: string,
  duration: string,
) {
  let sets = exercise.sets;
  let reps = exercise.reps;

  if (energy === "Low") {
    sets = Math.max(2, sets - 1);
  }

  if (energy === "Great" && duration !== "15 min") {
    sets += 1;
  }

  if (duration === "15 min") {
    sets = Math.min(2, sets);
  }

  if (duration === "60+ min") {
    sets += 1;
  }

  return { sets, reps };
}

function hasContext(context: string, terms: string[]) {
  const text = context.toLowerCase();

  return terms.some((term) => text.includes(term));
}

function selectExercises(input: WorkoutInput): WorkoutExercise[] {
  const available = getAvailableExercises(input.equipment);
  const goal = input.goal.toLowerCase();

  if (goal === "mobility") {
    const mobility = available.filter(
      (exercise) => exercise.category === "mobility",
    );

    return mobility.map((exercise) => ({
      name: exercise.name,
      sets: exercise.sets,
      reps: exercise.reps,
      reason: exercise.reason,
    }));
  }

  const avoidLowerBody =
    input.energy === "Low" ||
    hasContext(input.context, [
      "sore legs",
      "leg soreness",
      "legs are sore",
      "lower body soreness",
      "knee pain",
      "knee hurts",
      "knee injury",
    ]);

  const upperBodyPriority = hasContext(input.context, [
    "upper body",
    "arms",
    "chest",
    "back",
    "shoulders",
    "upper body today",
  ]);

  const shortSession = input.duration === "15 min";

  let categories: WorkoutExercise["name"][] = [];

  if (goal === "build strength") {
    const preferred = ["lower", "upper-push", "upper-pull", "core"];

    if (upperBodyPriority || avoidLowerBody) {
      categories = ["upper-push", "upper-pull", "core"];
    } else {
      categories = preferred;
    }
  }

  if (goal === "build muscle") {
    if (upperBodyPriority || avoidLowerBody) {
      categories = ["upper-push", "upper-pull", "core"];
    } else {
      categories = ["lower", "upper-push", "upper-pull", "core"];
    }
  }

  if (goal === "improve fitness") {
    categories = ["conditioning", "lower", "upper-push", "core"];
  }

  if (shortSession) {
    categories = categories.slice(0, 3);
  }

  const selected = categories
    .map((category) =>
      available.find((exercise) => exercise.category === category),
    )
    .filter((exercise): exercise is ExerciseTemplate => Boolean(exercise));

  return selected.map((exercise) => {
    const volume = scaleVolume(exercise, input.energy, input.duration);

    return {
      name: exercise.name,
      sets: volume.sets,
      reps: volume.reps,
      reason: exercise.reason,
    };
  });
}

function getIntensity(input: WorkoutInput) {
  if (input.energy === "Low") {
    return "Light";
  }

  if (input.energy === "Okay") {
    return "Light to moderate";
  }

  if (input.energy === "Great") {
    return input.goal === "Improve fitness"
      ? "Moderate to high"
      : "Moderate to high";
  }

  return "Moderate";
}

function getConsiderations(input: WorkoutInput, exercises: WorkoutExercise[]) {
  const considerations: string[] = [];

  considerations.push(
    `Kept the session within your ${input.duration} time limit.`,
  );

  considerations.push(
    `Built the session around ${input.equipment.toLowerCase()}.`,
  );

  if (input.energy === "Low") {
    considerations.push("Reduced training volume because your energy is low.");
  } else if (input.energy === "Great") {
    considerations.push(
      "Used the higher energy level to allow more training volume.",
    );
  } else {
    considerations.push(
      `Adjusted the workload for your ${input.energy.toLowerCase()} energy level.`,
    );
  }

  if (input.goal === "Build strength") {
    considerations.push(
      "Prioritised compound movements and controlled strength work.",
    );
  }

  if (input.goal === "Build muscle") {
    considerations.push(
      "Used moderate training volume to support muscle-building work.",
    );
  }

  if (input.goal === "Improve fitness") {
    considerations.push(
      "Included conditioning work to raise the overall training demand.",
    );
  }

  if (input.goal === "Mobility") {
    considerations.push(
      "Kept the session focused on controlled range of motion rather than loading.",
    );
  }

  if (
    hasContext(input.context, [
      "sore legs",
      "leg soreness",
      "legs are sore",
      "lower body soreness",
      "knee pain",
      "knee hurts",
      "knee injury",
    ])
  ) {
    considerations.push(
      "Reduced lower-body demand because your context suggests your legs need a lighter workload.",
    );
  }

  if (
    hasContext(input.context, [
      "upper body",
      "arms",
      "chest",
      "back",
      "shoulders",
    ])
  ) {
    considerations.push(
      "Shifted the session toward upper-body work based on your additional context.",
    );
  }

  if (input.context.trim()) {
    considerations.push(
      "Used the additional context you provided when deciding what to prioritise.",
    );
  }

  if (exercises.length === 0) {
    considerations.push(
      "Kept the recommendation conservative because the available equipment limits exercise options.",
    );
  }

  return considerations;
}

function generateWorkout(input: WorkoutInput): Workout {
  const requestedDuration = parseInt(input.duration, 10) || 30;

  const exercises = selectExercises(input);

  const duration =
    input.duration === "60+ min" ? 60 : Math.max(10, requestedDuration - 2);

  let sessionTitle = `${input.goal} Session`;

  if (input.goal === "Mobility") {
    sessionTitle = "Everyday Mobility";
  }

  if (input.energy === "Low") {
    sessionTitle = `Low-Energy ${input.goal} Session`;
  }

  if (
    hasContext(input.context, [
      "sore legs",
      "leg soreness",
      "legs are sore",
      "lower body soreness",
      "knee pain",
      "knee hurts",
      "knee injury",
    ])
  ) {
    sessionTitle = "Upper-Body Focus Session";
  }

  return {
    sessionTitle,
    duration,
    intensity: getIntensity(input),
    exercises,
    considerations: getConsiderations(input, exercises),
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed.",
    });
  }

  try {
    const input = req.body as WorkoutInput;

    if (!input.goal || !input.duration || !input.equipment || !input.energy) {
      return res.status(400).json({
        error: "Missing required workout information.",
      });
    }

    const workout = generateWorkout(input);

    return res.status(200).json(workout);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Unable to generate workout.",
    });
  }
}
