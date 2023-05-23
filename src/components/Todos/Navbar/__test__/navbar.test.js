import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Logo from "components/Todos/Navbar/logo.component";
import SearchBar from "components/Todos/Navbar/search-bar.component";
import userEvent from "@testing-library/user-event";

const mockStore = configureStore([]);

const MockSearchBar = ({ store }) => {
  return (
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
};

describe("<Navbar>", () => {
  const user = userEvent.setup();

  it("renders todo logo image and text", async () => {
    render(<Logo />);
    const logoElement = screen.getByAltText("Logo");
    const headingElement = screen.getByRole("heading", { name: "Todos" });

    expect(logoElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
  });

  it("renders search icon and search input not visible", async () => {
    let store = mockStore({
      buttonClickReducers: { isSearchButtonClicked: false },
    });
    render(<MockSearchBar store={store} />);

    const searchIcon = screen.getByAltText(/Search Icon/i);
    const searchInput = screen.queryByPlaceholderText(/search here.../i);

    expect(searchIcon).toBeInTheDocument();
    expect(searchInput).not.toBeInTheDocument();
  });

  it("renders search input", async () => {
    let store = mockStore({
      buttonClickReducers: { isSearchButtonClicked: true },
    });
    render(<MockSearchBar store={store} />);
    const searchInput = screen.queryByPlaceholderText(/search here.../i);

    await user.type(searchInput, "task todo");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue("task todo");
  });
});
