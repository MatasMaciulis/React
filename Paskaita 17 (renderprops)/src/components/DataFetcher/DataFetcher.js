import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DataFetcher({ render }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((err) => alert(err));
  }, []);

  return <div>{isLoading ? <h1>Loading...</h1> : render(data)}</div>;
}
