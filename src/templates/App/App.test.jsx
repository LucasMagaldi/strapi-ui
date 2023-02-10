import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const headingContainer = screen.getByRole("heading", {
    name: "hello",
  }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: "blue",
  });
  expect(headingContainer).toHaveStyleRule("background", "blue");
});
