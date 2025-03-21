import { describe, it, expect } from "bun:test"
import * as string from ".";

describe("string", () => {
  it("strips controls", () => {
    expect(string.stripCtl("hello\u0000")).toEqual("hello");
  });

  it("strips all", () => {
    expect(string.stripAll("hello world hello", "hello")).toEqual(" world ");
  });

  it("splits", () => {
    expect(string.split("hello world", " ")).toEqual(["hello", "world"]);
  });

  it("concatenates", () => {
    expect(string.concat("hello", "world")).toEqual("helloworld");
  });
});
