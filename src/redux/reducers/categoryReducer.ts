import { TOGGLE_CATEGORY, CategoryState, ActionType } from "../types";
import { categories } from "../../config/data";

export default function reducer(state = categories, action: ActionType) {
  switch (action.type) {
    case TOGGLE_CATEGORY:
      return state.map((item: CategoryState) =>
        item.name === action.payload
          ? { ...item, enabled: !item.enabled }
          : item
      );
    default:
      return state;
  }
}
