export function stripCtl (input: string): string {
  // `g` for global replacement
  // `u` for unicode mode (`\p`)
  // `p{Cc}` for control characters
  return input.replace(/\p{Cc}/gu, "")
}
