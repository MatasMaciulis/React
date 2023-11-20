// kurti ir valdyti būsenos kintamuosius
import React, { useState, useEffect } from "react";

// Axios leidžia atlikti HTTP užklausas į serverį.
import axios from "axios";

// gauti parametrus iš URL adreso
import { useParams } from "react-router-dom";

export default function PostDetail() {
  // gauname router parametrą iš URL adreso ir priskiriame jį kintamajam
  const { id } = useParams();
  // sukuriam būsenos kintamąjį ir priskiriam pradinę reikšmę useState ().
  // nurodyta funkcija leis pakeisti būsenos reikšmę vėliau.
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      // siunčiame get užklausą į DB : informacijai gauti (naudojant Axios .get),
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      // .then ({ data }) : išsaugojam gautus duomenis į kintamąjį datą
      // setPost(data) : pakeičiame būsenos pradinę reikšmę
      .then(({ data }) => setPost(data))
      // aprašomas nesekmės atvejis
      .catch((error) => {
        console.error("Klaida:", error);
      });
    // Priklausomybių masyvas naudojamas tam, kad kontroliuotumėte, kada siusti get užklausą į DB
    // Jei priklausomybių masyvas yra tuščias ([]) Kreipimasis į DB vyksta tik vieną kartą, kai komponentas yra sukurtas,
    // kadangi priklausomybių masyvas yra [id] tai kreipimasis į DB vyks iš naujo, kai pasikeis ID reikšmė URL adrese 
  }, [id]);

  return (
    <div>
      <h1>Post Detail</h1>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
