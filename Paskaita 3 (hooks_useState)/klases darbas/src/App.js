// Importuojame React ir "hooks" { useState }
import { useState } from "react";

import "./App.css";

// importuojame sukartus komponentus :
import Button from "./components/Button/Button";
import Display from "./components/Display/Display";
import Tekstas from "./components/Tekstas/Tekstas";

function App() {
  // Sukuriame būsenos kintamąjį "number" su pradine reikšme naudodami useState()
  // setNumber - funkcija leidžianti atnaujinti (kintamajo) reikšmę
  const [number, setNumber]= useState(0);


  return (
    <div>
      <Tekstas />
      <Button text={"Add one"} onClick={() => setNumber((prev) => prev + 1)} />
      <Display displayNumber={number} />
      <Button text={"Subtract one"} onClick={() => setNumber((prev) => prev - 1)} />
    </div>
  );
}

export default App;
