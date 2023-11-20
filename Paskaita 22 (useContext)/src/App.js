import "./App.css";

// createContext- tam kad kurti Context "saugykla"
import { useEffect, useState, createContext } from "react";

// sukuriam Context "saugykla"
export const userContext = createContext();

// Axios leidžia atlikti HTTP užklausas į serverį.
import axios from "axios";

// importuojami komponentai
import User from "./components/User/User";
import Website from "./components/Website/Website";
import Header from "./components/Header/Header";

const userEndpoint = "https://jsonplaceholder.typicode.com/users/1";


function App() {
  // sukuriam naują būsenos kintamąjį ir priskiriam pradinę reikšmę ().
  // funkciją setUser, leis pakeisti user būsenos reikšmę vėliau.
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      // siunčiame get užklausą į DB : informacijai gauti (naudojant Axios .get),
      .get(userEndpoint)
      // .then ({ data }) : išsaugojam gautus duomenis į kintamąjį datą
      // setUser(data) : pakeičiame būsenos pradinę reikšmę
      .then(({ data }) => setUser(data))
      // aprašomas nesekmės atvejis
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />

      {/* su userContext.Provider apgaubiam : User ir Website komponentus. (idedame į sukurtą saugyką)  */}
      {/* Tai leis apgaubtiems komponentams gauti user objektą ir setUser funkciją */}
      {/* setUser funkcijos perdavimas reiklaingas tam, kad gavus nauja informacija iš DB, jį būtu atnauji visuose perduodamuose komponentuose */}
      <userContext.Provider value={{ user, setUser }}>
        <User />
        <Website />
      </userContext.Provider>

    </div>
  );
}

export default App;
