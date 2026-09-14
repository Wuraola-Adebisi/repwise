import type { AIProvider } from './provider'
import type {
  Workout,
  WorkoutExercise,
  WorkoutInput,
} from '../schemas/workout'

function getExercises(input: WorkoutInput): WorkoutExercise[] {
  const lowEnergy = input.energy === 'Low'
  const shortSession = input.duration === '15 min'
  const noEquipment = input.equipment === 'No equipment'
  const mobility = input.goal === 'Mobility'
  const muscle = input.goal === 'Build muscle'
  const fitness = input.goal === 'Improve fitness'

  if (mobility) {
    return [
      {
        name: 'World’s Greatest Stretch',
        sets: 2,
        reps: 6,
        reason:
          'Combines several mobility positions in one controlled movement.',
      },
      {
        name: 'Cat-Cow',
        sets: 2,
        reps: 8,
        reason:
          'Adds gentle spinal movement without requiring equipment.',
      },
      {
        name: '90/90 Hip Switch',
        sets: 2,
        reps: 8,
        reason:
          'Works hip rotation through a controlled range of motion.',
      },
      {
        name: 'Dead Bug',
        sets: 2,
        reps: 8,
        reason:
          'Adds controlled core work while keeping the session low impact.',
      },
    ]
  }

  if (fitness) {
    if (noEquipment) {
      return [
        {
          name: 'Bodyweight Squat',
          sets: lowEnergy ? 2 : 3,
          reps: 12,
          reason:
            'Raises the workload with a simple full-body movement requiring no equipment.',
        },
        {
          name: 'Mountain Climber',
          sets: lowEnergy ? 2 : 3,
          reps: 20,
          reason:
            'Adds a higher-tempo movement to increase cardiovascular demand.',
        },
        {
          name: 'Reverse Lunge',
          sets: 2,
          reps: 10,
          reason:
            'Adds unilateral lower-body work while keeping the setup simple.',
        },
        {
          name: 'Dead Bug',
          sets: 2,
          reps: 10,
          reason:
            'Keeps the session balanced with controlled core work.',
        },
      ]
    }

    return [
      {
        name: 'Dumbbell Thruster',
        sets: lowEnergy ? 2 : 3,
        reps: 10,
        reason:
          'Combines a squat and press to create a time-efficient full-body movement.',
      },
      {
        name: 'Dumbbell Romanian Deadlift',
        sets: 3,
        reps: 10,
        reason:
          'Adds posterior-chain work to balance the session.',
      },
      {
        name: 'Alternating Reverse Lunge',
        sets: 2,
        reps: 10,
        reason:
          'Adds unilateral lower-body work without requiring much setup.',
      },
      {
        name: 'Mountain Climber',
        sets: lowEnergy ? 2 : 3,
        reps: 20,
        reason:
          'Adds a short burst of conditioning to the session.',
      },
    ]
  }

  if (muscle) {
    if (noEquipment) {
      return [
        {
          name: 'Push-Up',
          sets: lowEnergy ? 2 : 3,
          reps: 10,
          reason:
            'Provides upper-body pushing volume using only bodyweight.',
        },
        {
          name: 'Bodyweight Split Squat',
          sets: lowEnergy ? 2 : 3,
          reps: 8,
          reason:
            'Creates more lower-body loading through a unilateral movement.',
        },
        {
          name: 'Pike Push-Up',
          sets: 2,
          reps: 8,
          reason:
            'Adds additional shoulder-focused pushing volume.',
        },
        {
          name: 'Glute Bridge',
          sets: 3,
          reps: 12,
          reason:
            'Adds controlled posterior-chain volume without equipment.',
        },
      ]
    }

    return [
      {
        name: 'Goblet Squat',
        sets: lowEnergy ? 2 : 3,
        reps: 10,
        reason:
          'Provides controlled lower-body volume with the available load.',
      },
      {
        name: 'Dumbbell Floor Press',
        sets: 3,
        reps: 10,
        reason:
          'Adds upper-body pressing volume without requiring a bench.',
      },
      {
        name: 'One-Arm Dumbbell Row',
        sets: 3,
        reps: 10,
        reason:
          'Provides pulling volume to balance the pressing work.',
      },
      {
        name: 'Dumbbell Romanian Deadlift',
        sets: lowEnergy ? 2 : 3,
        reps: 10,
        reason:
          'Adds posterior-chain volume with a controlled hinge pattern.',
      },
    ]
  }

  if (shortSession) {
    return [
      {
        name: noEquipment ? 'Bodyweight Squat' : 'Goblet Squat',
        sets: 2,
        reps: 10,
        reason:
          'A simple compound movement that makes efficient use of limited time.',
      },
      {
        name: noEquipment ? 'Push-Up' : 'Dumbbell Floor Press',
        sets: 2,
        reps: 10,
        reason:
          'Adds an upper-body pushing movement without requiring much setup.',
      },
      {
        name: noEquipment ? 'Glute Bridge' : 'Dumbbell Romanian Deadlift',
        sets: 2,
        reps: 10,
        reason:
          'Adds posterior-chain work while keeping the session compact.',
      },
    ]
  }

  if (noEquipment) {
    return [
      {
        name: 'Bodyweight Squat',
        sets: lowEnergy ? 2 : 3,
        reps: 10,
        reason:
          'Provides a simple lower-body movement using only bodyweight.',
      },
      {
        name: 'Push-Up',
        sets: lowEnergy ? 2 : 3,
        reps: 8,
        reason:
          'Provides an accessible upper-body pushing movement.',
      },
      {
        name: 'Reverse Lunge',
        sets: 2,
        reps: 10,
        reason:
          'Adds unilateral lower-body work without equipment.',
      },
      {
        name: 'Dead Bug',
        sets: 2,
        reps: 8,
        reason:
          'Adds controlled core work while keeping the session simple.',
      },
    ]
  }

  return [
    {
      name: 'Goblet Squat',
      sets: lowEnergy ? 2 : 3,
      reps: 10,
      reason:
        'A simple compound movement that fits a strength-focused session.',
    },
    {
      name: 'Dumbbell Romanian Deadlift',
      sets: lowEnergy ? 2 : 3,
      reps: 10,
      reason:
        'Adds posterior-chain work using the available dumbbells.',
    },
    {
      name: 'Dumbbell Floor Press',
      sets: 3,
      reps: 10,
      reason:
        'Provides an upper-body pushing movement without requiring a bench.',
    },
    {
      name: 'One-Arm Dumbbell Row',
      sets: 3,
      reps: 10,
      reason:
        'Balances the session with an upper-body pulling movement.',
    },
  ]
}

