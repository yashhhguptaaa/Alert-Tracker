# Contributing to Alert‑Tracker

> \[!NOTE]
> Thanks for your interest in improving **Alert‑Tracker**! This guide explains how to set up your environment, follow the project conventions, and submit high‑quality changes.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Code of Conduct](#code-of-conduct)
3. [Getting Started](#getting-started)
4. [Branching & Commit Style](#branching--commit-style)
5. [Development Workflow](#development-workflow)
6. [Coding Standards](#coding-standards)
7. [Testing](#testing)
8. [UI/Client Guidelines](#uiclient-guidelines)
9. [API/Server Guidelines](#apiserver-guidelines)
10. [Database & Migrations](#database--migrations)
11. [Pull Request Checklist](#pull-request-checklist)
12. [Issue Triage](#issue-triage)
13. [Security](#security)
14. [License](#license)

---

## Project Overview

Alert‑Tracker is a full‑stack JavaScript application. At a glance (folder names may vary):

```
.
├─ client/           # Frontend (React)
├─ models/           # Mongoose models (MongoDB)
├─ routes/           # Express routes & controllers
├─ server.js         # API entrypoint (Express)
├─ db.js             # Database connection (MongoDB)
├─ package.json      # Project scripts & dependencies (root)
└─ README.md         # Project intro
```

> \[!IMPORTANT]
> If any folder/script names differ locally, rely on `package.json` scripts as the single source of truth.

---

## Code of Conduct

By participating, you agree to uphold our community standards. Please be respectful and constructive.

> If this repository adds a `CODE_OF_CONDUCT.md`, it will be the canonical document.

---

## Getting Started

### Prerequisites

* **Node.js** ≥ 18.x
* **npm** ≥ 9.x (or **pnpm**/**yarn** if you prefer — be consistent for the whole install)
* **MongoDB** (local or cloud e.g., Atlas)

### 1) Fork & Clone

```bash
# GitHub → Fork → Clone your fork
git clone https://github.com/<your-username>/Alert-Tracker.git
cd Alert-Tracker
```

### 2) Install Dependencies

```bash
# Install root deps
npm install

# If the frontend is an independent app
cd client && npm install && cd ..
```

### 3) Environment Variables

Create a `.env` file in the project root (and in `client/` if the frontend needs env vars). Common keys:

```bash
# .env (server)
PORT=4000
MONGODB_URI=mongodb://localhost:27017/alert-tracker
JWT_SECRET=replace_me # only if auth is used
CLIENT_URL=http://localhost:5173 # or 3000 depending on your setup
ALERT_WEBHOOK_URL= # optional: Slack/Discord/Webhook for notifications
```

```bash
# client/.env (Vite example)
VITE_API_BASE=http://localhost:4000
```

> \[!TIP]
> Check `server.js`, `db.js`, and `routes/*` for the actual variable names used.

### 4) Run the App

Typical options (see `package.json` for the exact commands):

```bash
# Start server only
npm run server

# Start client only
npm run client

# Start both concurrently (if configured)
npm run dev
```

---

## Branching & Commit Style

### Branching

* `main`: always releasable (protected).
* Feature branches: `feat/<short-topic>`
* Fix branches: `fix/<short-topic>`
* Chore/docs/test branches: `chore/…`, `docs/…`, `test/…`

### Conventional Commits

Use the Conventional Commits spec to keep history clean and changelog‑friendly:

```
<type>(optional scope): <short summary>

# Common types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
# Examples:
feat(alerts): add Slack webhook integration
fix(api): handle missing payload fields in /alerts
chore(deps): bump express to ^4.19.0
```

---

## Development Workflow

1. **Sync** your fork:

   ```bash
   git checkout main
   git pull upstream main
   git checkout -b feat/<topic>
   ```
2. **Code** with linting & tests:

   ```bash
   npm run lint
   npm test
   ```
3. **Commit** with Conventional Commit messages.
4. **Push** and open a **Pull Request** against `main`.
5. Request review; address comments; keep PRs focused and small.

> \[!NOTE]
> If Husky/linters are configured, pre‑commit hooks may block commits that fail lint or tests. Fix issues locally before pushing.

---

## Coding Standards

### Language & Style

* **JavaScript (ES2022+)**; prefer **TypeScript** only if the repo adds it later.
* Use **ESLint + Prettier** (respect existing configs).
* Prefer **async/await** over raw Promises.
* No console noise in commits (`console.log` only behind debug flags).
* Keep functions small and pure where possible.

### Project Conventions

* Keep **React components** small, reusable, and accessible.
* In **Express** routes, separate concerns: route → controller → service → model.
* **Environment config** via `.env`, never commit secrets.
* **Error handling**: centralized middleware returning consistent JSON error shapes.
* **Logging**: use a single logger (e.g., `pino`/`winston`) if/when added.

---

## Testing

* **API**: `Jest` + `supertest` (or similar). Cover success, failure, edge cases.
* **Client**: `@testing-library/react` and `@testing-library/user-event` for UI behavior.
* Aim for tests on new/changed logic; avoid snapshot‑only PRs.

Example API test skeleton:

```js
// __tests__/alerts.test.js
const request = require('supertest');
const app = require('../server');

describe('Alerts API', () => {
  it('creates an alert', async () => {
    const res = await request(app)
      .post('/api/alerts')
      .send({ title: 'Downtime', severity: 'high' });
    expect(res.status).toBe(201);
  });
});
```

---

## UI/Client Guidelines

* Keep state minimal; prefer hooks and context wisely.
* Follow **a11y** best practices (labels, roles, keyboard navigation, color contrast).
* Break layout into composable components; colocate styles with components.
* Use `.env` prefixed vars (e.g., `VITE_` for Vite) for runtime config.

---

## API/Server Guidelines

* Group endpoints under `/api/*`.
* Validate payloads (e.g., `zod`/`joi`/`express-validator`).
* Return proper HTTP status codes and consistent error responses:

  ```json
  { "error": { "code": "VALIDATION_ERROR", "message": "<details>", "fields": { } } }
  ```
* Keep models in `models/` and routes/controllers in `routes/`.
* Sanitize inputs and never interpolate user input into queries.

---

## Database & Migrations

* Use **Mongoose** schemas in `models/`.
* Add indexes where appropriate.
* For breaking schema changes, provide a migration script or backfill plan.

---

## Pull Request Checklist

Before requesting review, verify:

* [ ] PR title uses **Conventional Commits**.
* [ ] Scoped and focused: one topic per PR.
* [ ] Added/updated **tests** for changed logic.
* [ ] **ESLint/Prettier** pass locally (`npm run lint`, `npm run format`).
* [ ] Updated **README** or docs if behavior or env vars changed.
* [ ] No secrets or large binaries committed.

> \[!TIP]
> Include screenshots/GIFs for UI changes and example requests/responses for API changes.

---

## Issue Triage

* Use labels like `bug`, `enhancement`, `good first issue`, `help wanted`.
* When filing a new issue, include reproduction steps, expected vs. actual behavior, and environment info.
* Maintainers may close stale/incomplete issues to keep the queue healthy.

---

## Security

> \[!WARNING]
> **Do not open public issues for security vulnerabilities.**

Please report suspected vulnerabilities privately via the repository **Security** tab or by emailing the maintainer. Provide steps to reproduce and any CVE context if applicable.

---

## License

By contributing, you agree that your contributions will be licensed under this repository’s license. See `LICENSE` in the project root.

---

## FAQ

**Q: The scripts in this guide don’t work for me.**
A: Check `package.json` in the root and `client/` for the authoritative script names, then adjust accordingly.

**Q: Which Node version should I use?**
A: Prefer LTS ≥ 18.x. Use a version manager (e.g., `nvm`) to match the version used in CI (if defined).

**Q: Do I need to open an issue before a PR?**
A: For substantial changes or refactors, yes—please open an issue first to discuss scope and approach.
