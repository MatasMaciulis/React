import React, { useState } from "react";

// Axios leidžia atlikti HTTP užklausas į serverį.
import axios from "axios";

const HOST = "http://localhost:3001/todos";

export default function CreateTodo({ setTodos }) {
  // sukuriam naują būsenos kintamąjį ir priskiriam pradinę reikšmę ("").
  // funkciją setTitle, leis pakeisti title būsenos reikšmę vėliau.
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //================================================ POST  ===========================================

  // submitHandler yra iškviečiama, kai vartotojas pateikia formos duomenis paspaudęs "Submit" mygtuką.
  async function submitHandler(e) {
    // išvengta numatytųjų naršyklės veiksmų (puslapio perkrovimas)
    e.preventDefault();
    try {
      // siunčiame post užklausą į DB : kad irašytu naują (objektą) informacija (naudojant Axios .post),
      const { data } = await axios.post(HOST, { title, body });
      // pridedam naują informacija (data) prie išskleisto esamo (prev) masyvo
      setTodos((prev) => [...prev, data]);
      // Išvalome formos laukus po sėkmingo pateikimo
      setTitle("");
      setBody("");
    } catch (error) {
      alert(error);
    }
  }

  return (
    // onSubmit yra įvykio apdorojimo funkcija (submit paspaudimas) kurį priverčia vykdyti submitHandler funkciją,
    <form onSubmit={submitHandler}>
      {/* label - etikete apibudinanti ivesties lauko pavdinimą/}
    {/* htmlFor - atributas susieja label su input lauku puslapio HTML dokumente */}
      <label htmlFor="titleInput">Title</label>

      {/* oChange atributas nurodo, kokią funkciją vykdyti, kai vyksta pakeitimai įvesties lauke */}
      {/* setTitle funkcija pakečia būsenos kintamojo pradinę reikšmę ir priskiriama nauja reikšmę */}
      <input
        type="text"
        id="titleInput"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      {/* oChange atributas nurodo, kokią funkciją vykdyti, kai vyksta pakeitimai įvesties lauke */}
      {/* setBody funkcija pakečia būsenos kintamojo pradinę reikšmę ir priskiriama nauja reikšmę */}
      <label htmlFor="bodyInput">Body</label>
      <input
        type="text"
        id="bodyInput"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
