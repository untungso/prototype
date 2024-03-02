import { describe, expect, it } from "vitest";
import { proxy } from "@/packages/services/instances";

describe("instances test", () => {
  it("should have client instances", () => {
    // Arrange
    const customHeader = "self";
    // Acts
    console.log(proxy);
    // Assert
    expect(proxy).toBeDefined();
  });
});
