export type Value = any;

export const parse = (json: string): Value => JSON.parse(json);
export const getProperty = (value: Value, property: string): Value => value[property];

export const asArray = (v: Value): Array<Value> => v;
export const asString = (v: Value): string => v;
export const asBoolean = (v: Value): boolean => v;

export const asOptionalArray = (v: Value): Array<Value> | undefined | null => v;
export const asOptionalString = (v: Value): string | undefined | null => v;
export const asOptionalBoolean = (v: Value): boolean | undefined | null => v;

const asNumber = (v: Value): number => v;
const asOptionalNumber = (v: Value): number | undefined | null => v;

export {
  asNumber as asU64,
  asNumber as asF64,
  asNumber as asI64,
  asOptionalNumber as asOptionalU64,
  asOptionalNumber as asOptionalF64,
  asOptionalNumber as asOptionalI64,
};

export const isDefined = (value: Value): boolean => {
  return typeof value !== "undefined" && value !== null;
}

export const isUndefined = (value: Value): value is undefined => {
  return typeof value === "undefined" || value === null;
}
