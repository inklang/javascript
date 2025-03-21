export type Value = any;

export const parse = (json: string): Value => JSON.parse(json);
export const getProperty = (value: Value, property: string): Value => value[property];

export const asArray = (v: Value): Array<Value> => v;
export const asString = (v: Value): string => v;
export const asBoolean = (v: Value): boolean => v;

const asNumber = (v: Value): number => v;

export {
  asNumber as asU64,
  asNumber as asF64,
  asNumber as asI64,
};
