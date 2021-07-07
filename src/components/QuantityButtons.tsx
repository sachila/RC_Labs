import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeCartItems, updateCartItems } from "../store/action";
import { useGetCartItems } from "../store/selector";
import {
  AddToCartButton,
  ButtonLabel,
  QtyButtons,
  QtyButtonsContainer,
  QuantityLabel,
  QuantityLabelContainer,
} from "../styles/QuantityButtonsElements";

interface prop {
  productId: string;
}

export const QuantityButtons: React.FC<prop> = (props) => {
  const { productId } = props;
  const dispatch = useDispatch();

  const cartItem = useGetCartItems(productId);

  const zeroQuantity = (): boolean => {
    return cartItem.quantity <= 0;
  };

  const handleUpdateCart = () => {
    if (!cartItem) return;
    if (cartItem) {
      const newQuantity = cartItem.quantity + 1;
      dispatch(
        updateCartItems({
          id: cartItem.id,
          quantity: newQuantity,
        })
      );
    }
  };

  const handleRemoveFromCart = () => {
    if (!cartItem) return;

    if (cartItem.quantity === 1) dispatch(removeCartItems(cartItem.id));
    else {
      const newQuantity = cartItem.quantity - 1;
      dispatch(
        updateCartItems({
          id: cartItem.id,
          quantity: newQuantity,
        })
      );
    }
  };

  const isAddedToCart = cartItem && !cartItem.quantity;

  return (
    <QtyButtonsContainer>
      {isAddedToCart && (
        <AddToCartButton variant="dark" onClick={handleUpdateCart}>
          Add To Cart
        </AddToCartButton>
      )}
      {cartItem.quantity > 0 && (
        <>
          <QtyButtons
            variant="dark"
            onClick={handleRemoveFromCart}
            disabled={zeroQuantity()}
          >
            <ButtonLabel>-</ButtonLabel>
          </QtyButtons>
          <QuantityLabelContainer>
            <QuantityLabel>{cartItem.quantity}</QuantityLabel>
          </QuantityLabelContainer>
          <QtyButtons variant="dark" onClick={handleUpdateCart}>
            <ButtonLabel>+</ButtonLabel>
          </QtyButtons>
        </>
      )}
    </QtyButtonsContainer>
  );
};
