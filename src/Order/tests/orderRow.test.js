import { render, screen } from "@testing-library/react";
import OrderRow from "../OrderRow";

const MockComponent = () => {
  return (
    <OrderRow
      key={1}
      orderId={1}
      vendorName={"ram"}
      pickupDate={"2022-10-12"}
      status={"cancelled"}
    />
  );
};

describe("Test the order row UI", () => {
  test("rende a row", () => {
    render(<MockComponent />);
    const rowElement = screen.getByRole("row");
    expect(rowElement).toBeInTheDocument();
  });

  test("rende a row", () => {
    render(<MockComponent />);
    const rowData = screen.getByText("ram");
    expect(rowData).toBeInTheDocument();
  });

  test("rende a row", () => {
    render(<MockComponent />);
    const rowData = screen.getByText("1");
    expect(rowData).toBeInTheDocument();
  });

  test("rende a row", () => {
    render(<MockComponent />);
    const rowData = screen.getByText("2022-10-12");
    expect(rowData).toBeInTheDocument();
  });

  test("rende a row", () => {
    render(<MockComponent />);
    const rowData = screen.getByText("cancelled");
    expect(rowData).toBeInTheDocument();
  });
});
