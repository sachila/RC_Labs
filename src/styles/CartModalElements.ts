import styled from "styled-components";
import { COLORS, FontBold, FONTSIZES, SIZES } from "./layout";

export const CartModalContainer = styled.div`
  display: flex;
  padding: ${SIZES.normal};
`;
export const CartValueContainer = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  flex: 1;
`;

export const DetailWrapper = styled.div`
  flex: 3;
  padding: 0px ${SIZES.normal};
`;

export const QuantityText = styled.span`
  font-weight: ${FontBold};
  font-size: ${FONTSIZES.subText};
  color: ${COLORS.rcGrey};
  flex: 3;
`;
export const UnitPriceText = styled.span`
  font-weight: ${FontBold};
  font-size: ${FONTSIZES.subText};
  flex: 3;
`;

export const PriceText = styled.span`
  font-weight: ${FontBold};
  flex: 1;
  font-size: ${FONTSIZES.subText};
  color: ${COLORS.rcBrown};
  text-align: center;
`;

export const SubTotalText = styled.h6`
  font-weight: ${FontBold};
  flex: 1;
`;

export const SubTotalPrice = styled.span`
  font-weight: ${FontBold};
  flex: 1;
  font-size: ${FONTSIZES.title};
  color: ${COLORS.rcBrown};
  text-align: center;
`;
