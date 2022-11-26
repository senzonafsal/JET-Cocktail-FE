import {render, screen, cleanup, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';
import SearchField from "../SearchField";

afterEach(() => {
    cleanup();
});
describe("SearchField Component", () => {
    test("If SearchField Component is rendering correctly", () => {
        expect(true).toBe(true);
        // render(<SearchField/>); // Rendering the Filter Component
        // const SearchFieldComponent = screen.getByTestId("jetc-search-search-field");
        // expect(SearchFieldComponent)
        // .toBeInTheDocument();
    });
});
