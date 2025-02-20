export type Value = any;

export function parse (input: string): Value {
  return JSON.parse(input);
}

export function get (input: Value, key: string, _: string): Value {
  return input[key];
}