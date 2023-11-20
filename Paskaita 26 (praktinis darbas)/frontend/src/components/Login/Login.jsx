import styles from "./Login.module.css";

//  useNavigate : leidžia komponentui naviguoti tarp maršrutų, nukreipiant vartotoją į kitus puslapius
import { useNavigate } from "react-router-dom";
export default function RegistrationForm() {
    
    const navigate = useNavigate();

    // funkcija kuri bus vykdoma paspaudus mygtuką "Sign In"
    const handleSignIn = () => {
        navigate("/registration")
    }    

  return (
    <form className={styles.form}>

      <div className={styles.imageContainer}>
        <img
          src="https://abuzzingbee.com/wp-content/uploads/2023/04/11906660_4861083-mobile-phone-1024x1024.jpg" // Pakeiskite į savo paveiksliuko kelią
          alt="Registration Image"
          className={styles.registrationImage}
        />
      </div>

      <div className={styles.loginContainer}>
        <h1>Get Started</h1>
        <h4 className={styles.have_an_accaunt}>Already have an accaunt?</h4>
        <h4 className={styles.sign_in} onClick={handleSignIn} style={{ cursor: "pointer", color: "#F2877D" }}>Sign In</h4>
      </div>
    </form>
  );
}
