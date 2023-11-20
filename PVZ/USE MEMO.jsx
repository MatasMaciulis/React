// useMemo - išsaugo sakaičiavimų reikšmę  savo atmintyje 
// Šiame pavyzdyje cachedValue kintamasis, kuris saugo skaičiavimo rezultatą, gautą iš useMemo funkcijos
// kad ji vykdytų ilgus skaičiavimus tik vieną kartą ir atsimintų rezultatą. 
// Tai pagerina komponento veikimo efektyvumą.


import { useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(1);

  //============================================== FUNKCIJOS "UŽKEŠAVIMAS ===================================================

  // chashedValue: kintamasis, kuris saugo skaičiavimo rezultatą, gautą iš useMemo funkcijos
  const cachedValue = useMemo(() => {
    // Sukuriamas kintamasis 'x' ir priskiriama pradinė reikšmė 0.
    let x = 0;
    // Prasideda ciklas nuo 0 iki 999999999.
    for (let i = 0; i < 9999999999; i++) {
      x++;
    }
    // Nustatome būsenos reikšmę su nauju rezultatu
    return (x);
    // Priklausomybių masyvas naudojamas tam, kad kontroliuotumėte, kada useMemo turėtų perskaičiuoti reikšmes. 
    // Jei priklausomybių masyvas yra tuščias ([]), useMemo skaičiavimas vyksta tik vieną kartą, kai komponentas yra sukurtas, 
    // ir jo rezultatas yra saugomas komponento: cachedValue vidinėje atmintyje.
    // kadangi priklausomybių masyvas yra [number2] tai useMemo skaičiavimas vyks iš naujo, kai pasikeis number2 reikšmė
  }, [number2]);

  // =========================================================================================================================

  return (
    <div>
      {/* cachedValue : skaiciavimo rezultatai */}
      {cachedValue}

      {/* papsaudus button - Calculate vykdoma funkcija : setNumber kuri prie esamo rezultato (kuri paskaičiavo useMemo) prideda 1   */}
      {/* useMemo - skaičiavimas nevyksta iš naujo, nes jis jau buvo atliktas, kai komponentas buvo sukurtas, ir jo rezultatas buvo saugomas atmintyje */}
      <button onClick={() => setNumber((prev) => ++prev)}>Calculate</button>

      {/* papsaudus button - recalculate vykdoma funkcija : setNumber2 kuri prie pradinės const number2 reikšmes prideda 1   */}
      {/* useMemo - skaičiavimas vyksta iš naujo, nes pasikeičia number2 reikšmė. */}
      <button onClick={() => setNumber2((prev) => ++prev)}>recalculate</button>


      {number2}

      {/* kiek kartu buvo papsaustas Calculate buttonas */}
      {number}
    </div>
  );
}
