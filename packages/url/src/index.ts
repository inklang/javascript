export type Url = URL;

export function parse (url: string): Url {
  return new URL(url);
}

