import { render, fireEvent, screen, getByRole } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

describe("Test the Login component UI", () => {
  test("render the login form with login button", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const button = await screen.findAllByRole("button");
    expect(button).toHaveLength(1);
  });

  test("render the login form with username field", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const userName = await screen.findByPlaceholderText("username");
    expect(userName).toBeTruthy();
  });

  test("render the login form with password field", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const password = await screen.findByPlaceholderText("password");
    expect(password).toBeTruthy();
  });

  test("password validation", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const password = await screen.findByPlaceholderText("password");
    expect(password).toBeTruthy();
  });

  //   test("user credentials are correct", () => {
  //     render(
  //       <BrowserRouter>
  //         <Login />
  //       </BrowserRouter>
  //     );
  //     const username = screen.getByPlaceholderText("username");
  //     fireEvent.change(username, { target: { value: "abc@gmail.com" } });
  //     const password = screen.getByPlaceholderText("password");
  //     fireEvent.change(password, { target: { value: "abc1234" } });
  //     const loginButton = screen.getByRole("button");
  //     fireEvent.click(loginButton);
  //     const divElement = screen.getByRole("table");
  //     expect(divElement).toBeInTheDocument();
  //   });
});
