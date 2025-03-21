export type Url = URL;
export const parse = (url: string): Url => new URL(url);
