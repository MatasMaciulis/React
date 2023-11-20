import React from "react";

// ({ htmlFor, text }) - propsai kuriuos priima Label funkcija
export default function Label({ htmlFor, text }) {
    return <label htmlFor={htmlFor}>{text}</label>;
  }
  
//=============================== htmlFor =========================================
// atributas, kuris yra naudojamas HTML <label> elementui nurodyti su kuriuo įvesties lauku 
// (ar kitu HTML elementu) jis susijęs. Tai yra būdas susieti etiketę su konkrečiu įvesties lauku, 
// todėl, paspaudus etiketę, bus aktyvuotas susijęs įvesties laukas.

//=============================== text =========================================
// text - nustato label teksto turinį pagal poreikius

