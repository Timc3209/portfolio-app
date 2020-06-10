import { TOGGLE_CATEGORY } from "../types";

export const toggleCategory = (payload: string) => {
  return {
    type: TOGGLE_CATEGORY,
    payload,
  };
};
