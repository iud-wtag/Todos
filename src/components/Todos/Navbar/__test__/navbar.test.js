import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "store";
import { Provider } from "react-redux";
import Logo from "components/Todos/Navbar/logo.component";
import SearchBar from "components/Todos/Navbar/search-bar.component";

describe("<Navbar>", () => {
  it("renders todo logo image", async () => {
    render(<Logo />);
    const logoElement = screen.getByAltText("Logo");
    expect(logoElement).toBeInTheDocument();
  });

  it("renders todo logo text", async () => {
    render(<Logo />);
    const headingElement = screen.getByRole("heading", { name: "Todos" });
    expect(headingElement).toBeInTheDocument();
  });

  it("renders search icon", async () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const buttonElement = screen.getByAltText(/Search Icon/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("render search input when icon clicked", async () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchButtonElement = screen.getByAltText(/Search Icon/i);
    fireEvent.click(searchButtonElement);
    const searchInputElement = screen.queryByPlaceholderText("Search here...");
    expect(searchInputElement).toBeInTheDocument();
  });
});
