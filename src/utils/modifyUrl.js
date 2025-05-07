export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // remove all non-alphanumeric characters (including underscores, symbols, etc.)
    .replace(/\s+/g, "-") // replace spaces with dashes
    .replace(/-+/g, "-") // collapse multiple dashes
    .trim();
}

export function deslugify(slug) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize each word
}
