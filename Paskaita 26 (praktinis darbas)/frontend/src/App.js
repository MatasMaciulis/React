
import './App.css';

// kad galėtumėte kurti ir valdyti Routes
import { Routes, Route, Link } from "react-router-dom";
// importuojame aprašytus komponentus
import Login from './components/Login/Login';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';


function App() {
  return (
    <div >
      <Link to="/"></Link>
      <Link to="/registration"></Link>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
  </div>
  );
}

export default App;
