//(rfc komanda)
import React from "react";

// susikuriame komponentą Button kuris priims props: text

// props yra objektas,
// Jis leidžia jums perdavineti duomenis iš vieno komponento į kitą
// tai būdas, kaip komponentai gali komunikuoti tarpusavyje.

export default function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
