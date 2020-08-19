import { ActionType } from "../types";
import { experience } from "../../config/data";

export default function reducer(state = experience, action: ActionType) {
  switch (action.type) {
    default:
      return state;
  }
}
