import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * Merge Tailwind classes safely (the shadcn/21st.dev convention).
 * The brand's named type sizes (text-h1, text-h2, text-h3, text-lede, text-body,
 * text-label) are registered as font sizes so tailwind-merge never mistakes
 * them for text colors and drops them.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['h1', 'h2', 'h3', 'lede', 'body', 'label'] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
