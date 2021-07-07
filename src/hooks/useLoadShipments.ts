import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { loadAllShipments } from "../store/action";
import useSelector from "../store/common/useSelector";

export const useLoadShipments = () => {
  const { shipments, sizeFilter } = useSelector((state) => state);
  const dispatch = useDispatch();

  return useMemo(() => {
    if (shipments?.length === 0) {
      dispatch(loadAllShipments());
    }

    if (sizeFilter) {
      return shipments.filter((item) => item.details.size === sizeFilter.id);
    }

    return shipments;
  }, [shipments, sizeFilter]);
};
