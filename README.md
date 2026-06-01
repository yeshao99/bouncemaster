# Bounce Master

Bounce Master is a mobile-friendly HTML5 canvas platform game. It runs as a static page on GitHub Pages and includes a local AI Director that generates replayable challenge levels without requiring a backend or API key.

Live demo: https://yeshao99.github.io/bouncemaster/

## Features

- Three playable modes: Easy, Hard, and AI Generated Challenge.
- Local AI Director that adapts generated levels from player attempts, clears, falls, hazard hits, and current difficulty.
- Reproducible AI seeds shown in game for debugging, sharing, and issue reports.
- Touch-first controls for mobile plus keyboard controls for desktop.
- Static deployment: no build step, no server, no OpenAI API key in browser code.
- Optional remote AI endpoint hook for future server-side integrations.

## Controls

- Mobile: press and hold to charge, slide left or right while holding, release to jump.
- Desktop: hold Space to charge, use Left/Right arrows to steer, release Space to jump.
- The home button returns to the menu. The reset button restarts or regenerates the current challenge.

## AI Director

The AI Generated Challenge mode stores a local player profile under:

```text
bouncemaster.aiProfile.v1
```

The profile tracks attempts, clears, falls, hazard hits, recent failure reasons, and current difficulty. The generator uses that data to choose a strategy and produce a level from the same platform schema used by the hand-authored modes.

For implementation details, see [docs/AI_DESIGN.md](docs/AI_DESIGN.md). For the optional remote endpoint contract, see [docs/OPENAI_INTEGRATION.md](docs/OPENAI_INTEGRATION.md).

## Local Development

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Validation

Run the repository checks with Node.js:

```bash
npm test
```

The test script validates the static HTML, required OSS files, AI documentation, and key gameplay strings.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md), open an issue for larger changes, and include the AI seed when reporting generated-level problems.

## License

MIT. See [LICENSE](LICENSE).
