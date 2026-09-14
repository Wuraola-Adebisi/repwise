import type { VercelRequest, VercelResponse } from "@vercel/node";
import { generateWorkout } from "../server/ai/generateWorkout";
import type { WorkoutInput } from "../server/schemas/workout";

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

    const workout = await generateWorkout(input);

    return res.status(200).json(workout);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Unable to generate workout.",
    });
  }
}
