# Little Thinkers brand kit

The source of truth for how the site looks, reads, and moves. Tokens in `src/index.css`
mirror section 12. Change this document first, then the tokens, then the components.

## 1. Essence and voice

**Essence.** A small, licensed family child care home where children are known by name,
fed real food, and taken outside every day. The brand is warm and specific, never cute for
its own sake. It borrows Cluely's discipline (one ground, one accent, whitespace as the
divider, hairline borders, a strict type scale) and applies it to an identity that is
warmer than any software company: crayons, alphabet blocks, painted handprints, and a
cartoon kid beaming with an idea.

**Voice.** A warm, specific owner talking to a parent at pickup. First person. Plain words,
short sentences, one concrete detail per claim. Calm and certain about safety, licensing,
and money; playful about mud and dinosaurs. It sounds like a person who counts snap peas,
not a brochure.

Lines that set the tone (keep them):
- Where bright ideas begin.
- Home-cooked, family style. We count the snap peas.
- Two books, at least. Three if we're lucky.
- Hugs at the door, then puzzles, blocks, and the play kitchen.
- One daily rate covers the whole day, meals included. No supply fees, no surprise add-ons.
- Made with love and a lot of crayons.

Never write: nurturing environment, holistic, enriching, state-of-the-art, where every
child thrives, unlock their potential, journey, passion for excellence. No exclamation
marks in body copy. No section opens with "We believe" or a question. No triple-list
followed by triple-list ("X, Y, and Z are A, B, and C"). Facts the owner has not supplied
stay in [square brackets]; never invent a city, name, phone, or license number.

## 2. Logo and mascot

**The mark** is a simple cartoon kid beaming with an idea: a round face in ink outline
(6 units in a 200-unit box) with a paper-white fill, an ink hair cap, dot eyes, a smile,
rosy cheeks, little ears, and seven crayon-orange excitement rays radiating from the top of
the head. The rays are the "little thinker" moment; the face keeps it friendly at every
size. Source: `Kid` in `src/components/brand/illustrations.tsx`. Favicon:
`public/favicon.svg`.

**Wordmark.** "Little Thinkers" in Fredoka 600, ink, always on one line. "Family Child
Care" beneath it in the 13px label style (ink-soft), hidden on phones.

**Sizes.** Header 36px, footer 32px, about 96px in the photo placeholder, favicon. Never
below 24px.

**Clear space.** At least half the mark's height on every side. Nothing overlaps it.

**Don't.** Recolor the outline, add gradients or shadows, rotate it, place it on a tinted
band, use it as a bullet, or pair it with a second mascot. The kid appears as the logo
(header, footer, favicon) and in the photo placeholder until a real photo exists. It is
not in the hero: the headline carries the hero alone.

## 3. Color

One ground, one accent. The crayon box lives in the drawings; blue is the only color that
touches interface controls; yellow is the marker. Contrast ratios are computed against the
ground named in each row.

| Token | Hex | Role | Contrast |
| --- | --- | --- | --- |
| `paper` | #FFF6E5 | The only page ground: header, every section, footer | ink 12.7:1, ink-soft 6.5:1, accent 6.0:1 |
| `paper-2` | #FFFDF8 | Cards, the facts strip, the form, the mobile menu panel, the mascot fill | ink 13.5:1, ink-soft 6.9:1 |
| white | #FFFFFF | The schedule sheet, the photo mat, inputs; text on the accent button | ink 13.7:1; white on accent 6.4:1 |
| `line` | #DCCDB3 | 1px hairline on every container | decorative |
| `line-soft` | #EDE3CF | 1px dividers inside cards and between sections | decorative |
| `line-strong` | #948B7A | Input borders only (3.4:1 on white, the non-text minimum is 3:1) | non-text |
| `ink` | #2F2A44 | Headings, body, nav, links, block letters, illustration outlines | see above |
| `ink-soft` | #5C566F | Secondary text: ledes, summaries, labels, license and privacy lines | 6.5:1 on paper |
| `ink-mute` | #6F6983 | Placeholder text inside inputs only | 5.2:1 on white |
| `accent` | #2458C4 | The one interface accent: primary button, schedule times, focus ring, link hover, step numbers | 6.0:1 on paper |
| `accent-hover` | #1F4FB0 | Primary button hover and active | white on it 7.5:1 |
| `accent-soft` | #E8EFFB | The form's status note, the photo placeholder wash | ink 12:1 |
| `marker` | #FFC53D | The highlight, the link underline, the nav hover underline, selection, skip link | ink on it 8.7:1 |
| `crayon-red` | #E84855 | Fill only: block A, the red handprint, the Young toddlers card edge | never text |
| `crayon-red-deep` | #C22D3B | Red text, if ever needed (form errors) | 5.2:1 on paper |
| `crayon-blue` | #3C7FE0 | Fill only: block B, the blue handprint, the Toddlers card edge | never text |
| `crayon-green` | #3FA85B | Fill only: block C, the green handprint, the Preschool card edge | never text |
| `crayon-green-deep` | #237A3C | Check marks in credential and tuition lists | 5.0:1 on paper |
| `crayon-orange` | #F58A2B | Fill only: the mascot's rays, the third crayon in the hero fan | never text |
| `crayon-yellow` | #FFC53D | Same value as `marker`; reserved for drawings | never text |
| `crayon-purple` | #8B5CD6 | Fill only: the first crayon in the hero fan | never text |
| `crayon-pink` | #F27BA5 | Fill only: the mascot's cheeks at 60% | never text |

