import styled from "styled-components/macro";

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
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
  padding: 10px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgContainer = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const CardTitle = styled.h6`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px;
  font-weight: 600;
`;

export const CardPrice = styled.div`
  color: grey;
  font-weight: 600;
  text-align: center;
  padding: 10px;
`;

export const CardSize = styled.div`
  font-weight: 600;
  text-align: center;
`;
