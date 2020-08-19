import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import skillReducer from "./skillReducer";
import experienceReducer from "./experienceReducer";
import projectReducer from "./projectReducer";
import { AppState } from "../types";
import { profile, skills, experience, projects } from "../../config/data";

export const AppInitialState: AppState = {
  profile: profile,
  skills: skills,
  experience: experience,
  projects: projects,
};

export const rootReducer = combineReducers({
  profile: profileReducer,
  skills: skillReducer,
  experience: experienceReducer,
  projects: projectReducer,
});
