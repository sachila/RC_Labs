import { CartItem } from "../models/CartItemModel";
import useSelector from "./common/useSelector";

export const useGetCartItems = (productId: string): CartItem => {
  const { cartItems } = useSelector((state) => state);
  const item = cartItems.find((item) => item.id === productId);
  if (!item)
    return {
      id: productId,
      quantity: 0,
    };
  return item;
};
