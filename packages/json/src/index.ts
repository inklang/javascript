export type Value = any;

export function parse (input: string): Value {
  return JSON.parse(input);
}

export function get (value: Value, key: string): Value {
  return value[key];
}

export function asArray (value: Value): Array<Value> {
  return value;
}

export function asString (value: Value): string {
  return value;
}

export function asBoolean (value: Value): boolean {
  return value;
}

function asNumber (value: Value): number {
  return value;
}

export {
  asNumber as asU64,
  asNumber as asF64,
  asNumber as asI64,
};
