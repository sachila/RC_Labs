import { useState } from "react";
import { useDispatch } from "react-redux";
import { SizeFiltersModel } from "../models/SizeFilters";
import { removeSizeFilter, updateSizeFilter } from "../store/action";
import { useStateSelectors } from "../store/selector";
import { FilterButtons } from "../styles/FilterElements";

export const SizeFilters: React.FC = () => {
  const dispatch = useDispatch();
  const { sizeFilter } = useStateSelectors();

  const [sizes, setSizes] = useState<SizeFiltersModel[]>([
    { id: "xsmall", caption: "XS", selected: false },
    { id: "small", caption: "S", selected: false },
    { id: "large", caption: "L", selected: false },
    { id: "xslarge", caption: "XL", selected: false },
  ]);

  const handleClickEvent = (size: SizeFiltersModel) => {
    setSizes((state) => {
      return state.map((el) =>
        el.id === size.id
          ? { ...el, selected: true }
          : { ...el, selected: false }
      );
    });
    dispatch(updateSizeFilter(size));
  };

  const handleClearAllEvent = () => {
    dispatch(removeSizeFilter());
    setSizes((state) => {
      return state.map((el) => {
        return { ...el, selected: false };
      });
    });
  };

  return (
    <div>
      {sizes.map((size) => (
        <FilterButtons
          variant={size.selected ? "primary" : "outline-secondary"}
          onClick={() => handleClickEvent(size)}
        >
          {size.caption}
        </FilterButtons>
      ))}
      {sizeFilter && (
        <FilterButtons variant="outline-danger" onClick={handleClearAllEvent}>
          X
        </FilterButtons>
      )}
    </div>
  );
};
