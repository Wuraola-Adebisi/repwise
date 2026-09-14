import express from 'express'
import cors from 'cors'
import { generateWorkout } from './ai/generateWorkout'
import type { WorkoutInput } from './schemas/workout'

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

app.post('/api/generate-workout', async (req, res) => {
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

    const workout = await generateWorkout(input)

    return res.json(workout)
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      error: 'Unable to generate workout.',
    })
  }
})

app.listen(port, () => {
  console.log(`Repwise API running at http://localhost:${port}`)
})