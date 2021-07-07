import {
  CartItems,
  LoadShipments,
  RemoveCartItems,
  RemoveFilters,
  UpdateSizeFilters,
} from "./types";

export type DispatchLoadShipments = (args: LoadShipments) => LoadShipments;
export type DispatchCartItems = (args: CartItems) => CartItems;
export type DispatchRemoveCartItems = (
  args: RemoveCartItems
) => RemoveCartItems;
export type DispatchUpdateSizeFilters = (
  args: UpdateSizeFilters
) => UpdateSizeFilters;

export type DispatchRemoveFilters = (args: RemoveFilters) => RemoveFilters;

export type DispathType =
  | DispatchLoadShipments
  | DispatchCartItems
  | DispatchRemoveCartItems
  | DispatchUpdateSizeFilters
  | DispatchRemoveFilters;
