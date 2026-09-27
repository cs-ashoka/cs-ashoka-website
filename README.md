# CS Society's Official Website

The source code for the official website of the **CS Society at Ashoka University** (AUCSS), 2026 version.

The site is a home for everything the society does: an overview of who we are, the team, an archive of past events, learning resources, and a form to join.

The old version of the site is archived at [cssoc-archive.vercel.app](https://cssoc-archive.vercel.app).

## Tech stack

| Tool | Used for |
|---|---|
| [Next.js 14](https://nextjs.org/) (App Router) | The framework: routing, pages, building the site |
| [React 18](https://react.dev/) | Building the UI out of components |
| [TypeScript](https://www.typescriptlang.org/) | Type-checked JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| Markdown (`.mdx`) + `gray-matter` + `remark` | Event write-ups |
| [Vercel Analytics](https://vercel.com/analytics) | Visitor analytics |

## Getting started

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
git clone <this-repo-url>
cd cssoc-website
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). The page reloads automatically when you save a file.

> On Windows, if `npm run dev` doesn't start the site, run `npx next dev` instead.

| Command | What it does |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Create the production build (run this before pushing to check nothing is broken) |
| `npm run start` | Serve the production build |
| `npm run lint` | Check the code for common mistakes |

## Project structure

```
src/
├── app/            Pages. Each folder is a URL (app/team/page.tsx -> /team)
├── components/     Reusable UI pieces (navbar, footer, cards, ...)
├── eventposts/     One .mdx file per event; these become the /events pages
├── lib/            Helper code (reads the event files)
└── utils/          Small helpers (fonts, class-name merger)
public/             Static files served as-is: images, PDFs, team photos, join-us.html
tailwind.config.ts  Site colours and fonts
```

## Common tasks

- **Edit the team:** change the lists at the top of `src/app/team/page.tsx`. Put photos in `public/team/`.
- **Add an event:** create a `.mdx` file in `src/eventposts/` (copy an existing one) and add its images under `public/img/events/`.
- **Add a page:** create `src/app/<name>/page.tsx`, then add a link in `src/components/navbar/Navbar.tsx` if it should appear in the menu.
- **Change the brand colour:** edit `primary` in `tailwind.config.ts`.

## Current status

The site is mid-redesign.

- **Redesigned:** Home, Team
- **Older design, still working:** About, Events, Resources
- **Placeholder ("under construction"):** Projects, Publications, Manifesto, Newsletter, Internships, Ashoka Starter Pack, and the Learning CS pages

## Documentation

New to web development? **[PROJECT_GUIDE.md](./PROJECT_GUIDE.md)** is a beginner-friendly walkthrough of the whole codebase: how pages work, how styling works, step-by-step recipes, and known rough edges.

## Contributing

1. Create a branch: `git checkout -b my-change`
2. Make your changes and check them in the browser (desktop and phone width)
3. Run `npm run build` to make sure nothing is broken
4. Commit, push, and open a Pull Request

## Contact

- Email: [cs.society@ashoka.edu.in](mailto:cs.society@ashoka.edu.in)
- Instagram: [@cs.ashoka](https://www.instagram.com/cs.ashoka/)
- GitHub: [cs-ashoka](https://github.com/cs-ashoka)
- LinkedIn: [CS Society, Ashoka University](https://www.linkedin.com/company/cs-society-ashoka-universtiy/)
