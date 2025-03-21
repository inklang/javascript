import { describe, it, expect } from "bun:test"
import * as json from ".";

describe("json", () => {
  it("parses", () => {
    const data = json.parse(`{"key": "value", "key2": "value"}`);
    expect(data).toEqual({ key: "value", key2: "value" });
  });

  it("gets a property", () => {
    expect(json.getProperty({ hello: "world" }, "hello")).toEqual("world");
  });

  it("as array", () => {
    expect(json.asArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("as string", () => {
    expect(json.asString("hello")).toEqual("hello");
  });

  it("as boolean", () => {
    expect(json.asBoolean(true)).toEqual(true);
  });

  it("as u64", () => {
    expect(json.asU64(42)).toEqual(42);
  });

  it("as f64", () => {
    expect(json.asF64(42.42)).toEqual(42.42);
  });

  it("as i64", () => {
    expect(json.asI64(-42)).toEqual(-42);
  });
});
