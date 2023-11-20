
//=============================================================================================

// Šis komponentas turi du būsenos kintamuosius (number ir text), 
// kurie gali būti atnaujinami naudojant setNumber ir setText. 
// Taip pat yra mygtukas, kurį paspaudus padidinama number, 
// ir importuotas komponentas Tekstas2, kuriam perduodamas prop textProps. 
// Tai yra pavyzdys React komponento kūrimo ir valdymo naudojant "hooks".

//==============================================================================================

// (src komanda) 
// Importuojame React ir "hooks" { useState }
import React, { useState } from "react";

// importuojame komponentą : Tekstas2
import Tekstas2 from "../Tekstas2/Tekstas2";

// ============================== SUSIKURIAME KOMPONENTA SU BŪSENOS KINTAMAISIAIS ==============

// Susikuriam komponenta su React
// exportuojame į > App.js
export default function Tekstas() {

  // Sukuriame būsenos kintamąjį "number" su pradine reikšme naudodami useState()
  // setNumber - funkcija leidžianti atnaujinti (kintamajo) reikšmę
  const [number, setNumber]= useState(28);

  // Sukuriame būsenos kintamąjį "text" su pradine reikšme naudodami useState()
  // setNumber - funkcija leidžianti atnaujinti (kintamajo) reikšmę
  const [text, setText] = useState("Hello");

// ============================== APSIRAŠOME KOMPONENTO FUNKCIJA ==============================

  // komponeneto funkcija kuri bus išaukta paspaudus button ir vykdis veiksmus esančius viduje
  function buttonHandler() {

      // funkcija kuri prideda prie skaičiaus +1
      setNumber ((prev) => prev + 1);

      // funkcija kurį stringą pakeičia į kita stringą
      setText ("sdfsdfsdfsd");
}

//===================================APSIRAŠOME KOMPONENTO HTML====================================

  // apsirašome komponento HTML
  return (
    <div>

      {/* aprašytas let */}
      numberState su pradine reikšme : {number}

      {/* buttona su atributu onClick ir aprašyta funkcija */}
      <button onClick = {buttonHandler}> paspausk mane </button>

      {/* isidedame importuota komponentą Tekstas2 su proops */}
      {/* priskiriame const text su pradine reikšme useState () */}
      <Tekstas2 textProps = {text}/>

    </div>
  );
}