function getIntensity(input: WorkoutInput) {
  if (input.energy === 'Low') {
    return 'Light to moderate'
  }

  if (input.energy === 'Great' && input.duration !== '15 min') {
    return 'Moderate to challenging'
  }

  return 'Moderate'
}

function getSessionTitle(input: WorkoutInput) {
  if (input.goal === 'Mobility') {
    return 'Everyday Mobility'
  }

  if (input.energy === 'Low') {
    return `Low-Energy ${input.goal}`
  }

  if (input.duration === '15 min') {
    return `Quick ${input.goal}`
  }

  return `${input.goal} Session`
}

function getConsiderations(input: WorkoutInput) {
  const considerations = [
    `Kept the session within your ${input.duration} time limit.`,
    `Used ${input.equipment.toLowerCase()} based on what you have available.`,
  ]

  if (input.energy === 'Low') {
    considerations.push(
      'Reduced volume because your reported energy is low.'
    )
  } else if (input.energy === 'Great') {
    considerations.push(
      'Allowed a higher workload because you reported having good energy.'
    )
  } else {
    considerations.push(
      `Adjusted the workload for your reported energy level: ${input.energy.toLowerCase()}.`
    )
  }

  considerations.push(
    `Prioritised ${input.goal.toLowerCase()} as the main goal.`
  )

  if (input.context.trim()) {
    considerations.push(
      'Also considered the additional context you provided.'
    )
  }

  return considerations
}

export const mockProvider: AIProvider = {
  async generateWorkout(input): Promise<Workout> {
    const parsedDuration = parseInt(input.duration, 10) || 30

    const duration =
      input.duration === '60+ min'
        ? 55
        : Math.max(parsedDuration - 2, 12)

    return {
      sessionTitle: getSessionTitle(input),
      duration,
      intensity: getIntensity(input),
      exercises: getExercises(input),
      considerations: getConsiderations(input),
    }
  },
}