export function stripCtl (input: string): string {
  // `g` for global replacement
  // `u` for unicode mode (`\p`)
  // `p{Cc}` for control characters
  return input.replace(/\p{Cc}/gu, "")
}

export function stripOnce (input: string, search: string): string {
  return input.replace(search, "")
}
