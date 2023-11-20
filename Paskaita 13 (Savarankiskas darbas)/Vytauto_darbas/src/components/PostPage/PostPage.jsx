import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import style from "./PostPage.module.css";

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(({ data }) => {
        setPost(data);
        console.log(data);
      });
  }, [id]);

  return (
    <div className={style.postPage}>
      <h1>Postas: </h1>

      <h4>
        <span>{post.id}.</span> {post.title}
      </h4>

      <p>{post.body}</p>
      <Link to="/">Grįžti į sąrašą</Link>
    </div>
  );
}
