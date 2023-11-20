import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(true);

  // apsirašome button funkciją su kurią atidarysime/uzdarysime modalą (keičia false/true reikšmes)
  function handleButton() {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <div>
      {/* apsirašome modalą kuris bus iškviestas button papsaudimimu */}
      <button onClick={handleButton}>Open</button>

      {/* ================================================== PIRMAS MODAL ============================================== */}

      <Modal
        // aprašome kad modalas bus rodomas užsikrovus www, nes isSecondModalOpen pradinė reikšmė yra true
        open={isSecondModalOpen}
        // aprašome modalo title
        title={"PIRMAS MODALAS"}
        // aprašome modalo uzdarymo funkcija
        onClose={() => {
          setIsSecondModalOpen(false);
          // uždarius "PIRMAS MODALAS" atsidaro "Pirmas Modalas"
          setIsModalOpen(true);
        }}
      >
        {/* aprašome modalo children */}
        <h1>tai yra modalo "PIRMAS MODALAS" children elementai</h1>
        <p>šis MODALAS pasileidžia automatiškai užsikrovus www</p>

        {/* galime aprašyti modalo submit funkcija */}
        <input type="text" />
        <button onClick={() => console.log("I am submitting")}>submit</button>
      </Modal>

      {/* ================================================== ANTRAS MODAL ============================================== */}

      <Modal
        // aprašome kad modalas nebus rodomas užsikrovus www, nes isModalOpen pradinė reikšmė yra false
        open={isModalOpen}
        // galime aprašyti modalo request
        request={() => console.log("Request to DB")}
        // aprašome modalo title
        title={"ANTRAS MODALAS"}
        // aprašome modalo uzdarymo funkcija
        onClose={() => setIsModalOpen(false)}
      >
        {/* aprašome modalo children */}
        <h1>Tai yra modalo "ANTRAS MODALAS" children elementai</h1>
        <p>šis MODALAS pasileidžia automatiškai uždarius "PIRMAS MODALAS" </p>
      </Modal>
    </div>
  );
}

export default App;
