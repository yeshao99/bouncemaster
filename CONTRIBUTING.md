# Contributing

Thanks for helping improve Bounce Master.

## Good First Contributions

- Report a generated AI seed that feels unfair, empty, or impossible.
- Improve mobile touch feel or keyboard accessibility.
- Add clear comments around physics, camera, or AI generation logic.
- Improve documentation for new players and contributors.

## Development Flow

1. Fork the repository.
2. Create a branch for your change.
3. Keep the game deployable as a static GitHub Pages page.
4. Run `npm test`.
5. Open a pull request with a short description and manual test notes.

## AI Level Reports

When reporting an AI Generated Challenge issue, include:

- AI Seed shown in the HUD.
- Strategy and difficulty shown in the HUD.
- Browser and device.
- What happened and what you expected.

## Security Boundary

Do not add OpenAI API keys or other secrets to `index.html`, browser JavaScript, screenshots, issues, or pull requests. Any future OpenAI integration must run behind a server-side or serverless endpoint.
