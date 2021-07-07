import { CartItem } from "../models/CartItemModel";
import { SizeFiltersModel } from "../models/SizeFilters";
import { UseShipmentService } from "../services/useShipmentService";
import {
  DispatchCartItems,
  DispatchLoadShipments,
  DispatchRemoveCartItems,
  DispatchRemoveFilters,
  DispatchUpdateSizeFilters,
} from "./dispatch";
import {
  CartItems,
  CART_ITEMS,
  LoadShipments,
  LOAD_SHIPMENTS,
  RemoveCartItems,
  RemoveFilters,
  REMOVE_CART_ITEMS,
  REMOVE_FILTERS,
  UpdateSizeFilters,
  UPDATE_SIZE_FILTERS,
} from "./types";

export function loadAllShipments() {
  const { loadAllShipments } = UseShipmentService();

  return (dispatch: DispatchLoadShipments) => {
    loadAllShipments().then((data) => {
      const action: LoadShipments = {
        type: LOAD_SHIPMENTS,
        shipments: data,
      };
      dispatch(action);
    });
  };
}

export function updateCartItems(cartItem: CartItem) {
  return (dispatch: DispatchCartItems) => {
    const action: CartItems = {
      type: CART_ITEMS,
      product: cartItem,
    };
    dispatch(action);
  };
}

export function removeCartItems(id: string) {
  return (dispatch: DispatchRemoveCartItems) => {
    const action: RemoveCartItems = {
      type: REMOVE_CART_ITEMS,
      id,
    };
    dispatch(action);
  };
}

export function updateSizeFilter(filter: SizeFiltersModel) {
  return (dispatch: DispatchUpdateSizeFilters) => {
    const action: UpdateSizeFilters = {
      type: UPDATE_SIZE_FILTERS,
      filter,
    };
    dispatch(action);
  };
}

export function removeSizeFilter() {
  return (dispatch: DispatchRemoveFilters) => {
    const action: RemoveFilters = {
      type: REMOVE_FILTERS,
    };
    dispatch(action);
  };
}
