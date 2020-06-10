import React from "react";
import { render, fireEvent } from "@testing-library/react";
import registerIcons from "../registerIcons";
import CategoryItem from "../components/CategoryItem";
import { categories } from "../config/data";

registerIcons();

test("renders recipe", () => {
  const category = categories[0];
  const onClick = jest.fn();

  const { getByText, getByTestId } = render(
    <CategoryItem
      key={1}
      name={category.name}
      icon={category.icon}
      iconPrefix={category.iconPrefix}
      enabled={category.enabled}
      onClick={onClick}
    />
  );
  const titleElement = getByText(category.name);
  expect(titleElement).toBeInTheDocument();

  fireEvent.click(getByTestId("btnToggle"));
  expect(onClick).toHaveBeenCalledTimes(1);
});
