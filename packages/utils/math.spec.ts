import { describe, it } from "vitest";
import { add } from "@/packages/utils/math";

describe("math test", () => {
  it("should add number", () => {
    add(1, 2);
  });
});