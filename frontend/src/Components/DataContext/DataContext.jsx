import { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../../useFetch";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { data, url, setNeedsReload } = useFetch();
  const [libros, setLibros] = useState([]);

  const DeleteBook = (id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setNeedsReload(true);
      })
      .catch((error) => {
        console.error("error al borrar", error);
      });
  };

  useEffect(() => {
    if (data) {
      setLibros(data);
    }
  }, [data]);

  const value = {
    libros,
    DeleteBook
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return useContext(DataContext);
};
