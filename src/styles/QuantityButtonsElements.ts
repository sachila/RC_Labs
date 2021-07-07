import { Button } from "react-bootstrap";
import styled from "styled-components/macro";
import { COLORS, FontBold, SIZES } from "./layout";

export const AddToCartButton = styled(Button)`
  width: 100%;
`;

export const QtyButtonsContainer = styled.div`
  display: inherit;
`;

export const QuantityLabelContainer = styled.div`
  padding: ${SIZES.small} ${SIZES.large};
  flex: 1;
  text-align: center;
`;

export const QuantityLabel = styled.span`
  font-weight: ${FontBold};
  color: ${COLORS.rcGrey};
`;

export const ButtonLabel = styled.span`
  font-weight: ${FontBold};
`;

export const QtyButtons = styled(Button)`
  min-width: 60px;
  border-radius: ${SIZES.normal};
`;
