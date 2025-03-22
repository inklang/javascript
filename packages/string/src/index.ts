export const stripCtl = (input: string): string =>
  // `g` for global replacement
  // `u` for unicode mode (`\p`)
  // `p{Cc}` for control characters
  input.replace(/\p{Cc}/gu, "");

export const stripAll = (input: string, search: string): string =>
  input.replaceAll(search, "");

export const split = (input: string, separator: string): Array<string> =>
  input.split(separator);

export const concat = (segments: Array<string>): string =>
  segments.join("");
