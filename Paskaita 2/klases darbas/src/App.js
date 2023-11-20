import "./App.css";

// importuojame savo sukurta komponentą
import Button from "./components/Button/Button";
import Input from "./components/Input/input";

// funkcijas galima apsirašyti ir atskirai (pvz : )
function onClick() {
  console.log("kontaktai");
}

function App() {
  return (
    <div>
      {/* susikuriam button su props ir funkcija */}
      <Button 
      className={"greenText"}
      text={"home"} 
      onClick={() => console.log ("titulinis")} />

      <Button text={"About us"} onClick={() => console.log ("apie mus")} /> 
      <Button text={"Contact us"} onClick={onClick} />
      <Button/>
      <Input />
      
    </div>
  );
}
 
export default App;
    