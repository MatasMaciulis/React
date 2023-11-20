// kurti ir valdyti būsenos kintamuosius
import React, { useState, useEffect } from "react";

// gauti parametrus iš URL adreso
import { useParams } from "react-router-dom";

// kurti (links) tarp skirtingų puslapių
import { Link } from "react-router-dom";

// atlikti HTTP užklausas į serverį.
import axios from "axios";

export default function PostPage() {
  // sukuriam būsenos kintamąjį ir priskiriam pradinę reikšmę useState ().
  // nurodyta funkcija leis pakeisti būsenos reikšmę vėliau.
  const [post, setPost] = useState([]);
  // gauname router parametrą iš URL adreso ir priskiriame jį kintamajam
  const { id } = useParams();

  useEffect(() => {
    axios
      // siunčiame get užklausą į DB : informacijai gauti (naudojant Axios .post),
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      // .then ({ data }) : išsaugojam gautus duomenis į kintamąjį datą
      // setPost(data) : pakeičiame būsenos pradinę reikšmę
      .then(({ data }) => {
        setPost(data);
      });
    // Priklausomybių masyvas naudojamas tam, kad kontroliuotumėte, kada siusti get užklausą į DB
    // Jei priklausomybių masyvas yra tuščias ([]) Kreipimasis į DB vyksta tik vieną kartą, kai komponentas yra sukurtas,
    // kadangi priklausomybių masyvas yra [id] tai kreipimasis į DB vyks iš naujo, kai pasikeis ID reikšmė URL adrese
  }, [id]);

  return (
    <div>
      <h1>Postas: </h1>

      <h4>
        <span>{post.id}.</span> {post.title}
      </h4>

      <p>{post.body}</p>
      <Link to="/">Grįžti į sąrašą</Link>
    </div>
  );
}
