// kad galėtumėte kurti ir valdyti Routes
import { Routes, Route, Link } from "react-router-dom";
// importuojame aprašytus komponentus
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import User from "./components/User/User";

function App() {
  return (
    <div>
      {/* susikuriame header su linkais kad galėtume naviguoti tarp www puslapių */}
      <header className="header">
        <Link to={"/about"}>About</Link>
        <Link to={"/contacts"}>Contacts</Link>
        <Link to={"/"}>Home</Link>
      </header>

      {/* Nurodome maršrutus path=  ir importuotus aprašytus komponentus element =  */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<Home />} />
        {/* leidžia dinamiškai pasirinkti informaciją, kuri bus rodoma puslapyje pagal konkrečią ID reikšmę */}
        <Route path="/user/:id" element={<User />} />

        {/* Jei nurodytas maršrutas nerastas, rodomas "NERASTA" */}
        {/* PVZ: http://localhost:3000/user/asdf */}
        <Route path="*" element={"NERASTA"} />

      </Routes>

      <footer>cia yra footeris kuris kartosis visuose www komponentuose</footer>
    </div>
  );
}

export default App;