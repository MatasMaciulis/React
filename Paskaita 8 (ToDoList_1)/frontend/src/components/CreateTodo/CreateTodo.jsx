import React, { useState } from "react";

// Axios leidžia atlikti HTTP užklausas į nuotolinį serverį.
import axios from "axios";

import "./CreateTodo.css"; // Importuojame "CreateTodo.css" failą

const ENDPOINT = "http://localhost:4000/todos";

export default function CreateTodo({ onTodoAdded }) {
  // Sukuriame būseną "titleInput", kurioje saugosime naujai įvestos užduoties pavadinimą
  const [titleInput, setTitleInput] = useState("");

  // Ši funkcija vykdoma, kai vartotojas spustelėja mygtuką "Submit"
  function handleSubmit() {
    // Tikriname, ar įvesties laukas ne tuščias
    if (titleInput.trim() !== "") {
      // Atlikome POST užklausą į serverį norėdami pridėti naują užduotį
      axios
        .post(ENDPOINT, { todolist: titleInput })
        .then(({ data }) => {
          // Kai užklausa baigiasi sėkmingai, iškviečiama funkcija "onTodoAdded"
          // ir perduodama naujai sukurta užduotis (data)
          onTodoAdded(data);
          // Išvalome įvesties lauką po sėkmingo pridėjimo
          setTitleInput("");
        })
        .catch((error) => console.error(error));
    } else {
      // Jei įvesties laukas yra tuščias, rodomas pranešimas vartotojui
      alert("Įrašykite užduoties pavadinimą!");
    }
  }

  // Komponento išvaizda - įvesties laukas ir mygtukas "Submit"
  return (

    <div className="input-container">

      <label className="input" htmlFor="">To Do This : </label>

      <input
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
        type="text"
      />

      <button className="button" onClick={handleSubmit}> Submit </button>

    </div>

  );
}

