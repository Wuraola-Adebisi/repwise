import type { VercelRequest, VercelResponse } from '@vercel/node'

type WorkoutInput = {
  goal: string
  duration: string
  equipment: string
  energy: string
  context: string
}

type WorkoutExercise = {
  name: string
  sets: number
  reps: number
  reason: string
}

type Workout = {
  sessionTitle: string
  duration: number
  intensity: string
  exercises: WorkoutExercise[]
  considerations: string[]
}

function getExercises(input: WorkoutInput): WorkoutExercise[] {
  const lowEnergy = input.energy === 'Low'
  const noEquipment = input.equipment === 'No equipment'

  if (input.goal === 'Mobility') {
    return [
      {
        name: 'World’s Greatest Stretch',
        sets: 2,
        reps: 6,
        reason:
          'Opens up several major movement areas without requiring equipment.',
      },
      {
        name: 'Cat-Cow',
        sets: 2,
        reps: 8,
        reason: 'Adds gentle spinal movement at a controlled pace.',
      },
      {
        name: '90/90 Hip Switch',
        sets: 2,
        reps: 8,
        reason: 'Works hip rotation through a controlled range of motion.',
      },
      {
        name: 'Dead Bug',
        sets: 2,
        reps: 8,
        reason:
          'Adds controlled core work without requiring external load.',
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
        name: 'Glute Bridge',
        sets: 2,
        reps: 12,
        reason:
          'Adds posterior-chain work without equipment.',
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

function generateWorkout(input: WorkoutInput): Workout {
  const duration = parseInt(input.duration, 10) || 30
  const lowEnergy = input.energy === 'Low'

  const exercises = getExercises(input)

  const considerations = [
    `Kept the session within your ${input.duration} time limit.`,
    `Used ${input.equipment.toLowerCase()} based on what you have available.`,
    lowEnergy
      ? 'Reduced volume because your energy is low.'
      : `Adjusted the workload for your reported energy level.`,
    `Prioritised ${input.goal.toLowerCase()} as the main goal.`,
  ]

  if (input.context.trim()) {
    considerations.push(
      'Also considered the additional context you provided.',
    )
  }

  return {
    sessionTitle:
      input.goal === 'Mobility'
        ? 'Everyday Mobility'
        : lowEnergy
          ? 'Low-Energy Strength Session'
          : `${input.goal} Session`,
    duration: Math.min(duration - 2, 60),
    intensity: lowEnergy ? 'Light to moderate' : 'Moderate',
    exercises,
    considerations,
  }
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed.',
    })
  }

  try {
    const input = req.body as WorkoutInput

    if (
      !input.goal ||
      !input.duration ||
      !input.equipment ||
      !input.energy
    ) {
      return res.status(400).json({
        error: 'Missing required workout information.',
      })
    }

    const workout = generateWorkout(input)

    return res.status(200).json(workout)
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      error: 'Unable to generate workout.',
    })
  }
}