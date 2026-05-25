# ✨ HCLHack — Hotel Booking Frontend

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![Framework](https://img.shields.io/badge/framework-Angular-informational) ![License](https://img.shields.io/badge/license-MIT-blue)

---

<p align="center">
	<img src="public/logo.png" alt="Project Logo" width="160" />
</p>

A polished, responsive Angular frontend for hotel room search, booking and admin reporting — built as part of HCLHack Use Case 3.

**Highlights**
- Modern Angular SPA with guarded routes and HTTP interceptors
- Booking flow, payment stub, admin dashboards and exportable reports
- Clean component structure and reusable services

---

## Quick Start

Prerequisites:
- Node.js (16+ recommended)
- npm (or yarn)

Install dependencies:
```bash
npm install
```

Run (development server):

```bash
npm start
# or
ng serve
```

Open http://localhost:4200 in your browser.

Run tests:

```bash
npm test
```

---

## Project Layout

Top-level important files and folders:

- `angular.json` — Angular workspace config
- `package.json` — scripts & dependencies
- `src/` — application source
	- `app/` — main app code
		- `core/` — guards, interceptors, models, services
		- `pages/` — route pages (home, login, booking, admin, reports)
		- `shared/` — shared components (navbar, loader, alert)
	- `environments/` — `environment.ts` and `environment.prod.ts`

This project follows a feature-oriented layout to keep pages and related components grouped.

---

## Environment & Configuration

- API base URLs and keys are loaded from `src/environments/environment.ts`.
- Update `environment.ts` for local development; ensure production secrets do not get checked into the repo.

---

## Common Scripts

- `npm start` — runs the dev server
- `npm test` — runs unit tests
- `npm run build` — builds the production bundle (check `package.json` for exact script)

---

## Development Notes

- Authentication: `auth.service.ts` and `auth.interceptor.ts` coordinate token storage and request headers.
- Route protection: `auth.guard.ts` and `admin.guard.ts` secure client routes.
- Booking flow: `booking.service.ts` and `payment.service.ts` orchestrate booking creation and payment processing (mock/stub for demo).

---

## Contribution

Contributions, issues and feature requests are welcome.

- Create a branch: `git checkout -b feat/your-feature`
- Commit changes with clear messages
- Open a pull request describing the change

---

## License

This project is provided under the MIT License. See LICENSE for details.

---

## Contact

If you need help, reach out to the project maintainer or open an issue.

*Built with ❤ for HCLHack* 
