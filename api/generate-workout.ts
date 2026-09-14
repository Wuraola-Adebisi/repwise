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

type ExerciseCategory =
  | "lower"
  | "upper-push"
  | "upper-pull"
  | "core"
  | "conditioning"
  | "mobility";

type ExerciseTemplate = {
  name: string;
  sets: number;
  reps: number;
  reason: string;
  category: ExerciseCategory;
  equipment: string[];
};

const allEquipment = ["No equipment", "Dumbbells", "Home gym", "Full gym"];

const dumbbellCompatible = ["Dumbbells", "Home gym", "Full gym"];

const exerciseLibrary: ExerciseTemplate[] = [
  {
    name: "Goblet Squat",
    sets: 3,
    reps: 8,
    reason:
      "A compound lower-body movement that works well for strength and muscle.",
    category: "lower",
    equipment: dumbbellCompatible,
  },
  {
    name: "Dumbbell Romanian Deadlift",
    sets: 3,
    reps: 8,
    reason:
      "Loads the posterior chain while keeping the movement simple and controlled.",
    category: "lower",
    equipment: dumbbellCompatible,
  },
  {
    name: "Bodyweight Squat",
    sets: 3,
    reps: 12,
    reason: "Provides lower-body work without requiring external load.",
    category: "lower",
    equipment: allEquipment,
  },
  {
    name: "Glute Bridge",
    sets: 3,
    reps: 12,
    reason: "Targets the glutes and posterior chain without external load.",
    category: "lower",
    equipment: allEquipment,
  },
  {
    name: "Dumbbell Floor Press",
    sets: 3,
    reps: 8,
    reason:
      "Provides a stable upper-body pushing movement without requiring a bench.",
    category: "upper-push",
    equipment: dumbbellCompatible,
  },
  {
    name: "Push-Up",
    sets: 3,
    reps: 10,
    reason: "Provides accessible upper-body pushing work using bodyweight.",
    category: "upper-push",
    equipment: allEquipment,
  },
  {
    name: "One-Arm Dumbbell Row",
    sets: 3,
    reps: 8,
    reason: "Adds upper-body pulling work using the available dumbbells.",
    category: "upper-pull",
    equipment: dumbbellCompatible,
  },
  {
    name: "Backpack Row",
    sets: 3,
    reps: 10,
    reason: "Provides a pulling movement using a simple household load.",
    category: "upper-pull",
    equipment: allEquipment,
  },
  {
    name: "Dead Bug",
    sets: 2,
    reps: 8,
    reason:
      "Builds controlled core stability without adding unnecessary fatigue.",
    category: "core",
    equipment: allEquipment,
  },
  {
    name: "Plank",
    sets: 2,
    reps: 30,
    reason: "Adds simple core stability work with minimal setup.",
    category: "core",
    equipment: allEquipment,
  },
  {
    name: "Mountain Climber",
    sets: 3,
    reps: 20,
    reason: "Raises heart rate while adding full-body movement.",
    category: "conditioning",
    equipment: allEquipment,
  },
  {
    name: "Jumping Jack",
    sets: 3,
    reps: 30,
    reason: "Provides simple conditioning work that requires no equipment.",
    category: "conditioning",
    equipment: allEquipment,
  },
  {
    name: "World’s Greatest Stretch",
    sets: 2,
    reps: 6,
    reason: "Moves several major areas through controlled ranges of motion.",
    category: "mobility",
    equipment: allEquipment,
  },
  {
    name: "Cat-Cow",
    sets: 2,
    reps: 8,
    reason: "Adds gentle spinal movement at a controlled pace.",
    category: "mobility",
    equipment: allEquipment,
  },
  {
    name: "90/90 Hip Switch",
    sets: 2,
    reps: 8,
    reason: "Works hip rotation through a controlled range of motion.",
    category: "mobility",
    equipment: allEquipment,
  },
];

function getAvailableExercises(equipment: string) {
  return exerciseLibrary.filter((exercise) =>
    exercise.equipment.includes(equipment),
  );
}

function hasContext(context: string, terms: string[]) {
  const text = context.toLowerCase();

  return terms.some((term) => text.includes(term));
}

function scaleVolume(
  exercise: ExerciseTemplate,
  energy: string,
  duration: string,
) {
  let sets = exercise.sets;
  const reps = exercise.reps;

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

function getContextFlags(input: WorkoutInput) {
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

  return {
    avoidLowerBody,
    upperBodyPriority,
  };
}

function getPreferredCategories(input: WorkoutInput): ExerciseCategory[] {
  const goal = input.goal.toLowerCase();
  const { avoidLowerBody, upperBodyPriority } = getContextFlags(input);

  if (goal === "mobility") {
    return ["mobility", "core"];
  }

  if (goal === "build strength") {
    if (upperBodyPriority || avoidLowerBody) {
      return ["upper-push", "upper-pull", "core", "lower"];
    }

    return ["lower", "upper-push", "upper-pull", "core"];
  }

  if (goal === "build muscle") {
    if (upperBodyPriority || avoidLowerBody) {
      return ["upper-push", "upper-pull", "core", "lower"];
    }

    return ["lower", "upper-push", "upper-pull", "core"];
  }

  if (goal === "improve fitness") {
    if (avoidLowerBody) {
      return ["conditioning", "upper-push", "upper-pull", "core"];
    }

    return ["conditioning", "lower", "upper-push", "core"];
  }

  return ["lower", "upper-push", "upper-pull", "core"];
}

function selectExercises(input: WorkoutInput): WorkoutExercise[] {
  const available = getAvailableExercises(input.equipment);
  const preferredCategories = getPreferredCategories(input);

  const maxExercises =
    input.duration === "15 min" ? 3 : input.duration === "30 min" ? 4 : 5;

  const selected: ExerciseTemplate[] = [];

  for (const category of preferredCategories) {
    if (selected.length >= maxExercises) {
      break;
    }

    const exercise = available.find(
      (candidate) =>
        candidate.category === category &&
        !selected.some(
          (selectedExercise) => selectedExercise.name === candidate.name,
        ),
    );

    if (exercise) {
      selected.push(exercise);
    }
  }

  // Fallback: if a preferred category was unavailable,
  // fill the remaining slots with any compatible exercises.
  if (selected.length < maxExercises) {
    for (const exercise of available) {
      if (selected.length >= maxExercises) {
        break;
      }

      const alreadySelected = selected.some(
        (selectedExercise) => selectedExercise.name === exercise.name,
      );

      if (!alreadySelected) {
        selected.push(exercise);
      }
    }
  }

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
    return "Moderate to high";
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

  const { avoidLowerBody, upperBodyPriority } = getContextFlags(input);

  if (avoidLowerBody) {
    considerations.push(
      "Reduced lower-body demand because your context suggests your legs need a lighter workload.",
    );
  }

  if (upperBodyPriority) {
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
