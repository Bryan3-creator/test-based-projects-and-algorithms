import { render, screen, fireEvent } from "@testing-library/react";
import { Calculator, numbers, operators, equalSign } from "../../../src/pages";

describe("<Calculator />", () => {
  beforeEach(() => {
    render(<Calculator />);
  });

  it("Should render the title Calculator", () => {
    screen.getByText(/Calculator/);
  });

  it("Should render user input", () => {
    screen.getByRole("textbox");
  });

  it("Should render all the numbers", () => {
    numbers.forEach((number) => screen.getByText(number));
  });

  it("Should render 4 rows", () => {
    const elements = screen.getAllByRole("row");
    expect(elements.length).toBe(4);
  });

  it("Should render the operators", () => {
    operators.map((operator) => screen.getByText(operator));
  });

  it("Should render the equal button", () => {
    screen.getByRole("button", { name: equalSign });
  });

  it("Should render 1 user input, to the clicking on the button 1", () => {
    const oneBtn = screen.getByText(1);
    fireEvent.click(oneBtn);
    const userInput = screen.getByRole("textbox") as HTMLInputElement;
    expect(userInput.value).toBe("1");
  });

  it("Should render 1+ user input, to the clicking on 1 and operator +", () => {
    const oneBtn = screen.getByText(1);
    const operator = screen.getByText("+");
    fireEvent.click(oneBtn);
    fireEvent.click(operator);
    const userInput = screen.getByRole("textbox") as HTMLInputElement;
    expect(userInput.value).toBe("1+");
  });

  it("Should render 1+1 user input, after clicking", () => {
    const oneBtn = screen.getByText(1);
    const operator = screen.getByText("+");
    fireEvent.click(oneBtn);
    fireEvent.click(operator);
    fireEvent.click(oneBtn);
    const userInput = screen.getByRole("textbox") as HTMLInputElement;
    expect(userInput.value).toBe("1+1");
  });

  it("Should render the resulted 2 of the add 1 + 1, after clicking on equal button", () => {
    const oneBtn = screen.getByText(1);
    const operator = screen.getByText("+");
    const equalBtn = screen.getByText(equalSign);
    fireEvent.click(oneBtn);
    fireEvent.click(operator);
    fireEvent.click(oneBtn);
    fireEvent.click(equalBtn);
    const userInput = screen.getByRole("textbox") as HTMLInputElement;
    expect(userInput.value).toBe("2");
  });

  it("Should take 7 numbers after the point, if result is decimal", () => {
    let userInput = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(userInput, { target: { value: "956/56" } });
    const equalBtn = screen.getByText(equalSign);
    fireEvent.click(equalBtn);
    userInput = screen.getByRole("textbox") as HTMLInputElement;
    expect(userInput.value).toBe("17.0714286");
  });
});
