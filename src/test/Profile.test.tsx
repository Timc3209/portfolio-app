import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import Profile from "../components/Profile";
import { AppInitialState, rootReducer } from "../redux/reducers";
import { profile } from "../config/data";

test("renders profile", () => {
  const skill = profile.skills ? profile.skills[0] : "NOT FOUND";

  const store = createStore(rootReducer, AppInitialState);
  const { getByText, getAllByText } = render(
    <Provider store={store}>
      <Profile />
    </Provider>
  );

  const titleElement = getAllByText(profile.name);
  expect(titleElement.length).toBeGreaterThan(0);

  const descElement = getByText(profile.desc);
  expect(descElement).toBeInTheDocument();

  const emailElement = getByText(profile.email);
  expect(emailElement).toBeInTheDocument();

  const skillElement = getByText(skill);
  expect(skillElement).toBeInTheDocument();
});
