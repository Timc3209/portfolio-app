import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import { profile } from "../config/data";

test("renders app", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(profile.desc);
  expect(titleElement).toBeInTheDocument();
});
