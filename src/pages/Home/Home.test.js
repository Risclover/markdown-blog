import { render, screen } from "@testing-library/react";
import Home from "./Home";

test('renders "Categories" title', () => {
  render(<Home />);
  const categoriesTitle = screen.getByText(/categories/i);
  expect(categoriesTitle).toBeInTheDocument();
});
