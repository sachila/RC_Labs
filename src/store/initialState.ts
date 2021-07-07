import { CartItem } from "../models/CartItemModel";
import { ShipmentModel } from "../models/ShipmentModel";
import { SizeFiltersModel } from "../models/SizeFilters";

export type InitialState = {
  shipments: ShipmentModel[];
  cartItems: CartItem[];
  sizeFilter?: SizeFiltersModel;
};