Rules. Text is ink or ink-soft, plus accent for interactive text and green-deep for check
marks. Crayon colors are fills in drawings and the 6px top edge of the program cards, never
text. No tinted section bands, no gradients on the ground, no dark footer.

## 4. Typography

| Face | Weights | Used for |
| --- | --- | --- |
| Fredoka | 600 (500 loaded as fallback) | h1, h2, h3, the wordmark, the pull quote, schedule times, the tuition figure, block letters |
| Nunito | 400, 600, 700 | Everything else: body 400, secondary and list text 600, nav, buttons and labels 700 |
| Patrick Hand | 400 | Exactly one place: the photo caption. Never a label, never colored |

Fonts are self-hosted from `public/fonts/` (SIL Open Font License), latin and latin-ext
subsets, `font-display: swap`.

The six-step scale (`--text-*` in the tokens):

| Step | Size / line height | Notes |
| --- | --- | --- |
| h1 | clamp(40px, 1.6rem + 3.2vw, 56px) / 1.07 | letter-spacing -0.02em, `text-wrap: balance` |
| h2 | clamp(30px, 1.35rem + 1.8vw, 40px) / 1.1 | letter-spacing -0.015em |
| h3 | 24px / 1.25 | card and item titles |
| lede | 18px / 1.55 | hero lede, section intros, ink-soft, max-width 38rem |
| body | 16px / 1.625 | reading text; 15px at weight 600 for secondary lines |
| label | 13px / 1.25 | uppercase, letter-spacing 0.08em, Nunito 700, ink-soft |

Two exceptions with a reason: the pull quote in About (Fredoka 600, 28px) and the tuition
figure (Fredoka 600, 52px). Nothing else invents a size.

No eyebrow component. Sections open with the h2; the label style marks small groups of
data (facts, age ranges, contact rows, footer columns), never a section.

## 5. Shape and surface

| Token | Value | Used for |
| --- | --- | --- |
| `radius-xs` | 6px | The skip link, focus corners, the photo inside its mat |
| `radius-sm` | 10px | Inputs, select, textarea, the form status note |
| `radius-md` | 12px | Buttons, the photo mat |
| `radius-lg` | 16px | The mobile menu panel |
| `radius-xl` | 20px | Cards: programs, facts, tuition, the form |
| `shadow-soft` | 0 1px 2px rgb(47 42 68 / 0.06) | Cards |
| `shadow-lift` | 0 8px 24px rgb(47 42 68 / 0.10) | The photo mat and the open mobile menu only |

Borders are 1px everywhere. Nothing is a pill. Nothing rotates except the photo mat (-1deg)
and the decorative handprints. Hard offset shadows, ink outlines, dashed rules, scalloped
edges, and hover lifts on cards do not exist in this kit.

## 6. Spacing and layout

- Column: 1120px, centered. Gutters 20px on phones, 32px from 640px.
- Section rhythm: 96px top and bottom on phones, 128px on desktop, separated by whitespace
  and at most one 1px `line-soft` rule at the top of a section.
- Grids: 3 columns for programs and values, 4 (2, then 1) for facts, 2 columns for
  about, day, tuition, FAQ, and visit. Everything stacks to one column below 1024px.
- Breakpoints to check: 375, 390, 768, 1024, 1440.
- Touch targets are at least 44px. Buttons are 48px tall (40px in the header).

## 7. Illustration system

One drawing language: flat crayon fills, ink outlines at 6 units per 200, round caps and
joins, no gradients, no shadows, no wobble filters. Every drawing takes its color from
`currentColor` so `className="text-crayon-red"` paints it.

