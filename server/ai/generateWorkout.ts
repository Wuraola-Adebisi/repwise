import type { WorkoutInput } from '../schemas/workout'
import { mockProvider } from './mockProvider'

const provider = mockProvider

export async function generateWorkout(input: WorkoutInput) {
  return provider.generateWorkout(input)
}