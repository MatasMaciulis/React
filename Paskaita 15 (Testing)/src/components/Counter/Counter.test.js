import Counter from "./Counter";
import { render, screen, fireEvent } from "@testing-library/react";
describe("Counter component", () => {
  it("should render without errors", () => {
    render(<Counter startingNumber={5} />);
  });

  it("should render starting number", () => {
    render(<Counter startingNumber={8} />);

    const numberElement = screen.getByTestId("counterText").textContent;

    expect(numberElement).toBe("8");
  });

  it("should render default value when no prop given", () => {
    render(<Counter />);

    const numberElement = screen.getByTestId("counterText").textContent;

    expect(numberElement).toBe("0");
  });

  it("should render default value when prop is null", () => {
    render(<Counter startingNumber={null} />);

    const numberElement = screen.getByTestId("counterText").textContent;

    expect(numberElement).toBe("0");
  });

  it("should increment number by one when increment button clicked", () => {
    render(<Counter startingNumber={8} />);
    // const incrementButton = screen.getByText("Increment");
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    const numberValue = screen.getByTestId("counterText").textContent;
    expect(numberValue).toBe("8");
    fireEvent.click(incrementButton);

    const numberValue2 = screen.getByTestId("counterText").textContent;

    expect(numberValue2).toBe("9");
  });
});
