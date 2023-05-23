import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "store";
import { Provider } from "react-redux";
import TopBar from "components/Todos/Topbar/top-bar";
import CreateTodo from "components/Todos/Topbar/create-todo.component";
import FilterTodo from "components/Todos/Topbar/filter-todo.component";

const MockTopBar = () => {
  return (
    <Provider store={store}>
      <TopBar onCreate={jest.fn()} isCreateButtonClicked={false} />
    </Provider>
  );
};

const MockCreateTodo = () => {
  return (
    <Provider store={store}>
      <CreateTodo onCreate={jest.fn()} isCreateButtonClicked={false} />
    </Provider>
  );
};

const MockFilterTodo = () => {
  return (
    <Provider store={store}>
      <FilterTodo />
    </Provider>
  );
};

describe("<TopBar>", () => {
  it("render Add Task title", async () => {
    render(<MockTopBar />);

    const titleElement = screen.getByRole("heading", { name: /Add Tasks/ });
    expect(titleElement).toBeInTheDocument();
  });

  it("render create button", async () => {
    render(<MockCreateTodo />);

    const buttonTitleElement = screen.getByText(/Create/i);
    const buttonImageElement = screen.getByAltText(/Create icon/i);

    expect(buttonTitleElement).toBeInTheDocument();
    expect(buttonImageElement).toBeInTheDocument();
    expect(buttonImageElement).not.toBeDisabled();
  });

  it("renders all create button", async () => {
    render(<MockFilterTodo />);

    const filterTitleAll = await screen.findAllByRole("button");
    expect(filterTitleAll).toHaveLength(3);
  });
});
