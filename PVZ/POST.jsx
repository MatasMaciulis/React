import React, { useState, useEffect } from "react";

// Axios leidžia atlikti HTTP užklausas į serverį.
import axios from "axios";

const HOST = "http://localhost:3001/todos";

export default function PostComponent({ setPost }) {
  // sukuriam naują būsenos kintamąjį ir priskiriam pradinę reikšmę ("").
  // funkciją setTitle, leis pakeisti title būsenos reikšmę vėliau.
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Būsena, nustatanti ar title laukas validus
  const [isTitleValid, setIsTitleValid] = useState(true);

  // Būsena, nustatanti ar body laukas validus
  const [isBodyValid, setIsBodyValid] = useState(true);

  //=========================================== Antras "useEffect" ========================================

  // Effect'as, tikrinantis ar body laukas yra validus
  useEffect(() => {
    if (body.length === 0 || body.length > 30) {
      setIsBodyValid(false); // Jei reikšmė neįtiko reikalavimams, nustatoma, kad laukas nevalidus
    } else {
      setIsBodyValid(true); // Jei reikšmė tinka reikalavimams, nustatoma, kad laukas validus
    }
  }, [body]);

  //=========================================== Trečias "useEffect" ========================================

  // Effect'as, tikrinantis ar title laukas yra validus
  useEffect(() => {
    if (title.length === 0 || title.length > 15) {
      setIsTitleValid(false); // Jei reikšmė neįtiko reikalavimams, nustatoma, kad laukas nevalidus
    } else {
      setIsTitleValid(true); // Jei reikšmė tinka reikalavimams, nustatoma, kad laukas validus
    }
  }, [title]);
  //================================================ POST  ===========================================

  // Funkcija, kviečiama paspaudus "Submit" mygtuką
  async function handleSubmit(e) {
    // išvengta numatytųjų naršyklės veiksmų (puslapio perkrovimas)
    e.preventDefault();
    try {
      // siunčiame post užklausą į DB : kad irašytu naują (objektą) informacija (naudojant Axios .post),
      const { data } = await axios.post(HOST, { title, body });
      // pridedam naują informacija (data) prie išskleisto esamo (prev) masyvo
      setPost((prev) => [...prev, data]);

      // Išvalome formos laukus po sėkmingo pateikimo
      setTitle("");
      setBody("");
    } catch (error) {
      alert(error);
    }
  }
}
return (
  <div>
    <h1>Post Component</h1>
    <form onSubmit={handleSubmit}>
      <div>
        {/* Jei title nevalidus, rodoma klaidos žinutė */}
        {!isTitleValid && <p>Title not valid</p>}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        {/* Jei body nevalidus, rodoma klaidos žinutė */}
        {!isBodyValid && <p>Body not valid</p>}
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div>
        {/* "Submit" mygtukas yra neaktyvus, jei bent vienas iš laukų nevalidus */}
        <button type="submit">Paskelbti</button>
      </div>
    </form>
  </div>
);
