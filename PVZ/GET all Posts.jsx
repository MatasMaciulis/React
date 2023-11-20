import React, { useState, useEffect } from "react";

// Axios leidžia atlikti HTTP užklausas į serverį.
import axios from "axios";

export default function MyComponent() {
  // sukuriam naują būsenos kintamąjį ir priskiriam pradinę reikšmę ().
  // funkciją setPost, leis pakeisti user būsenos reikšmę vėliau.
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      // siunčiame get užklausą į DB : informacijai gauti (naudojant Axios .get),
      .get("https://jsonplaceholder.typicode.com/posts")
      // .then ({ data }) : išsaugojam gautus duomenis į kintamąjį datą
      // setPost(data) : pakeičiame būsenos pradinę reikšmę
      .then(({ data }) => setData(data))
      // aprašomas nesekmės atvejis
      .catch((error) => {
        console.log(error);
      });
  }, []); // [] užtikrina, kad užklausa būtų atliktas tik komponento kraunimo metu

  return (
    <div>
      <h1>GET Užklausa naudojant Axios</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
