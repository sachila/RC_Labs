import { Button } from "react-bootstrap";
import styled from "styled-components/macro";
import { SIZES } from "./layout";

export const FilterButtons = styled(Button)`
  margin: ${SIZES.small};
  border-radius: ${SIZES.xslarge};
`;
