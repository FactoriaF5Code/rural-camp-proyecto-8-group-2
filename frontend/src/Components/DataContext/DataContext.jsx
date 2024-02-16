import { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../../useFetch";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { data } = useFetch();
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    if (data) {
      setLibros(data);
    }
  }, [data]);

  const value = {
    libros
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return useContext(DataContext);
};
