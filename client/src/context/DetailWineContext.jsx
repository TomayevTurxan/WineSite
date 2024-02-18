import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DetailWineContextItem = createContext();
const DetailWineContextItemProvider = ({ children }) => {
  const [wine, setWine] = useState([]);
  
  useEffect(() => {
    const data = async () => {
      const res = await axios.get(`http://localhost:3000/wines/${id}`);
      setWine(res.data);
    };
    data();
  }, []);

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
