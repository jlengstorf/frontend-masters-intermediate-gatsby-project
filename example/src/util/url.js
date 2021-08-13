export function createSlug(str) {
  return str
    .toLowerCase()
    .replace(/['"“”‘’]/g, '')
    .replace(/\W+/g, '-')
    .replace(/(^-+|-+$)/g, '');
}
