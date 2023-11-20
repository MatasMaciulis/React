import React, { useEffect, useState } from "react";
import axios from "axios";
import { usePaginationMano } from "../../hooks/usePaginate";
import Post from "../Post/Post";

export default function ManoVariantas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => setData(data))
      .catch((err) => alert(err.message));
  }, []);

  const { currentPage, handlePageChange, paginatedData } = usePaginationMano(data, 5);

  return (
    <div>
      <hr />
      <h1>Mano variantas</h1>
      {paginatedData.map(({ title, body, id }) => (
        <Post body={body} title={title} key={id} />
      ))}
      <button onClick={() => handlePageChange(currentPage - 1)}>previous</button> {currentPage}
      <button onClick={() => handlePageChange(currentPage + 1)}>next</button>
      <hr />
    </div>
  );
}
