export const push = <T>(array: Array<T>, value: T): Array<T> => {
  array.push(value);
  return array;
}

export type Of<T> = Array<T>;
export const create = <T>(): Array<T> => new Array();
export const valueAtIndex = <T>(array: Array<T>, index: number): T => array[index];
