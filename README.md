# Little Lightbulbs Family Child Care

A simple, single-page website for a licensed family child care home in California.
Plain HTML, CSS, and a few lines of JavaScript. No build step, no frameworks.

The look: crayons, alphabet blocks, painted handprints, construction paper, and a
smiling lightbulb mascot.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole site (header, hero, facts, about, programs, daily schedule, our ABCs, enrollment form, footer) |
| `styles.css` | All styling. Colors and fonts live in the `:root` block at the top |
| `script.js` | Mobile menu, copyright year, and the "form isn't connected yet" notice |
| `assets/favicon.svg` | Browser tab icon |
| `assets/og.png` | Preview image when the link is shared in texts or social media |
| `rename.sh` | Changes the business name everywhere in one go |
| `NAME-RESEARCH.md` | Why the site isn't called Little Thinkers, and the alternatives that were checked |

## See it

Open `index.html` in any browser. That's it.

## Fill in the blanks

Search `index.html` for `[` to find every placeholder. There are only a few:

- `[City]`, `[Street address]`, `[ZIP]`
- `[(555) 555-0123]` and the `tel:` link next to it
- `[hello@yourdomain.com]` and the `mailto:` link next to it
- `[Name]`, `[units or degree]`, `[X] years`
- `Facility license #[pending]` in the footer
- The photo: replace the `photo-placeholder` block in the About section with an `<img>` (there is a comment showing how)

Hours, ages, group size, meals, the daily schedule, and all the copy are real starting
text. Change anything that doesn't match how the program actually runs.

## Change the name

```sh
./rename.sh "Little Thinking Caps"
```

This swaps the name in `index.html` and this README. It works on Mac and Linux. On
Windows, use your editor's find-and-replace for the current name instead.

## Connect the form

The "Request a visit" form uses [Formspree](https://formspree.io) (free for small volumes):

1. Create a Formspree account and a new form.
2. Copy the form ID and replace `YOUR_FORM_ID` in the form's `action` attribute in `index.html`.

Until that's done, pressing Send shows a friendly note pointing people to the phone number and email.

## Put it online

Any static host works. Two easy options:

- **GitHub Pages**: in the repository settings, open Pages, choose the `main` branch and the root folder. The site appears at `https://<username>.github.io/<repo>/`.
- **Netlify or Vercel**: connect the repository, or drag the folder onto their dashboard. Both give a free URL and let you attach a custom domain.

Domains that were available when this was built: `littlelightbulbschildcare.com` and
`littlelightbulbspreschool.com` (about $11 a year).

After deploying, set the `og:image` meta tag in `index.html` to the full `https://` URL of `assets/og.png` so link previews show the image.

## Change colors or fonts

Everything is a token at the top of `styles.css`. The crayon colors are `--red`, `--orange`,
`--yellow`, `--green`, `--blue`, `--purple`, and `--pink`. The paper colors are `--paper`,
`--sky`, `--mint`, and `--lavender`. Fonts are loaded from Google Fonts in the `<head>` of
`index.html` (Fredoka for headings, Nunito for text, Patrick Hand for the handwritten bits).
