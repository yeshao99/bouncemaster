# AI Director Design

Bounce Master includes a local AI Director for the `AI生成挑战` mode. It is deterministic, browser-only, and safe for GitHub Pages.

## Goals

- Generate playable levels without a backend.
- Adapt difficulty from recent player performance.
- Keep every challenge reproducible through a visible seed.
- Reuse the same level schema as hand-authored levels.
- Leave a clean path for future OpenAI-assisted level design.

## Player Profile

The browser stores the profile in `localStorage`:

```text
bouncemaster.aiProfile.v1
```

Tracked fields:

- `attempts`: number of AI challenge starts.
- `clears`: number of AI challenge completions.
- `falls`: failures caused by falling.
- `hazardHits`: failures caused by spikes or saws.
- `lastReasons`: recent failure reasons.
- `currentDifficulty`: adaptive difficulty from 1 to 10.

## Strategy Selection

The generator picks one of four strategies:

- `recovery`: lower hazard density after repeated falls or too many failed attempts.
- `rhythm`: smoother spacing when hazard collisions dominate.
- `precision`: tighter jumps and more fragile platforms at higher difficulty.
- `endurance`: longer generated routes for players who clear consistently.

## Level Schema

Generated output matches the existing game structure:

```js
{
  start: { x: 50, y: 400 },
  platforms: [
    { x, y, w, h, type: 'normal' | 'fragile' | 'spike' | 'saw' | 'goal' | 'text' }
  ]
}
```

Every generated level must include a safe starting platform and a goal. The validator also restricts platform types to the existing engine types.

## Remote AI Boundary

The current implementation does not call OpenAI directly. A future backend can expose an endpoint through `window.BOUNCEMASTER_AI_ENDPOINT`, but the browser must never contain an OpenAI API key. If the endpoint is missing, unreachable, or returns invalid data, the game falls back to the local generator.
