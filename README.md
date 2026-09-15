# Little Thinkers Family Child Care

Website for a licensed family child care home in California. Built with Vite, React 19,
TypeScript, Tailwind CSS v4, and Motion (the current name of Framer Motion), using
components adapted from the 21st.dev ecosystem (Motion Primitives, Magic UI).

The look: crayons, alphabet blocks, painted handprints, warm paper, and a cartoon kid beaming with an idea
mascot, held together by the brand kit in `BRAND.md`.

## Run it

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build to dist/
npm run preview    # serve the production build locally
```

Node 20 or newer.

## Where things live

| Path | What it is |
| --- | --- |
| `src/content/site.ts` | Every word on the site: copy, hours, ages, tuition, contact details, FAQ |
| `src/index.css` | Design tokens (`@theme`) and base styles |
| `src/fonts.css` + `public/fonts/` | Self-hosted Fredoka, Nunito, and Patrick Hand |
| `src/sections/` | One file per section, in page order (navbar, hero, about, programs, day, tuition, abcs, steps, faq, visit, footer) |
| `src/components/ui/` | Button, Card, Container, Section, headings, labels |
| `src/components/motion/` | Reveal, AnimatedGroup, Accordion, Highlighter |
| `src/components/brand/illustrations.tsx` | Kid mascot, handprint, alphabet block |
| `BRAND.md` | The brand kit |
| `NAME-RESEARCH.md` | Why the site isn't called Little Thinkers, and the alternatives checked |
| `.claude/skills/` | Project skills: framer-motion, 21st-dev-components, ui-ux-pro-max |
| `rename.sh` | Changes the business name everywhere |

## Fill in the blanks

Open `src/content/site.ts`. Everything in `[square brackets]` is a placeholder:

- `address` (the street and ZIP), `phone`, `email`, `license`, `owner`
- In `about`: the credentials list (`[units or degree]`, `[X] years`)
- The photo: in `src/sections/about.tsx`, replace the placeholder block with an `<img>` (there is a comment showing how). Put the file in `public/`.

Tuition is computed in `pricing`: $1,000 a month divided by the average 21.67 weekdays in a
month, shown as $46 a day. Change `monthly` there and every mention updates.

## Change the name

```sh
./rename.sh "Little Thinking Caps"
npm run build
```

## Connect the form

The "Request a visit" form posts to [Formspree](https://formspree.io) (free for small volumes).
Create a form there and replace `YOUR_FORM_ID` in `site.formAction`. Until then, pressing
Send shows a note pointing people to the phone number and email.

## Put it online

**GitHub Pages (free, automatic).** The workflow in `.github/workflows/deploy.yml` builds and
publishes the site on every push to `main`. One-time setup: in the repository settings, open
Pages and set Source to "GitHub Actions".

**Netlify or Vercel.** Import the repository; build command `npm run build`, output
directory `dist`.

After deploying, set `og:image` in `index.html` to the full `https://` URL of `og.png` so link
previews show the image.

## Brand and design tools

- `BRAND.md` documents every token, the type scale, illustration rules, motion rules, and
  the page blueprint. Change the kit first, then `src/index.css`.
- The UI/UX Pro Max skill is installed in `.claude/skills/ui-ux-pro-max`. Example:
  `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "form validation" --domain ux`.
- Fonts were fetched from Google Fonts (SIL Open Font License) and saved locally. To change
  families, download the new `.woff2` files into `public/fonts/` and update `src/fonts.css`.
