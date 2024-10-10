import { createContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedPopularity, setSelectedPopularity] = useState("empty");
  const [selectedDate, setSelectedDate] = useState("empty");

  const handleSelectChange = (selectedOption, action) => {
    switch (action.name) {
      case "category":
        setSelectedCategory(selectedOption.value);
        break;
      case "popularity":
        setSelectedPopularity(selectedOption.value);
        break;
      case "date":
        setSelectedDate(selectedOption.value);
        break;
      default:
        break;
    }
  };

  return (
    <FilterContext.Provider
      value={{
        selectedCategory,
        selectedPopularity,
        selectedDate,
        handleSelectChange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
