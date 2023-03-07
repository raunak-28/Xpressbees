import { render, screen } from "@testing-library/react";
import App from "./App";

test("header renders with abc order management tool ", () => {
  render(<App />);
  const linkElement = screen.getByText(/ABC ORDER MANAGEMENT TOOL/i);
  expect(linkElement).toBeInTheDocument();
});

test("render login component in document", () => {
  const component = render(<App />);
  const childElement = component.findAllByPlaceholderText("userName");
  expect(childElement).toBeTruthy();
});
