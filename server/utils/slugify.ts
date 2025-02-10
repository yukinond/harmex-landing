import { slugify as translit } from 'transliteration'

export function slugify(text: string): string {
  return translit(text)
    .toLowerCase()
    .replace(/\s+/g, '-') 
    .replace(/[^a-z0-9\-]+/g, '') 
    .replace(/--+/g, '-') 
    .trim()
}