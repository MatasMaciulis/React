import logo from "./logo.svg";
import "./App.css";

// importuojame sukurta 1 Komponentą
import PirmasKomponentas from "./components/PirmasKomponentas/PirmasKomponentas";
// importuojame sukurta 2 komponentą
import AntrasKomponentas from "./components/AntrasKomponentas/AntrasKomponentas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PirmasKomponentas />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AntrasKomponentas />
        <h1>Labas</h1>
        {/* idedame importuotą Komponentą */}
        <PirmasKomponentas />
        
      </header>
    </div>
  );
}

export default App;
