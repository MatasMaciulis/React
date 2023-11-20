import "./User.css";

// kurti ir valdyti būsenos kintamuosius
import React, { useEffect, useState } from "react";

// gauti parametrus iš URL adreso
import { useParams } from "react-router-dom";

// atlikti HTTP užklausas į serverį.
import axios from "axios";

export default function User() {
  // sukuriam naują būsenos kintamąjį ir priskiriam pradinę reikšmę ("").
  // funkciją setUser, leis pakeisti user būsenos reikšmę vėliau.
  const [user, setUser] = useState({});
  // gauname router parametrą iš URL adreso ir priskiriame jį kintamajam
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      // siunčiame get užklausą į DB : informacijai gauti (naudojant Axios .post),
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      // .then ({ data }) : išsaugojam gautus duomenis į kintamąjį datą
      // setPost(data) : pakeičiame būsenos pradinę reikšmę
      .then(({ data }) => setUser(data))
      // aprašomas nesekmės atvejis
      .catch((error) => console.log(error));
    // Priklausomybės masyvas [id] nurodo, kad ši funkcija bus vykdoma tik tada, kai "id" pasikeičia
  }, [id]);

  return <h1 className="centered-element">{user.name}</h1>;
}
