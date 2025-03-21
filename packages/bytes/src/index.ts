export const toUtf8String = (bytes: Uint8Array): string =>
  new TextDecoder().decode(bytes);

export const fromUtf8String = (string: string): Uint8Array =>
  new TextEncoder().encode(string);
