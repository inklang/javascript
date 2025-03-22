export type Optional<T> = T | undefined | null;

export const isDefined = <T>(value: Optional<T>): value is T => {
  return typeof value !== "undefined" && value !== null;
}

export const isUndefined = <T>(value: Optional<T>): value is undefined => {
  return typeof value === "undefined" || value === null;
}

const _undefined = () => undefined;
export { _undefined as undefined };
export const defined = <T>(value: T): Optional<T> => value;
