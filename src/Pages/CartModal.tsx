import { Button, Modal } from "react-bootstrap";
import { CartItem } from "../models/CartItemModel";
import useSelector from "../store/common/useSelector";
import {
  CartModalContainer,
  CartValueContainer,
  DetailWrapper,
  ImageWrapper,
  PriceText,
  QuantityText,
  SubTotalPrice,
  SubTotalText,
  UnitPriceText,
} from "../styles/CartModalElements";
import { ImgContainer } from "../styles/MainPageElements";

interface DialogProps {
  open: boolean;
  onClose: () => void;
}

export const CartModal: React.FC<DialogProps> = (props) => {
  const { open, onClose } = props;
  const { cartItems, shipments } = useSelector((state) => state);

  const getShipmentById = (id: string) => {
    return shipments.find((item) => item.id === id);
  };

  const getItemTotal = (item: CartItem): number => {
    const product = getShipmentById(item.id);
    if (!product) return 0;
    return product.details.price * item.quantity;
  };

  const getSubTotal = (): string => {
    const total = cartItems.reduce((acc: number, item: CartItem) => {
      return acc + getItemTotal(item);
    }, 0);

    return total.toFixed(2);
  };

  if (!cartItems || !cartItems.length) {
    return (
      <Modal show={open} onHide={onClose}>
        <Modal.Body>The Cart Is Empty !!!. Please add some items</Modal.Body>
      </Modal>
    );
  }

  return (
    <Modal show={open} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cart Items</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.map((item) => (
          <CartModalContainer>
            <ImageWrapper>
              <ImgContainer
                src={getShipmentById(item.id)?.details.image}
              ></ImgContainer>
            </ImageWrapper>
            <DetailWrapper>
              <h6>
                <b> {getShipmentById(item.id)?.name}</b>
              </h6>
              <UnitPriceText>
                Unit Price: {getShipmentById(item.id)?.details.price}
              </UnitPriceText>
              <CartValueContainer>
                <QuantityText>Quantity: {item.quantity}</QuantityText>
                <PriceText>{getItemTotal(item)}</PriceText>
              </CartValueContainer>
            </DetailWrapper>
          </CartModalContainer>
        ))}
      </Modal.Body>

      <Modal.Footer>
        <SubTotalText>Sub Total</SubTotalText>
        <SubTotalPrice>{getSubTotal()}</SubTotalPrice>
        <Button variant="primary" onClick={onClose}>
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
