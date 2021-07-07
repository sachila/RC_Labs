import { Badge } from "react-bootstrap";
import styled from "styled-components/macro";
import { SIZES } from "./layout";

export const CartBatch = styled(Badge)`
  position: relative;
  bottom: ${SIZES.normal};
  right: ${SIZES.normal};
`;
