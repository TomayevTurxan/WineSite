import { createContext, useState, useEffect } from "react";

export const DetailWineContextItem = createContext();
const DetailWineContextItemProvider = ({ children }) => {
  const [wine, setWine] = useState([]);
  return (
    <DetailWineContextItem.Provider
      value={{
        wine,
        setWine,
      }}
    >
      {children}
    </DetailWineContextItem.Provider>
  );
};

export default DetailWineContextItemProvider;
