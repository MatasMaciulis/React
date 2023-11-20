import { render, screen } from "@testing-library/react";
import Image from "./Image";

describe("Image component", () => {
  it("should render without errors", () => {
    render(<Image />);
  });

  it("should render alt text when url is invalid", () => {
    render(<Image alt={"vafliai"} />);

    const imageElement = screen.getByAltText("vafliai");

    expect(imageElement.alt).toBe("vafliai");
  });

  it("should contain valid src", () => {
    render(<Image src={"./photos/cat.jpg"} alt={"vafliai"} />);

    const imageElement = screen.getByAltText("vafliai");

    expect(imageElement.src).toContain("cat.jpg");
  });
});
