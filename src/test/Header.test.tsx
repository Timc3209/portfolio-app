import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import Header from "../components/Header/Header";
import { AppInitialState, rootReducer } from "../redux/reducers";

test("renders header", () => {
  const store = createStore(rootReducer, AppInitialState);
  const { getAllByText } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  const linkElement = getAllByText("Home");
  expect(linkElement.length).toBeGreaterThan(0);
});
