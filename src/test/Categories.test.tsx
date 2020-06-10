import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import registerIcons from "../registerIcons";
import Categories from "../components/Categories";
import { AppInitialState, rootReducer } from "../redux/reducers";
import { categories } from "../config/data";

registerIcons();

test("renders categories", () => {
  const category = categories[0];

  const store = createStore(rootReducer, AppInitialState);
  const { getByText } = render(
    <Provider store={store}>
      <Categories />
    </Provider>
  );

  const titleElement = getByText(category.name);
  expect(titleElement).toBeInTheDocument();
});
