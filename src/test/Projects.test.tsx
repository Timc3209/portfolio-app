import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import Projects from "../components/Projects/Projects";
import { AppInitialState, rootReducer } from "../redux/reducers";
import { projects } from "../config/data";

test("renders projects", () => {
  const project = projects[0];

  const store = createStore(rootReducer, AppInitialState);
  const { getByText } = render(
    <Provider store={store}>
      <Projects />
    </Provider>
  );

  const titleElement = getByText(project.title);
  expect(titleElement).toBeInTheDocument();

  const descElement = getByText(project.desc);
  expect(descElement).toBeInTheDocument();
});
