import { createContext, useState } from "react";

export const TypeContextItem = createContext();
const TypeContextItemProvider = ({ children }) => {
  const [selectedType, setSelectedType] = useState(
    JSON.parse(localStorage.getItem("selectedType"))
      ? JSON.parse(localStorage.getItem("selectedType"))
      : []
  );
  const [selectedCountry, setSelectedCountry] = useState(
    JSON.parse(localStorage.getItem("selectedCountry"))
      ? JSON.parse(localStorage.getItem("selectedCountry"))
      : []
  );
  const [selectedPairings, setSelectedPairings] = useState(
    JSON.parse(localStorage.getItem("selectedPairings"))
      ? JSON.parse(localStorage.getItem("selectedPairings"))
      : []
  );
  const [selectedGrapes, setSelectedGrapes] = useState(
    JSON.parse(localStorage.getItem("selectedGrapes"))
      ? JSON.parse(localStorage.getItem("selectedGrapes"))
      : []
  );
  const [selectedRegions, setSelectedRegions] = useState(
    JSON.parse(localStorage.getItem("selectedRegions"))
      ? JSON.parse(localStorage.getItem("selectedRegions"))
      : []
  );
  return (
    <TypeContextItem.Provider
      value={{
        selectedType,
        selectedCountry,
        selectedPairings,
        selectedGrapes,
        selectedRegions,
        setSelectedType,
        setSelectedCountry,
        setSelectedPairings,
        setSelectedGrapes,
        setSelectedRegions,
      }}
    >
      {children}
    </TypeContextItem.Provider>
  );
};

export default TypeContextItemProvider;
