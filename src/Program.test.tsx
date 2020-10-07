import React from "react";
import { render } from "@testing-library/react";
import Program from "./Program";

test("renders learn react link", () => {
    const { getByText } = render(<Program />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
