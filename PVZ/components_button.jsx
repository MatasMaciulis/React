import React from "react";

// ({ type, onClick, text }) - propsai kuriuos priima  Button funkcija
export default function Button({ type, onClick, text }) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
}


//=============================== type =========================================
// type (button tipas) nustato, koks veiksmas vyks, papsaudus mygtuką

// dažniausi (button type) :
// button - jei nepateiksite type savybės , numatytasis tipas bus "button"
// submit - naudojamas pateikti formos duomenis, kai jis yra formos viduje
// reset - naudojamas išvalyti formos duomenis, kai jis yra formos viduje

//=============================== onClick =========================================
// onClick - nurodo funkciją, kuri bus vykdoma paspaudus mygtuką

//=============================== text =========================================
// text - nustato mygtuko teksto turinį pagal poreikius

