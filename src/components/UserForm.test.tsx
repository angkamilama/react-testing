import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  // Create a mock function for onUserAdd
  const mockOnUserAdd = jest.fn();
  // Render the component with the required prop
  render(<UserForm onUserAdd={mockOnUserAdd} />);

  // Find elements in the component
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Debugging output
  console.log("Inputs:", inputs);
  console.log("Button:", button);

  // Assertions to ensure the component renders correctly
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
