import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { NavbarComponent } from "../components/NavBar";
import { QuantityButtons } from "../components/QuantityButtons";
import { SizeFilters } from "../components/SizeFilters";
import { useLoadShipments } from "../hooks/useLoadShipments";
import {
  MainBody,
  FilterContainer,
  CardContainer,
  Card,
  ImgContainer,
  CardTitle,
  CardPrice,
  CardSize,
} from "../styles/MainPageElements";

export const MainPage: React.FC = () => {
  const shipments = useLoadShipments();

  return (
    <>
      <NavbarComponent />
      <MainBody>
        <FilterContainer>
          <SizeFilters></SizeFilters>
        </FilterContainer>
        <CardContainer>
          {shipments.map((shipment) => (
            <Card>
              <ImgContainer src={shipment.details.image} alt=""></ImgContainer>
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id={`tooltip-bottom`}>
                    <strong>{shipment.name}</strong>.
                  </Tooltip>
                }
              >
                <CardTitle>{shipment.name}</CardTitle>
              </OverlayTrigger>
              <CardSize>{shipment.details.size}</CardSize>
              <CardPrice>$ {shipment.details.price}</CardPrice>
              <QuantityButtons productId={shipment.id}> </QuantityButtons>
            </Card>
          ))}
        </CardContainer>
      </MainBody>
    </>
  );
};
