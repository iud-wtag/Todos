import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "store";
import { Provider } from "react-redux";
import AddCard from "components/Todos/AddCard/add-card";

const MockAddCard = () => {
  return (
    <Provider store={store}>
      <AddCard onCreate={jest.fn()} />
    </Provider>
  );
};

describe("<TopBar>", () => {
  it("render Add Task Card", async () => {
    render(<MockAddCard />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const addButtonElement = screen.getByRole("button", { name: /Add Task/i });
    const deleteImageElement = screen.getByAltText(/delete button/i);

    expect(inputElement).toBeInTheDocument();
    expect(addButtonElement).toBeInTheDocument();
    expect(deleteImageElement).toBeInTheDocument();
  });
});
