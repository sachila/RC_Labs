import styled from "styled-components/macro";
import { COLORS, FontBold, SIZES } from "./layout";

export const MainBody = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FilterContainer = styled.div`
  flex: 1;
`;

export const CardContainer = styled.div`
  flex: 3;
  display: grid;
  gap: ${SIZES.xslarge};
  grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
  padding: ${SIZES.normal};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgContainer = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: ${SIZES.small};
`;

export const CardTitle = styled.h6`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: ${SIZES.normal};
  font-weight: ${FontBold};
`;

export const CardPrice = styled.div`
  color: ${COLORS.rcGrey};
  font-weight: ${FontBold};
  text-align: center;
  padding: ${SIZES.normal};
`;

export const CardSize = styled.div`
  font-weight: ${FontBold};
  text-align: center;
`;
