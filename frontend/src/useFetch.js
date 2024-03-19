import { useState, useEffect } from "react";



export function useFetch() {
  const url = "http://localhost:8080/books";
  const [data, setData] = useState(null);
  const [needsReload, setNeedsReload] = useState(true);

  useEffect(() => {
    if(needsReload){
    fetch(url)
      .then((response) => response.json())
      .then((data) =>{
        setData(data);
        setNeedsReload(false);
    });
    }
}, [needsReload]);
      
  
  return { data, url, setNeedsReload};
}