| Asset | Where it appears | Where it must not |
| --- | --- | --- |
| The kid | Header, footer, favicon, the photo placeholder | The hero, bullets, cards, backgrounds |
| Alphabet blocks | Our ABCs at 96px, where the letters are the content | The hero, program cards, icons |
| Handprints | One cluster of three overlapping prints in the Visit section | Rows, footers, backgrounds |
| Marker highlight | The word "bright ideas" in the hero and "aha moments" in the pull quote (two per page, maximum) | Nav, labels, buttons |
| Icons | Lucide only, 20px, stroke 1.75, ink, inside a 40px hairline circle | Emoji, hand-drawn icons |

Composition rule: every drawing means something, and the hero has none. The headline,
the marker, and whitespace carry the first screen (the Cluely move). No prop is ever added
just to fill space. Stars, suns, crayon fans, and squiggles stay out of the kit.

Photos: the About section wants a real photo of the owner in the space, 4:5, in the white
mat. Until then the placeholder is a soft paper-to-accent wash with the mascot and a plain
instruction, never diagonal stripes or tape.

## 8. Motion

Motion explains, it never decorates. At most two moving things per screen. Everything
meant to be read is visible at rest, and every duration drops to zero when the visitor's
system asks for reduced motion (`<MotionConfig reducedMotion="user">` in `main.tsx`).

Allowed, with the values used:
- Reveal: opacity 0 to 1 and a 12px rise, 0.45s, ease `[0.22, 1, 0.36, 1]`, once, when a
  tenth of the element is visible. On section headings, the photo mat, the itinerary, the form.
- Staggered group: the same reveal, 0.08s apart, on the three program cards and the three
  values. Never more than four children.
- Highlighter: rough-notation draws the marker over 0.7s, once, when in view; static
  under reduced motion.
- Hover and focus: color changes over 0.15 to 0.2s (button fill, link underline, nav
  underline, header shadow). No movement on hover.
- Mobile menu: opacity and a 8px slide over 0.22s. FAQ accordion: height over 0.3s.

Forbidden: parallax, scroll-jacking, particle or beam backgrounds, marquees, text scramble
or typewriter effects, spring bounces, rotating or flipping cards, hover scale or tilt,
autoplaying carousels, anything longer than 0.8s, loops of any kind, animating width,
height, top, or left.

## 9. Components

- **Button (primary).** 48px tall (40px small), padding 0 24px, radius 12px, accent fill,
  white Nunito 700 text, no border, no shadow. Hover and active: accent-hover fill. Focus:
  4px ring at 30% accent. Exactly one primary button in the header, the hero, the tuition
  card, the form, and the mobile menu. There is no secondary button in the kit.
- **Text link.** Nunito 700 ink with a 3px marker underline, offset 6px; hover turns the
  underline accent. Optional trailing arrow. Used for "See our programs", phone, email.
- **Label.** The 13px uppercase style. Facts, age ranges, contact rows, footer columns.
- **Card.** paper-2 fill, 1px line, radius 20px, soft shadow, padding 28px. No hover.
- **Program card.** A 6px top edge in the program's crayon color, a label for the age
  range, h3, summary, a hairline, then a list with check marks.
- **Facts strip.** One card under the hero with four facts: icon circle, label, value.
- **Photo mat.** White, 12px padding, 1px line, radius 12px, lift shadow, -1deg, Patrick
  Hand caption beneath.
- **Pull quote.** Fredoka 600 28px in ink with the marker underline on two words.
- **Daily itinerary.** No card and no paper texture. Three phases (Morning, Midday,
  Afternoon), each opening with a phase name in Fredoka 600 and its time range in the label
  style, over a 2px ink rule. Rows below it are a two-column grid: the time right-aligned in
  Fredoka 600 accent with tabular figures, then the title in Nunito 700 and the detail in
  ink-soft, separated by 1px hairlines.
- **Tuition card.** Label, the daily figure in Fredoka 600 52px with "per day, per child"
  beside it, the billing line, the primary button, a hairline, then what's included.
- **Steps.** Numbered 01 to 03 in Fredoka 600 accent above a 1px rule; numbers are used
  here because enrollment is a real sequence.
- **FAQ accordion.** Hairline dividers, a 28px plus-circle that rotates to a cross when
  open, `aria-expanded` and `aria-controls` on real buttons, one item open at a time.
- **Form field.** Nunito 700 15px label above; input 48px tall, white, 1px line-strong,
  radius 10px, ink text, ink-mute placeholder; focus adds an accent border and a 4px ring.
- **Icon circle.** 40px, paper fill, 1px line, one Lucide icon at 20px.
- **Header.** 64px (72px desktop), sticky, paper at 92% with an 8px blur, no border, a 1px
  shadow once scrolled. Brand left, five links and a small button right, an icon-only menu
  button below 768px.
