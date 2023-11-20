import React, { useState, useEffect, useMemo } from "react";
import styles from "./PostList.module.css";

import axios from "axios";
import { Link } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
      setPosts(data);
      console.log(data);
    });
  });
  const list = useMemo(() => {
    return posts.map((post) => (
      <h4 key={post.id}>
        {post.id}. <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h4>
    ));
  }, [posts]);

  return (
    <div className={styles.postListContainer}>
      <h1>Postų sąrašas</h1>
      <div className={styles.postList}> {list}</div>
    </div>
  );
}
