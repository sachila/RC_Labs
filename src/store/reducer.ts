import { InitialState } from "./initialState";
import {
  CART_ITEMS,
  LabActions,
  LOAD_SHIPMENTS,
  REMOVE_CART_ITEMS,
  REMOVE_FILTERS,
  UPDATE_SIZE_FILTERS,
} from "./types";

const initialState: InitialState = {
  shipments: [],
  cartItems: [],
};

const reducer = (
  state: InitialState = initialState,
  action: LabActions
): InitialState => {
  switch (action.type) {
    case LOAD_SHIPMENTS: {
      return {
        ...state,
        shipments: action.shipments,
      };
    }
    case CART_ITEMS: {
      const cartItems = state.cartItems.filter(
        (item) => item.id !== action.product.id
      );

      return {
        ...state,
        cartItems: [...cartItems, action.product],
      };
    }

    case REMOVE_CART_ITEMS: {
      const list = state.cartItems.filter((item) => item.id !== action.id);
      return {
        ...state,
        cartItems: list,
      };
    }

    case UPDATE_SIZE_FILTERS: {
      return {
        ...state,
        sizeFilter: action.filter,
      };
    }
    case REMOVE_FILTERS: {
      return {
        ...state,
        sizeFilter: undefined,
      };
    }
    default:
      return state;
  }
};

export default reducer;
