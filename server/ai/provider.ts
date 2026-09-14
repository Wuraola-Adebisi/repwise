import type { WorkoutInput, Workout } from '../schemas/workout'

export interface AIProvider {
  generateWorkout(input: WorkoutInput): Promise<Workout>
}