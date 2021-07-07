export interface ShipmentModel {
  id: string;
  name: string;
  details: ShipmentDetailsModel;
}

export interface ShipmentDetailsModel {
  price: number;
  size: string;
  tag: string;
  image: string;
  type: string;
}
