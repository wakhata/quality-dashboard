import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders coming soon", () => {
  render(<App />);
  const h2Element = screen.getByText(/Hello world!!!/i);
  expect(h2Element).toBeInTheDocument();
});
