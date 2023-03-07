import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../Search";

const mockFunction = jest.fn();

const MockComponent = () => {
  return (
    <Search
      orders={[]}
      setCurrentPage={mockFunction}
      setOrders={mockFunction}
      data={[]}
    />
  );
};

describe("Test the search UI", () => {
  test("render a input", () => {
    render(<MockComponent />);
    const inputElement = screen.getAllByRole("textbox", { label: "Order Id" });
    expect(inputElement.length).toBe(2);
  });

  test("render a select box", () => {
    render(<MockComponent />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
  });

  test("render a search button", () => {
    render(<MockComponent />);
    const buttonElement = screen.getByRole("button", { name: "Search" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("render a reset button", () => {
    render(<MockComponent />);
    const buttonElement = screen.getByRole("button", { name: "Reset" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("populate vendor Input", async () => {
    render(<MockComponent />);
    const vendorInput = await screen.findByLabelText("Vendor Name");
    fireEvent.change(vendorInput, { target: { value: "rahul" } });
    expect(vendorInput.value).toBe("rahul");
  });

  test("populate order id", async () => {
    render(<MockComponent />);
    const orderIdInput = await screen.findByLabelText("Order Id");
    fireEvent.change(orderIdInput, { target: { value: "7" } });
    expect(orderIdInput.value).toBe("7");
  });

  test("populate pickup_date", async () => {
    render(<MockComponent />);
    const pickupdateInput = await screen.findByLabelText("Pickup Date");
    fireEvent.change(pickupdateInput, { target: { value: "2022-10-12" } });
    expect(pickupdateInput.value).toBe("2022-10-12");
  });

  test("populate status", async () => {
    render(<MockComponent />);
    const pickupdateInput = await screen.findByLabelText("Status");
    fireEvent.change(pickupdateInput, { target: { value: "cancelled" } });
    expect(pickupdateInput.value).toBe("cancelled");
  });
});
