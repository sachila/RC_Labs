import { Button } from "react-bootstrap";
import styled from "styled-components/macro";

export const AddToCartButton = styled(Button)`
  width: 100%;
`;

export const QtyButtonsContainer = styled.div`
  display: inherit;
`;

export const QuantityLabelContainer = styled.div`
  padding: 5px 15px;
  flex: 1;
  text-align: center;
`;

export const QuantityLabel = styled.span`
  font-weight: 600;
  color: grey;
`;

export const ButtonLabel = styled.span`
  font-weight: 600;
`;

export const QtyButtons = styled(Button)`
  min-width: 60px;
  border-radius: 10px;
`;
