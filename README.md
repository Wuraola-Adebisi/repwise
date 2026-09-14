# Repwise

Repwise is an AI workout decision engine designed to build training sessions around the reality of your day.

Instead of starting with a fixed workout and asking you to fit into it, Repwise takes your goal, available time, energy, equipment, and additional context, then uses that information to determine what your session should look like.

## The idea

A workout recommendation should account for more than a fitness goal.

The same person might want to build strength on two different days, but have 60 minutes and plenty of energy one day, and 25 minutes with limited energy the next.

Repwise is designed around that decision-making problem.

**Your situation → AI interpretation → structured workout → explanation**

## What it does

Repwise currently allows you to provide:

* Training goal
* Available time
* Equipment
* Current energy level
* Additional natural-language context

It then returns a structured workout containing:

* Session title
* Duration
* Intensity
* Exercises
* Sets and reps
* Reasoning for exercise selection
* Key considerations

The goal is not simply to generate a list of exercises. The system is designed to make the recommendation explainable.

## Product principles

### Understand the situation

Repwise considers the combination of structured inputs and natural-language context rather than treating the workout goal in isolation.

### Adapt to constraints

Available time, equipment, energy, and other constraints should influence the resulting session.

### Make the decision explainable

The recommendation should communicate not only what to do, but why the session was structured that way.

## Architecture

The application is built around a provider-based AI architecture so the underlying model can be changed without rebuilding the product around a specific AI provider.

```text
User input
    ↓
Workout API
    ↓
AI Provider
    ↓
Structured workout
    ↓
React interface
```

The current development version uses a mock provider to simulate the AI decision layer while the product and interface are being developed.

The provider interface is intentionally separated from the rest of the application so that a production model provider can be introduced later without changing the frontend contract.

## Tech stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router
* Lucide React

### Backend

* Node.js
* Express
* TypeScript
* CORS

### AI architecture

* Provider abstraction
* Structured workout schema
* Mock AI provider for development
* Designed for future foundation-model integration

## Project structure

```text
repwise/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── server/
│   ├── ai/
│   │   ├── generateWorkout.ts
│   │   ├── mockProvider.ts
│   │   └── provider.ts
│   │
│   ├── schemas/
│   │   └── workout.ts
│   │
│   └── index.ts
│
├── public/
├── package.json
├── vite.config.ts
└── README.md
```

## Running locally

Clone the repository and install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

Start the API server in a second terminal:

```bash
npm run server
```

The frontend runs on the Vite development server and communicates with the Express API on port `3001`.

## Current status

Repwise is currently in active development.

The product interface, workout-building flow, API layer, structured response schema, and AI provider abstraction are implemented.

The current AI provider is a development mock. The next stage is connecting the provider interface to a real foundation model while preserving the same structured workout contract.

## Why this project exists

Repwise is an exploration of what happens when AI is used as a decision layer rather than simply a text-generation feature.

The interesting part is not asking an AI to write a workout.

It is taking an ambiguous human situation, interpreting the constraints, making a structured decision, and presenting the result in a useful interface.

---