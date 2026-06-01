# Optional OpenAI Integration

Bounce Master is currently a static game with a local AI Director. This document defines the optional remote interface for a future server-side OpenAI integration.

## Security Rule

Never put an OpenAI API key in `index.html` or any browser-delivered JavaScript. Browser code is public. OpenAI API calls must happen in a backend or serverless function that owns the key.

## Browser Configuration

By default, no remote AI endpoint is configured.

A deployment may opt in by setting:

```html
<script>
  window.BOUNCEMASTER_AI_ENDPOINT = "https://example.com/api/bouncemaster/challenge";
</script>
```

If the endpoint is absent, fails, times out, or returns invalid JSON, the game uses the local AI Director.

## Request

The browser sends:

```json
{
  "seed": "AI-ABCDE-1",
  "playerProfile": {
    "attempts": 0,
    "clears": 0,
    "falls": 0,
    "hazardHits": 0,
    "currentDifficulty": 1
  }
}
```

## Response

The endpoint should return:

```json
{
  "title": "AI Challenge",
  "seed": "AI-ABCDE-1",
  "strategy": "precision",
  "level": {
    "start": { "x": 50, "y": 400 },
    "platforms": [
      { "x": -120, "y": 500, "w": 420, "h": 200, "type": "normal" },
      { "x": 1200, "y": 360, "w": 60, "h": 80, "type": "goal" }
    ]
  }
}
```

Allowed `strategy` values:

- `precision`
- `rhythm`
- `recovery`
- `endurance`

Allowed platform types:

- `normal`
- `fragile`
- `spike`
- `saw`
- `goal`
- `text`

## Backend Responsibilities

The backend should:

- Store the OpenAI API key in server-side environment variables.
- Validate and clamp generated geometry before returning it.
- Rate limit requests.
- Avoid logging personal data.
- Return deterministic results for a given seed when possible.
