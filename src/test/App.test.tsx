import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import { profile } from "../config/data";

test("renders app", () => {
  const { getAllByText, getByText } = render(<App />);

  const titleElement = getAllByText(profile.name);
  expect(titleElement.length).toBeGreaterThan(0);

  const descElement = getByText(profile.desc);
  expect(descElement).toBeInTheDocument();
});
