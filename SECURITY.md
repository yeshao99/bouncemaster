# Security Policy

## Supported Versions

The `main` branch is the supported version of Bounce Master.

## Reporting a Vulnerability

Please report security issues privately to the maintainer instead of opening a public issue. If GitHub private vulnerability reporting is enabled for this repository, use that channel. Otherwise contact the repository owner through GitHub.

Include:

- Affected file or URL.
- Steps to reproduce.
- Expected impact.
- Whether the issue involves the optional remote AI endpoint.

## Secrets Policy

Bounce Master is a static browser game. Do not place OpenAI API keys, service tokens, or other secrets in `index.html` or any browser-delivered file.

Future OpenAI API usage must run through a server-side or serverless proxy. The browser may only call a public endpoint such as `window.BOUNCEMASTER_AI_ENDPOINT`; the endpoint owner is responsible for authentication, rate limiting, logging, and secret storage.
