import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Heading, Paragraph } from "./typography";

describe("typography test", () => {
  it("should render heading", () => {
    const title = "Massive Text Rendered";
    render(<Heading>{title}</Heading>);
    expect(
      screen.getByRole("heading", { level: 1, name: title })
    ).toBeDefined();
  });
});

describe("typography test - paragraph", () => {
  it("should render paragraph", () => {
    const text =
      "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.";
    render(<Paragraph>{text}</Paragraph>);
    expect(screen.getByText(text)).toBeDefined();
  });
});
