# CS Society Website — Project Guide

A beginner-friendly tour of this codebase. If you've never built a website before, read it top to bottom once. After that, use the [How do I…?](#7-how-do-i) section as a cheat sheet.

---

## 1. What is this project?

This is the official website of the **CS Society at Ashoka University** (AUCSS). It's a multi-page website with a home page, an events archive, a team page, and more.

It is built with these tools. Don't worry if you don't know them yet; each is explained below.

| Tool | What it is, in plain words |
|---|---|
| **Next.js 14** | The framework the whole site is built on. It turns files in folders into web pages. |
| **React** | A way to write a web page as small reusable pieces called *components*. Next.js is built on top of it. |
| **TypeScript** | JavaScript with type-checking (`.ts` / `.tsx` files). It catches typos before you run the site. |
| **Tailwind CSS** | A styling system. Instead of writing separate CSS files, you put short class names on elements: `className="text-primary font-bold"`. |
| **MDX / Markdown** | Plain-text files we use to write event write-ups without touching code. |

---

## 2. Running the site on your computer

You need [Node.js](https://nodejs.org) (version 18 or newer) installed.

```bash
# 1. Install all the libraries the project depends on (only needed once, or after package.json changes)
npm install

# 2. Start the development server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

While the dev server runs, **every time you save a file the browser updates automatically**. This is how you'll work.

Other commands:

| Command | What it does |
|---|---|
| `npm run build` | Creates the optimised production version. Run this before deploying to check nothing is broken. |
| `npm run start` | Serves the production build (run `build` first). |
| `npm run lint` | Checks your code for common mistakes. |

> **Windows note:** the `dev` script in `package.json` is `next dev & npx next-video sync -w`. The `&` (run two things at once) behaves differently on Windows, and the second half is only for the `next-video` library, which the site barely uses. If `npm run dev` doesn't start the site for you, run `npx next dev` instead.

---

## 3. The big picture: folder map

```
cssoc-website/
│
├── src/                      ← ALL the code you'll edit lives here
│   ├── app/                  ← PAGES. Each folder = one URL. (Most important folder!)
│   ├── components/           ← Reusable UI pieces (navbar, footer, cards…)
│   ├── eventposts/           ← Event write-ups, one .mdx file per event
│   ├── lib/                  ← Helper code (reads the event files)
│   ├── utils/                ← Tiny helpers (fonts, class-name merger)
│   └── pages/                ← Leftover from an older setup, not used (see Gotchas)
│
├── public/                   ← Static files served as-is: images, PDFs, join-us.html
│   ├── team/                 ← Team member photos
│   ├── img/events/           ← Event photos and videos
│   └── manifesto.pdf …
│
├── tailwind.config.ts        ← Site colours and fonts (the "theme")
├── next.config.js            ← Next.js settings (rarely touched)
├── tsconfig.json             ← TypeScript settings (rarely touched)
├── package.json              ← List of libraries + the npm commands
│
├── joinUs.html               ← Design reference copy (not served by the site)
└── design ref.html           ← Design reference from the redesign (not served by the site)
```

**Files/folders you can safely ignore:** `node_modules/` (downloaded libraries), `.next/` (auto-generated build output), `package-lock.json`, `tsconfig.tsbuildinfo`, `next-env.d.ts`. Never edit these by hand.

**The rule of thumb:**
- Changing *what a page says or shows* → `src/app/…`
- Changing something *used on many pages* (nav, footer, cards) → `src/components/…`
- Adding an *image or PDF* → `public/…`
- Changing *colours or fonts* → `tailwind.config.ts` / `src/utils/fonts.ts`

---

## 4. How pages work (the core idea)

Next.js uses **file-based routing**: the folder structure inside `src/app/` *is* your URL structure. To make a page, create a folder and put a file named `page.tsx` in it.

```
src/app/page.tsx                        →  /                (home)
src/app/about/page.tsx                  →  /about
src/app/team/page.tsx                   →  /team
src/app/events/page.tsx                 →  /events
src/app/events/[slug]/page.tsx          →  /events/anything  (see below)
src/app/learningcs/python/page.tsx      →  /learningcs/python
```

A `page.tsx` file exports one function that returns the page's HTML-like markup (called **JSX**):

```tsx
export default function TeamPage() {
  return (
    <main>
      <h1>Meet the Society</h1>
    </main>
  );
}
```

### Special files in `src/app/`

| File | Purpose |
|---|---|
| `layout.tsx` | The **shell wrapped around every page**: it puts the `<Navbar />` on top and `<Footer />` at the bottom, and whatever page you're visiting goes in the middle (`{children}`). Also sets the site title and loads the fonts. |
| `globals.css` | Site-wide CSS: Tailwind setup plus custom animations (`reveal-on-scroll`, `card-glow`, …). |
| `not-found.tsx` | The 404 page. |
| `page.tsx` (in each folder) | The page itself. |

So a visit to `/team` is built like this:

```
layout.tsx
 ├── <Navbar />
 ├── team/page.tsx   ← the part that changes per URL
 └── <Footer />
```

### Dynamic pages: `events/[slug]/page.tsx`

Square brackets mean "this part of the URL is a variable". `/events/autumn-of-code` and `/events/github-workshop` are both served by the *same* file; Next.js passes the variable in as `params.slug`, and the code loads the matching event write-up (see [Events system](#5-the-events-system)).

### Server vs. client components (the one confusing thing)

By default every component runs **on the server** (fast, but can't react to clicks). If a component needs interactivity (`useState`, `onClick`, animations, browser APIs), the file must start with:

```tsx
"use client";
```

Examples in this project: `Navbar.tsx` (mobile menu toggle), `reveal.tsx` (scroll animation), `under-construction.tsx` (a mini game). If you get an error like *"useState only works in a Client Component"*, you forgot this line.

---

## 5. The events system

Event pages are **not** written as code. They're generated from simple text files, so anyone can add an event.

```
src/eventposts/autumn-of-code.mdx      ← the content
src/lib/event-posts.ts                 ← code that reads those files
src/app/events/page.tsx                ← list of all events  (/events)
src/app/events/[slug]/page.tsx         ← one event's page    (/events/autumn-of-code)
src/app/page.tsx                       ← home page shows the 2 most recent events
```

An event file looks like this:

```md
---
title: 'Autumn of Code'
date: '01/10/2023'
imgList: ["/img/events/aoc_1.jpg", "/img/events/videos/aoc_4.mp4"]
type: ["image", "video"]
---

Autumn of Code was a month long celebration of open source…
```

- The top block between `---` lines is called **frontmatter**: the event's metadata.
- Everything below is the write-up, in Markdown.
- `imgList` is the gallery. `type` says whether each item is an `"image"` or `"video"`. **The two lists must be the same length and in the same order.**
- The **file name becomes the URL**: `autumn-of-code.mdx` → `/events/autumn-of-code`.
- The event list page looks for a thumbnail at `/public/img/events/<file-name>.png` (e.g. `public/img/events/autumn-of-code.png`).

`src/lib/event-posts.ts` does the work: `getSortedPostsData()` reads every file and returns them newest-first, and `getPostData(slug)` reads one file and converts its Markdown to HTML.

---

## 6. Styling

### Tailwind: styling with class names

Instead of a separate CSS file, you style elements with utility classes:

```tsx
<h1 className="text-5xl font-bold text-primary mb-4">CS Society</h1>
```

| Class | Meaning |
|---|---|
| `text-5xl` | big text |
| `font-bold` | bold |
| `text-primary` | use the brand colour |
| `mb-4` | margin-bottom (spacing) |
| `md:text-7xl` | on screens *medium and wider*, use even bigger text (this is how you make the site responsive) |
| `hover:text-primary` | change colour on mouse hover |

The [Tailwind docs](https://tailwindcss.com/docs) have a search box: type any CSS idea ("rounded corners", "flexbox") and it tells you the class.

### The colour palette

Colours are defined **once** in `tailwind.config.ts`, then used by name everywhere (`bg-primary`, `text-on-surface`, `border-border`):

| Name | Use |
|---|---|
| `primary` (`#D80032`, red) | Brand colour, buttons, links, highlights |
| `background` | Page background |
| `surface`, `surface-container`, `surface-container-low` | Cards and alternating section backgrounds |
| `on-surface`, `on-surface-variant`, `secondary` | Text colours (main, softer, muted) |
| `border` | Borders and dividers |

To change the brand colour across the whole site, change `primary` in that one file.

### Fonts

Defined in `src/utils/fonts.ts` and imported where needed:

```tsx
import { jetbrainsMono } from "@/utils/fonts";
<span className={`${jetbrainsMono.className} uppercase`}>Hello</span>
```

- **Inter**: main body font (set in `layout.tsx`, applies everywhere)
- **JetBrains Mono**: the "techy" monospace font used for labels and buttons
- **Poppins, Bayon**: used by older pages

### The `cn()` helper

`src/utils/cn.ts` lets you combine class names conditionally:

```tsx
className={cn("text-gray-500", isActive && "text-primary")}
```

### The `@/` shortcut

`@/` means "the `src/` folder". `import { Footer } from "@/components/footer"` works from any file, no matter how deeply nested. Prefer it over `../../../`.

### Extra CSS files

A few older sections have their own `.css` files (`resources.css`, `learningcs.css`, `internships.css`, …). They're leftovers from the previous version; new work should use Tailwind.

---

## 7. How do I…?

### …change text on the home page
Open `src/app/page.tsx`. It's split into commented sections (`{/* Hero */}`, `{/* Our Mission */}`, …). Find the words, edit them, save.

### …add or edit a team member
Open `src/app/team/page.tsx`. At the top are plain lists (`coreCommittee`, `facultyAdvisors`, `pastPresidents`). Add a line:

```tsx
{ name: "Jane Doe", role: "Treasurer", socials: { linkedin: "https://…" } },
```

To add a photo, put it in `public/team/` and add `image: "/team/janedoe.jpg"` to the entry. Without one, a placeholder icon is shown.

### …add a new event
1. Create `src/eventposts/my-event.mdx` (copy an existing one and edit).
2. Put a thumbnail at `public/img/events/my-event.png` and any gallery photos in `public/img/events/`.
3. Fill in `imgList` and `type` with matching lengths.
4. Save. It appears on `/events` and (if it's one of the two newest) on the home page.

### …add a brand new page
1. Create a folder: `src/app/contact/`
2. Create `src/app/contact/page.tsx`:
   ```tsx
   export default function ContactPage() {
     return (
       <main className="max-w-5xl mx-auto px-6 py-16">
         <h1 className="text-4xl font-bold">Contact us</h1>
       </main>
     );
   }
   ```
3. Visit `http://localhost:3000/contact`.
4. To put it in the navigation, add it to `navLinks` at the top of `src/components/navbar/Navbar.tsx`.

### …make a page "coming soon"
Use the `UnderConstruction` component (the same one used by many pages now); copy `src/app/projects/page.tsx`. The `title` prop customises the text.

### …edit the navbar links
`navLinks` array at the top of `src/components/navbar/Navbar.tsx`.

### …edit the footer (socials, credits)
`src/components/footer.tsx`. Social links are plain `<a href>` tags; credits are the `credits` array at the top.

### …link to a PDF or download
Put the file in `public/` and link to it by path (without `public`): `<a href="/manifesto.pdf">`.

### …change the "Join us" form
It's a standalone HTML page: `public/join-us.html`, served at `/join-us.html`. It's separate from the React code and loads its own Tailwind from a CDN. Edit it directly. (`joinUs.html` in the project root is just a reference copy and isn't served.)

### …add a scroll-in animation to something
Wrap it in `<Reveal>` (see `src/components/reveal.tsx`); `delayMs` staggers several items:
```tsx
<Reveal delayMs={100} className="bg-surface p-6 rounded-xl">…</Reveal>
```

### …use an icon
`react-icons` is installed. Search icons at [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons/), then `import { MdEmail } from "react-icons/md"` and use `<MdEmail />`.

---

## 8. The components (`src/components/`)

| File / folder | What it is | Status |
|---|---|---|
| `navbar/Navbar.tsx` | The top nav bar, with the mobile menu. **Used by `layout.tsx`.** | ✅ current |
| `footer.tsx` | Footer with socials and hover-to-reveal credits. **Used by `layout.tsx`.** | ✅ current |
| `reveal.tsx` | Scroll-triggered fade-in wrapper | ✅ current |
| `under-construction.tsx` | "Coming soon" placeholder with a small game | ✅ current |
| `cards/event-card.tsx` | Event thumbnail card on `/events` | older style |
| `carousel/carousel.tsx`, `masonry.tsx` | Photo gallery on event pages / Highlights grid | older style |
| `about/*`, `team/box.tsx`, `socials.tsx` | Used by the older About page | older style |
| `countdown/counter.tsx` | Used by the older Events page | older style |
| `navbar/NavItem.tsx`, `navbar/openmenu.tsx`, `cards/resource*.tsx`, `count-up.tsx`, `team/left.tsx`, `team/right.tsx`, `team/leftformobile.tsx` | Nothing in `src/app` imports these any more (checked with a search); left over from the previous design | ⚠️ likely unused |

---

## 9. Where each page stands right now

The site is mid-redesign. Some pages are finished in the new style, some are still the old version, and many are placeholders.

| Status | Pages |
|---|---|
| ✅ **Redesigned** | `/` (home), `/team` |
| 🕰️ **Old design (works, not yet redesigned)** | `/about`, `/events`, `/events/[slug]`, `/resources` |
| 🚧 **"Under construction" placeholder** | `/projects`, `/publications`, `/manifesto`, `/newsletter`, `/internships`, `/internships/internships_info`, `/ashoka-starter-pack`, `/learningcs` and **all ~28 pages under `/learningcs/*`** |

The redesigned pages are the best examples to copy from: **look at `src/app/team/page.tsx` and `src/app/page.tsx` for the current style** (Tailwind, colour tokens, JetBrains Mono labels, `Reveal` animations). Old pages use `bayon`/`poppins` fonts and inline styles.

The PDFs (`manifesto.pdf`, `newsletter_23-24.pdf`, `ashoka-starter-pack.pdf`) are in `public/` and already downloadable. The `/manifesto`, `/newsletter` and `/ashoka-starter-pack` *pages* just haven't been built yet.

---

## 10. Gotchas & known rough edges

Things that aren't obvious and might trip you up:

- **`src/pages/helpdesk.tsx` is dead code.** Next.js has two routing systems (`app/` and the older `pages/`). Everything real lives in `app/`. The `helpdesk` files are leftovers; don't build on them.
- **Event dates are plain text** (e.g. `'25/09/2023'`) and are sorted as strings, so "newest first" can come out wrong across years or with inconsistent formatting. Keep the format consistent, and if ordering looks off, this is why. A good first improvement would be switching to `YYYY-MM-DD`.
- **`events/[slug]/page.tsx` calls `NotFound()` without `return`**, so a bad URL like `/events/does-not-exist` will error instead of showing a clean 404. Should use `notFound()` from `next/navigation`.
- **Images use `unoptimized`** in places, which skips Next.js's automatic image compression. Compress big images yourself before adding them, as they're loaded as-is.
- **Some files start with an invisible BOM character** (`﻿`) at the top. It's harmless.
- **Videos:** `videos/get-started.mp4.json` and the `next-video` package are remnants from an earlier experiment. Event videos are just plain `.mp4` files in `public/img/events/videos/`.
- **Two Tailwind setups:** the React site uses the installed Tailwind (`tailwind.config.ts`), but `public/join-us.html` loads Tailwind from a CDN with its own inline config. Colour changes in one don't affect the other.
- **`README.md` is nearly empty**, so this file is the real documentation. Keep it updated.

---

## 11. Making changes safely (Git workflow)

Git tracks history so you can undo mistakes and collaborate.

```bash
git status                      # what have I changed?
git checkout -b my-change       # work on a separate branch, not directly on main
# …edit files, check them in the browser…
npm run build                   # make sure nothing is broken
git add src/app/team/page.tsx   # stage the files you changed
git commit -m "Update team roster"
git push -u origin my-change    # then open a Pull Request on GitHub
```

Habits that save pain:
- Check the change in your browser (desktop **and** a narrow phone-sized window) before committing.
- Run `npm run build` before pushing. If it fails, deployment will too.
- Small, focused commits with clear messages.

The site uses `@vercel/analytics`, which suggests it's hosted on Vercel, and Vercel typically redeploys automatically when `main` is updated. Confirm with whoever manages the hosting.

---

## 12. Mini glossary

| Term | Meaning |
|---|---|
| **Component** | A reusable function that returns a piece of UI, e.g. `<Footer />`. |
| **JSX / TSX** | HTML-looking syntax written inside JavaScript/TypeScript files. `className` is used instead of `class`. |
| **Props** | Inputs passed to a component: `<EventCard name="…" link="…" />`. |
| **Route** | A URL path such as `/about`. |
| **Slug** | The URL-friendly name of something, e.g. `autumn-of-code`. |
| **Frontmatter** | The metadata block at the top of an `.mdx` file. |
| **Dev server** | The local preview started with `npm run dev`. |
| **Build** | The optimised, ready-to-deploy version of the site. |
| **Responsive** | Looks right on phones and desktops. In Tailwind, prefix classes with `md:`, `lg:` for larger screens. |
| **`node_modules`** | Folder of downloaded libraries. Regenerate any time with `npm install`. |

---

**Stuck?** Search the error message on Google, look at how a similar page already does it (copy-paste-adapt is completely normal), and ask the maintainers listed in the site footer.