- **Footer.** Paper, 1px line on top, three columns, the license line in ink-soft, a bottom
  row with the copyright and the sign-off.

## 10. Page blueprint

1. **Header.** Brand, About, Programs, Our day, Tuition, FAQ, Schedule a visit.
2. **Hero.** Centered: location line, h1 with the marker on "bright ideas", a two-sentence
   lede with the facts a parent scans for, one button and one text link, and a one-line trust
   list. No illustration; the headline is the hero.
3. **Facts strip.** Hours, ages, group size, meals. Stated once, here.
4. **About.** Photo mat, the owner's greeting as the h2 (a placeholder until she writes it),
   her paragraphs, the pull quote, credentials.
5. **Programs.** Three cards: Young toddlers, Toddlers, Preschool.
6. **Our day.** The sticky intro beside the itinerary: Morning, Midday, and Afternoon,
   8:00 to 4:30.
7. **Tuition.** One card, the daily rate, what's included, the button.
8. **Our ABCs.** Affection, Belonging, Curiosity, with the 96px blocks.
9. **How it works.** Visit, Paperwork, First day.
10. **FAQ.** Cost, openings, what to bring, sick policy, naps, licensing, meals, holidays.
11. **Visit.** Contact rows, the handprint cluster, the request form.
12. **Footer.** Brand, tagline, license line, Explore, Visit, copyright.

## 11. "Not generated" checklist

The specific choices that keep this from reading as template-made. Check before shipping:

- [ ] One ground from header to footer. No tinted bands, scallops, dot grids, or dark footer.
- [ ] Every border is 1px. No ink outlines, hard offset shadows, dashed rules, or wobbly radii.
- [ ] One solid button color. The second action is always a text link.
- [ ] Sections open with an h2, never an eyebrow. Labels only mark data.
- [ ] Fredoka only at 600 on headings; Nunito for all interface text; handwriting once.
- [ ] Each drawing has one home (section 7). Blocks are content, not bullets.
- [ ] The marker appears twice at most, drawn, never stretched.
- [ ] The hero is typography and whitespace, not a scatter of props.
- [ ] Icons are Lucide in hairline circles. No emoji, no metaphor icons.
- [ ] The copy keeps its specifics (snap peas, three books, hugs at the door) and has no
      brochure words.
- [ ] Nothing bounces, tilts, or glows. One drawn mark, one reveal style.

## 12. Tokens

The `@theme` block in `src/index.css` is the executable version of this document.

```css
@theme {
  --color-paper: #FFF6E5;
  --color-paper-2: #FFFDF8;
  --color-line: #DCCDB3;
  --color-line-soft: #EDE3CF;
  --color-line-strong: #948B7A;
  --color-ink: #2F2A44;
  --color-ink-soft: #5C566F;
  --color-ink-mute: #6F6983;
  --color-accent: #2458C4;
  --color-accent-hover: #1F4FB0;
  --color-accent-soft: #E8EFFB;
  --color-ring: #2458C4;
  --color-marker: #FFC53D;
  --color-crayon-red: #E84855;      --color-crayon-red-deep: #C22D3B;
  --color-crayon-orange: #F58A2B;
  --color-crayon-yellow: #FFC53D;
  --color-crayon-green: #3FA85B;    --color-crayon-green-deep: #237A3C;
  --color-crayon-blue: #3C7FE0;
  --color-crayon-purple: #8B5CD6;
  --color-crayon-pink: #F27BA5;
  --font-display: "Fredoka", "Nunito", ui-rounded, system-ui, sans-serif;
  --font-sans: "Nunito", ui-rounded, system-ui, sans-serif;
  --font-hand: "Patrick Hand", "Segoe Print", "Bradley Hand", cursive;
  --text-h1: clamp(2.5rem, 1.6rem + 3.2vw, 3.5rem);   /* line-height 1.07, tracking -0.02em */
  --text-h2: clamp(1.875rem, 1.35rem + 1.8vw, 2.5rem); /* line-height 1.1, tracking -0.015em */
  --text-h3: 1.5rem;      /* 1.25 */
  --text-lede: 1.125rem;  /* 1.55 */
  --text-body: 1rem;      /* 1.625 */
  --text-label: 0.8125rem;/* 1.25, tracking 0.08em, uppercase */
  --radius-xs: 6px; --radius-sm: 10px; --radius-md: 12px; --radius-lg: 16px; --radius-xl: 20px;
  --shadow-soft: 0 1px 2px rgba(47, 42, 68, 0.06);
  --shadow-lift: 0 8px 24px rgba(47, 42, 68, 0.10);
  --ease-out-soft: cubic-bezier(0.22, 1, 0.36, 1);
}
```
