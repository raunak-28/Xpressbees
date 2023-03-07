import { render, screen } from "@testing-library/react";
import OrderTable from "../OrderTable";

const mockFunction = jest.fn();

const MockComponent = () => {
  return <OrderTable data={[]} currentPage={1} setCurrentPage={mockFunction} />;
};

describe("Test the order row UI", () => {
  test("render a table", () => {
    render(<MockComponent />);
    const rowElement = screen.getByRole("table");
    expect(rowElement).toBeInTheDocument();
  });

  test("render pageSize Input", () => {
    render(<MockComponent />);
    const inputElement = screen.getByRole("spinbutton");
    expect(inputElement.value).toBe("10");
  });

  test("render rowst", () => {
    render(<MockComponent />);
    const rowElement = screen.getByRole("row", {
      name: "Order Id Vendor Name Pickup Date Status",
    });
    expect(rowElement).toBeInTheDocument();
  });
});
