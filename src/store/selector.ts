import { CartItem } from "../models/CartItemModel";
import useSelector from "./common/useSelector";

export const useGetCartItems = (productId: string): CartItem => {
  const { cartItems } = useStateSelectors();
  const item = cartItems.find((item) => item.id === productId);
  if (!item)
    return {
      id: productId,
      quantity: 0,
    };
  return item;
};

export const useStateSelectors = () => {
  return useSelector((state) => state);
};
