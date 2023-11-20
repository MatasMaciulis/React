import React from "react";

//  naviguoti tarp maršrutų
import { useNavigate } from "react-router-dom";

export default function Home() {
  // iškviečiame useNavigate funkciją
  const navigate = useNavigate();

  // funkcija kuri bus vykdoma paspaudus mygtuką
  function buttonHandler() {
    // naviguojame i contacts
    navigate("/contacts");
  }

  return (
    <div>
      Home
      {/* buttonHandler: Tai yra funkcija, kuri bus iškviesta, paspaudus mygtuką */}
      <button onClick={buttonHandler}>Go to Contacts</button>
    </div>
  );
}
