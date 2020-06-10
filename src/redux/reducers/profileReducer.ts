import { ActionType } from "../types";
import { profile } from "../../config/data";

export default function reducer(state = profile, action: ActionType) {
  switch (action.type) {
    default:
      return state;
  }
}
