import { ShipmentModel } from "../models/ShipmentModel";
import { ApiUrl, UseRemote } from "./remote";

export const UseShipmentService = () => {
  const { fetchGet } = UseRemote();

  const loadAllShipments = async () => {
    const result = await fetchGet<ShipmentModel[]>(
      `${ApiUrl}/prasadhewage/ecommerce/shipments`
    );
    return result;
  };

  return { loadAllShipments };
};
