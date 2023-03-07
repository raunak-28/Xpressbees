import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import OrderPage from "../OrderPage";

const MockComponent = () => {
  return (
    <BrowserRouter>
      <OrderPage />
    </BrowserRouter>
  );
};
describe("Test the order page UI", () => {
  test("render the logout button", () => {
    render(<MockComponent />);
    const button = screen.getByRole("button", {
      name: "LOGIN",
    });
    expect(button).toBeInTheDocument();
  });

  test("render the warning message", () => {
    render(<MockComponent />);
    const button = screen.getByText("PLEASE LOGIN TO CONTINUE");
    expect(button).toBeInTheDocument();
  });
});
