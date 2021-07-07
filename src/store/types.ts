import { CartItem } from "../models/CartItemModel";
import { ShipmentModel } from "../models/ShipmentModel";
import { SizeFiltersModel } from "../models/SizeFilters";

// constants
export const LOAD_SHIPMENTS = "LOAD_SHIPMENTS";
export const CART_ITEMS = "CART_ITEMS";
export const REMOVE_CART_ITEMS = "REMOVE_CART_ITEMS";
export const UPDATE_SIZE_FILTERS = "UPDATE_SIZE_FILTERS";
export const REMOVE_FILTERS = "REMOVE_FILTERS";

// interfaces
// these should map directly to db schema

// action types

export type LoadShipments = {
  type: typeof LOAD_SHIPMENTS;
  shipments: ShipmentModel[];
};

export interface CartItems {
  type: typeof CART_ITEMS;
  product: CartItem;
}
export interface RemoveCartItems {
  type: typeof REMOVE_CART_ITEMS;
  id: string;
}

export interface UpdateSizeFilters {
  type: typeof UPDATE_SIZE_FILTERS;
  filter: SizeFiltersModel;
}

export interface RemoveFilters {
  type: typeof REMOVE_FILTERS;
}

export type LabActions =
  | LoadShipments
  | CartItems
  | RemoveCartItems
  | UpdateSizeFilters
  | RemoveFilters;
