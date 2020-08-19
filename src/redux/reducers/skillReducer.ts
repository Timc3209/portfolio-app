import { ActionType } from "../types";
import { skills } from "../../config/data";

export default function reducer(state = skills, action: ActionType) {
  switch (action.type) {
    default:
      return state;
  }
}
