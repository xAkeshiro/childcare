/**
 * Every word on the site lives here. Change copy, hours, or contact details in
 * this one file. Placeholders are wrapped in [square brackets].
 */

export const site = {
  name: 'Little Lightbulbs',
  descriptor: 'Family Child Care',
  tagline: 'Where bright ideas begin.',
  city: '[City]',
  region: 'California',
  owner: '[Name]',
  phone: { display: '[(555) 555-0123]', href: 'tel:+15555550123' },
  email: { display: '[hello@yourdomain.com]', href: 'mailto:hello@example.com' },
  address: ['[Street address]', '[City], CA [ZIP]'],
  hours: { days: 'Monday to Friday', time: '8:00 am to 4:30 pm' },
  ages: '12 months to 5 years',
  license: '[pending]',
  /** Sign up at formspree.io, create a form, and paste its ID here to receive requests. */
  formAction: 'https://formspree.io/f/YOUR_FORM_ID',
} as const

/**
 * Tuition. The program charges $1,000 per child per month for full-time care
 * and prefers to show the daily figure: $1,000 ÷ 21.67 (the average number of
 * weekdays in a month, 52 × 5 ÷ 12) = $46.15, shown as $46.
 */
export const pricing = {
  monthly: 1000,
  weekdaysPerMonth: 52 * 5 / 12,
  get daily() {
    return Math.round(this.monthly / this.weekdaysPerMonth)
  },
} as const

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Our day', href: '#day' },
  { label: 'Tuition', href: '#tuition' },
  { label: 'FAQ', href: '#faq' },
] as const

export const hero = {
  eyebrow: `Licensed family child care in ${site.city}, California`,
  headline: { before: 'Where ', highlight: 'bright ideas', after: ' begin.' },
  lede: `A licensed family child care home in ${site.city} for eight children, ages 12 months to 5. Home-cooked meals, outside every day, and a daily note at pickup.`,
  primaryCta: { label: 'Schedule a visit', href: '#visit' },
  secondaryCta: { label: 'See our programs', href: '#programs' },
  proof: ['Ages 12 months to 5 years', 'Up to 8 children', 'Licensed, CPR and first-aid certified'],
} as const

export const facts = [
  { label: 'Hours', value: 'Mon to Fri, 8:00 am to 4:30 pm', icon: 'clock' },
  { label: 'Ages', value: '12 months to 5 years', icon: 'baby' },
  { label: 'Group size', value: 'Up to 8 children, mixed ages', icon: 'home' },
  { label: 'Meals', value: 'Breakfast, lunch, and snack included, following USDA MyPlate', icon: 'apple' },
] as const

export const about = {
  eyebrow: 'About us',
  headline: `Hi, I'm ${site.owner}.`,
  paragraphs: [
    'Little Lightbulbs is my home and my heart. I opened it because I believe the early years deserve more than a place to wait for pickup. Children this age are doing the hardest, most important learning of their lives, and they do it best when they feel safe, known, and free to get a little messy.',
    'Our days are play-based and unhurried. We read a lot, sing a lot, paint with our hands, count the snap peas at lunch, and go outside every day, rain or shine. Parents get a daily note, photos, and a real conversation at pickup, not just a clipboard.',
  ],
  quote:
    'Every child has little lightbulb moments, the second something clicks and their whole face lights up. My job is to make room for as many of those as possible.',
  credentials: [
    'Licensed by the California Department of Social Services',
    'Pediatric CPR and first-aid certified',
    'Early Childhood Education coursework, [units or degree]',
    '[X] years caring for young children',
  ],
  photoAlt: `${site.owner} reading a picture book with two toddlers`,
  photoCaption: `${site.owner}, owner and lead teacher`,
} as const

export const programs = {
  eyebrow: 'Programs',
  headline: 'Care that grows with your child',
  intro: 'Ages 12 months to 5 years, one small mixed-age group. Siblings stay together, and the youngest learn from watching the oldest.',
  items: [
    {
      letter: 'A',
      color: 'red',
      name: 'Young toddlers',
      ages: '12 to 24 months',
      summary: 'First steps, first words, and a gentle rhythm of play, meals, and rest that follows each child.',
      points: ['Naps when your child needs them', 'Songs, fingerplays, and simple sign language', 'Daily note with meals, naps, and firsts'],
    },
    {
      letter: 'B',
      color: 'blue',
      name: 'Toddlers',
      ages: '2 to 3 years',
      summary: 'Sensory bins, first friendships, big feelings handled gently, and lots of "I did it!"',
      points: ['Potty learning when your child is ready', 'Outdoor play twice a day', 'Helping with real jobs, like setting the table'],
    },
    {
      letter: 'C',
      color: 'green',
      name: 'Preschool',
      ages: '3 to 5 years',
      summary: 'Letters, numbers, and shapes woven into play. Kindergarten readiness without the pressure.',
      points: ['Letter of the week and name writing', 'Kitchen science and nature walks', 'Taking turns, using words, making friends'],
    },
  ],
} as const

