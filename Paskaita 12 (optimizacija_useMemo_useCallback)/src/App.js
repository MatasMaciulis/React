import { useMemo, useCallback, useState, useEffect } from "react";
import "./App.css";
import PicturesList from "./components/PicturesList/PicturesList";

function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(1);

  const cachedValue = useMemo(() => {
    // Sukuriamas kintamasis 'x' ir priskiriama pradinė reikšmė 0.
    let x = 0;

    // Prasideda ciklas nuo 0 iki 999999999.
    for (let i = 0; i < 999999999; i++) {
      // Tada vykdomas ilgas skaičiavimas, kurio metu x padidinamas per kiekvieną ciklo iteraciją.
      x++;
    }
    // Po ilgo skaičiavimo, x turi naują reikšmę, kuri yra skaičiavimo rezultatas.
    // Ši reikšmė (suma x + number2) yra atsimenama useMemo, ir ji bus perskaičiuojama tik tada, kai number2 pasikeičia.
    // Tai leidžia užtikrinti, kad sudėtingas skaičiavimas nevyks kiekvieną kartą, kai komponentas atnaujinamas,
    // bet tik tada, kai kinta number2.
    return x + number2;
    // masyvas, kuris yra perduodamas useMemo antrajam argumentui,
    // nurodo reikšmes, dėl kurių pasikeitimo useMemo funkcija vykdo ilgus skaičiavimus iš naujo
  }, [number2]);

  const cashedFunction = useCallback(() => {
    console.log("cashedFunction");
  }, []);

  const notCashedFunction = () => {
    console.log("notCashedFunction");
  };

  useEffect(() => {
    notCashedFunction();

    console.log("useEffect");
  }, [notCashedFunction, number]);

  cashedFunction();

  return (
    <div>
      <PicturesList />
      {cachedValue}
      <button onClick={() => setNumber((prev) => ++prev)}>Calculate</button>
      <button onClick={() => setNumber2((prev) => ++prev)}>
        This makes recalculations
      </button>
      {number2}
      {number}
    </div>
  );
}

export default App;
