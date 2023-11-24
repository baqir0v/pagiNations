import { useEffect, useState } from "react";

function useFetching() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async function () {
      try {
        const response = await fetch("http://localhost:3000/products");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return data;
}

export default useFetching;
