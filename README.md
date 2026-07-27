# Do Thi Thuy Anh
A clean, componentized React + Vite rebuild of the portfolio site. No bundling
into one file — every section is its own component with its own stylesheet,
and all editable content (projects, publications, experience, news, skills,
contact info) lives in plain data files under `src/data/`.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

Requires Node.js 18+.

## Folder structure

```
public/
  logo-mark-cropped.png   # footer logo (transparent PNG)
  images/
    projects/              # ← portfolio card + detail placeholder images (.webp)
    publications/          # ← Featured Publications cover placeholder images (.webp)
src/
  main.jsx                # app entry, mounts <App> with routing
  App.jsx                 # page shell: assembles all sections + routes
  styles/
    tokens.css            # ALL design tokens (colors, fonts, spacing) live here
    global.css             # resets, shared utility classes, keyframes
  data/                   # ← YOUR CONTENT. Edit these files, not the components.
    portfolio.js           # Selected Work projects
    publications.js        # Research papers + venues + focus areas
    experience.js           # Academic Teaching / Industry Practice timelines
    news.js                 # Conferences / Awards / Speaking cards
    skills.js                # Technical skills, grouped
    contact.js                # Email, phone, links, ORCID, location
  components/
    Nav.jsx / .css
    Hero.jsx / .css              # cursor spotlight + book-cover-opening intro
    Research.jsx / .css           # includes the up/down publication viewer
    News.jsx / .css
    FeaturedPublications.jsx / .css # publication cover gallery, above Work
    Work.jsx / .css               # filterable grid
    WorkCard.jsx / .css            # tilt + spotlight hover card, links to detail
    WorkDetailPage.jsx / .css       # real route: /work/:slug
    Experience.jsx / .css
    Skills.jsx / .css
    Contact.jsx / .css
    DustParticles.jsx               # shared ambient-particle helper
    AmbientLight.jsx                 # page-wide fixed glow layer
```

## How to make common edits

### Change any text
Open the relevant file in `src/data/` and edit the strings. No component code
needs to change. For one-off headings/labels that aren't in a data file yet
(e.g. the Hero bio paragraph), edit the JSX directly in that component — it's
plain text inside a `<p>`/`<div>`, easy to find.

### Replace an image
- **Work projects**: replace the file in `public/images/projects/<slug>.webp` —
  the filename must match the `image` path referenced in `src/data/portfolio.js`.
  Recommended aspect ratio: 4:5 (portrait). All current images are generated
  placeholders — swap in real photography/renders whenever you have it.
- **Publication covers**: replace files in `public/images/publications/` and
  update the `cover` path in `src/data/publications.js`. Aspect ratio 3:4.
- **Logo**: replace `public/logo-mark-cropped.png` (keep transparency if possible).

### Add a new project to Selected Work
Add a new object to the array in `src/data/portfolio.js`:
```js
{
  id: 'p10',
  slug: 'my-new-project',           // used in the URL /work/my-new-project
  title: 'My New Project',
  cat: 'Branding & Identity',        // must match one of the `categories` above,
                                      // or add a new category to that list too
  image: '/images/projects/my-new-project.webp',
  abstract: 'A short paragraph describing the project…',
}
```
Then drop the image at `public/images/projects/my-new-project.webp`. Done — it shows up in
the grid and gets its own detail page automatically.

### Add a new publication
Add an object to the `publications` array in `src/data/publications.js` (same
shape as the existing two: `no`, `title`, `venue`, `abstract`, `cover`). It becomes
browsable via the up/down arrows automatically, and appears as a new card in
the Featured Publications gallery. Update `publicationCount` if you want the
big number in the Research section to reflect the new total.

### Add a new page
This project uses `react-router-dom`. To add a page (e.g. a standalone "About"
page):
1. Create `src/components/AboutPage.jsx` (+ `.css`).
2. In `src/App.jsx`, add a route: `<Route path="/about" element={<AboutPage />} />`.
3. Link to it from `Nav.jsx`: `<NavLink to="/about">About</NavLink>`.

### Change colors, fonts, or spacing
Everything is a CSS custom property in `src/styles/tokens.css`. Change a value
there once and it updates everywhere. The whole page uses **one continuous
background gradient** (`--page-gradient`) rather than flat per-section colors —
keep it that way to avoid visible seams when scrolling; if you want a
brighter/darker feel, adjust the gradient's color stops instead of adding a
`background` to a `.section`.

## Design notes carried over from the original
- Buttons must keep `appearance: none` — several visual bugs during design
  traced back to native browser button chrome (a white background) showing
  through when this was omitted.
- The Hero's cover-opening animation and cursor spotlight, and the Work
  cards' tilt + spotlight hover, are intentionally kept as local component
  state (`useState`) rather than global state — they don't need to be shared
  anywhere else.
- Fonts (`Bricolage Grotesque` for headings, `Manrope` for body) are loaded
  via Google Fonts `<link>` tags in `index.html`.

## Responsive behavior
- **Nav**: collapses to a hamburger menu below 860px; the desktop link row is
  hidden and a toggle reveals a stacked mobile menu instead.
- **Hero**: name/subtitle/bio use `clamp()` so type scales smoothly down to
  small phones without overflowing or needing manual breakpoints.
- **Work grid**: 4 columns desktop → 3 columns ≤ 1280px → 2 columns ≤ 860px →
  1 column ≤ 560px. Cards no longer rest at a tilted angle — they sit flat and
  aligned, with the tilt/spotlight effect only appearing on hover.
- `overflow-x: hidden` is set on `html`/`body`/`#root`/`.page`/`.section` as a
  safety net against accidental horizontal scroll from any fixed-width content.
- Desktop layout and visual style are unchanged from the previous version.
