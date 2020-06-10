import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import profileReducer from "./profileReducer";
import projectReducer from "./projectReducer";
import { AppState } from "../types";
import { categories, profile, projects } from "../../config/data";

export const AppInitialState: AppState = {
  categories: categories,
  profile: profile,
  projects: projects,
};

export const rootReducer = combineReducers({
  categories: categoryReducer,
  profile: profileReducer,
  projects: projectReducer,
});
