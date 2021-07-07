import { InitialState } from "./initialState";
import { LabActions, TEST } from "./types";

const initialState: InitialState = {};

const reducer = (
  state: InitialState = initialState,
  action: LabActions
): InitialState => {
  switch (action.type) {
    case TEST: {
      return {
        ...state,
        test: action.test,
      };
    }

    default:
      return state;
  }
};

export default reducer;
