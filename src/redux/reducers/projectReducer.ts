import { ActionType } from "../types";
import { projects } from "../../config/data";

export default function reducer(state = projects, action: ActionType) {
  switch (action.type) {
    default:
      return state;
  }
}
