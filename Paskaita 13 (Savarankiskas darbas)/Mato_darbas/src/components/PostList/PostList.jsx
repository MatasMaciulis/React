//===================================== GET component =============================

import React, { useState, useEffect } from "react";

// Axios leidžia atlikti HTTP užklausas į serverį.
import axios from "axios";

// kad galėtumėte kurti (links) tarp skirtingų puslapių
import { Link } from "react-router-dom";

export default function PostList() {
  // sukuriam naują būsenos kintamąjį ir priskiriam pradinę reikšmę ("").
  // funkciją setTitle, leis pakeisti title būsenos reikšmę vėliau.
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios
      // siunčiame get užklausą į DB : informacijai gauti (naudojant Axios .post),
      .get("https://jsonplaceholder.typicode.com/posts")
      // .then ({ data }) : išsaugojam gautus duomenis į kintamąjį datą
      // setUser(data) : pakeičiame būsenos pradinę reikšmę
      .then(({ data }) => setPostList(data))
      // aprašomas nesekmės atvejis
      .catch((error) => {
        console.error(error);
      });
  }, [postList]);

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {postList.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
