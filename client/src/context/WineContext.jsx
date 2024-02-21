import  { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WineContextItem = createContext();
const WineContextItemProvider = ({ children }) => {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    // Fetch wines data from the API using Axios
    axios.get("http://localhost:3000/wines")
      .then(response => {
        setWines(response.data.data);
      })
  }, []);
  const [selectedType, setSelectedType] = useState(
    JSON.parse(localStorage.getItem("selectedType"))
      ? JSON.parse(localStorage.getItem("selectedType"))
      : []
  );
  return (
    <WineContextItem.Provider
      value={{
        wines,
        setWines,
        selectedType,
        setSelectedType
      }}
    >
      {children}
    </WineContextItem.Provider>
  );
};

export default WineContextItemProvider;
