import {render, screen, cleanup, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

afterEach(() => {
    cleanup();
});
describe("App Component", () => {
    test("If App Component is rendering correctly", () => {
        render(<App/>); // Rendering the App
        const AppComponent = screen.getByTestId("jetc-search");
        expect(AppComponent).toBeInTheDocument();
    });
});