export const day = {
  eyebrow: 'Our day',
  headline: 'A day at Little Lightbulbs',
  intro:
    "Young children thrive on rhythm. Our schedule is the same every day, with plenty of room inside it for a long book, a big puddle, or a project that just can't stop yet.",
  note: 'Younger toddlers nap when they need to, not only at nap time.',
  items: [
    { time: '8:00', title: 'Arrival, breakfast and free play', detail: 'Hugs at the door, then puzzles, blocks, and the play kitchen' },
    { time: '9:15', title: 'Circle time', detail: 'Songs, the weather, the letter of the week, and a story' },
    { time: '9:45', title: 'Art and sensory', detail: 'Crayons, finger paint, playdough, water tables' },
    { time: '10:30', title: 'Outdoor play', detail: 'Bikes, bubbles, digging, and a nature hunt' },
    { time: '11:30', title: 'Lunch', detail: 'Home-cooked, family style. We count the snap peas.' },
    { time: '12:30', title: 'Nap and quiet time', detail: 'Soft music, books, and rest for tired bodies' },
    { time: '2:30', title: 'Snack and story time', detail: "Two books, at least. Three if we're lucky." },
    { time: '3:15', title: 'Outdoor play and little experiments', detail: 'Baking soda volcanoes, shadow tracing, bug watching' },
    { time: '4:00', title: 'Free play and pickup', detail: 'Wind-down play and a real chat about the day, until 4:30' },
  ],
} as const

export const abcs = {
  eyebrow: 'What we believe',
  headline: 'Our ABCs',
  intro: 'The four things we come back to every single day.',
  items: [
    { letter: 'A', color: 'red', word: 'Affection', text: "Every child is greeted by name and with a hug, or a high-five if they'd rather. Warm, consistent care is where all the learning starts." },
    { letter: 'B', color: 'blue', word: 'Belonging', text: "A small group means no one gets lost in the crowd. Every child has a cubby, a job, a spot on the rug, and friends who notice when they're away." },
    { letter: 'C', color: 'green', word: 'Curiosity', text: "We follow the questions. If someone wants to know where the worms go when it rains, that's the afternoon's plan." },
    { letter: 'D', color: 'orange', word: 'Dirt', text: 'We go outside every day, rain or shine. Please send play clothes. Some of our best thinking happens with muddy knees.' },
  ],
} as const

export const tuition = {
  headline: 'Simple, all-in tuition',
  intro: 'One daily rate covers the whole day, meals included. No supply fees, no surprise add-ons.',
  plan: 'Full-time care',
  perDay: `$${pricing.daily}`,
  unit: 'per day, per child',
  billing: 'Monday to Friday, 8:00 am to 4:30 pm. Billed monthly.',
  included: [
    'Breakfast, lunch, and an afternoon snack, planned around USDA MyPlate guidelines',
    'All art, sensory, and learning materials',
    'Outdoor play every day, rain or shine',
    'A daily note and photos at pickup',
    'Ages 12 months to 5 years',
  ],
  cta: { label: 'Schedule a visit', href: '#visit' },
  note: 'A deposit holds your spot. Ask about sibling enrollment on your visit.',
} as const

export const steps = {
  eyebrow: 'How it works',
  headline: 'Three steps to your first day',
  items: [
    { title: 'Visit', text: 'Come by during nap time, see the space, and ask everything. Thirty minutes, no pressure.' },
    { title: 'Paperwork', text: 'We send the enrollment packet and the state forms. Most families finish them in one evening.' },
    { title: 'First day', text: "Start with a short first week so your child can settle in. You'll get a photo before lunch." },
  ],
} as const

export const faq = {
  eyebrow: 'Questions',
  headline: 'What parents ask',
  items: [
    { q: 'What does it cost?', a: `Full-time care is $${pricing.daily} per day, per child, billed monthly. That covers Monday to Friday, 8:00 am to 4:30 pm, with breakfast, lunch, and an afternoon snack included. A deposit holds your spot.` },
    { q: 'Do you have openings right now?', a: 'Openings come up a few times a year as children move on to kindergarten. If we are full, we keep a short waitlist and reach out in order.' },
    { q: 'What should my child bring?', a: 'A change of clothes, a water bottle, and anything they need for nap. Meals and snacks are provided. Please label everything.' },
    { q: 'What is your sick policy?', a: 'Children stay home with a fever, vomiting, diarrhea, or anything contagious, and come back 24 hours after symptoms end. It protects the whole group, including your child.' },
    { q: 'How do naps work?', a: 'Nap and quiet time runs from about 12:30 to 2:30. Older children who no longer nap rest with books. Younger toddlers can nap earlier when they need to.' },
    { q: 'Are you licensed?', a: `Yes. Little Lightbulbs is licensed by the California Department of Social Services, Community Care Licensing Division (facility license #${site.license}). The license is posted inside, and you are welcome to look it up.` },
    { q: 'What do the children eat?', a: 'Home-cooked breakfast, lunch, and an afternoon snack, planned around the USDA MyPlate guidelines: fruits and vegetables at every meal, whole grains, protein, and dairy or a substitute. Allergies and family preferences are always accommodated.' },
    { q: 'What are your holidays?', a: 'We close on major federal holidays and for one week each summer and winter. The full calendar goes out at enrollment and again each January.' },
  ],
} as const

export const visit = {
  eyebrow: 'Enrollment',
  headline: 'Come say hello',
  intro:
    'The best way to know if Little Lightbulbs is right for your family is to visit. Tell us a little about your child and we will reach out within one business day to set up a tour.',
  tours: 'Weekday afternoons during nap time, so you can see the space and we can really talk.',
  form: {
    title: 'Request a visit',
    childOptions: ['On the way', 'An infant (6 weeks to 18 months)', 'A toddler (18 months to 3 years)', 'A preschooler (3 to 5 years)'],
    messagePlaceholder: 'Allergies, schedule needs, a favorite dinosaur...',
    submit: 'Send request',
    privacy: 'We only use this to get back to you about a visit.',
    notConnected: 'This form is not connected yet. For now, please call, text, or email using the details on this page.',
  },
} as const

export const footer = {
  license: `Licensed by the California Department of Social Services, Community Care Licensing Division. Facility license #${site.license}.`,
  made: 'Made with love and a lot of crayons.',
} as const
