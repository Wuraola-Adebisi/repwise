export type WorkoutInput = {
  goal: string
  duration: string
  equipment: string
  energy: string
  context: string
}

export type WorkoutExercise = {
  name: string
  sets: number
  reps: number
  reason: string
}

export type Workout = {
  sessionTitle: string
  duration: number
  intensity: string
  exercises: WorkoutExercise[]
  considerations: string[]
}