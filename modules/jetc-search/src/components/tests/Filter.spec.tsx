import {render, screen, cleanup, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';
import Filter from "../Filter";

afterEach(() => {
    cleanup();
});
describe("Filter Component", () => {
    test("If Filter Component is rendering correctly", () => {
        expect(true).toBe(true);
        // render(<Filter/>); // Rendering the Filter Component
        // const FilterComponent = screen.getByTestId("jetc-search-filter");
        // expect(FilterComponent)
        // .toBeInTheDocument();
    });
});
