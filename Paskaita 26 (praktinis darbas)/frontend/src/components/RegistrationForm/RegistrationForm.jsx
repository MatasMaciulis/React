import React, { useState, useEffect } from "react";
import styles from "./RegistrationForm.module.css";
import Button from "../Button/Button";
// atlikti HTTP užklausas į serverį.
import axios from "axios";

const registerEndpoint = "http://localhost:3001/registration";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  async function handleRegister(e) {
    e.preventDefault();
    try {
      // siunčiame post užklausą į DB : kad irašytu naują (objektą) informacija (naudojant Axios .post),
      const { data } = await axios.post(registerEndpoint, {
        name,
        email,
        password,
      });

      alert("Sekmingai prisiregistravote");
    } catch (error) {
      alert("Kazkas negerai");
    }
  }

  useEffect(() => {
    if (name.length > 3) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }

    if (email.includes("@")) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }

    if (password.length > 3) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  }, [name, email, password]);

  return (
    <form onSubmit={handleRegister} className={styles.form}>

      <div className={styles.imageContainer}>
        <img
          src="https://abuzzingbee.com/wp-content/uploads/2023/04/11906660_4861083-mobile-phone-1024x1024.jpg" // Pakeiskite į savo paveiksliuko kelią
          alt="Registration Image"
          className={styles.registrationImage}
        />
      </div>

      <div className={styles.loginContainer} >

        <h1>Get Started</h1>
        <h4 className={styles.have_an_accaunt}>Already have an accaunt?</h4>
        <h4 className={styles.sign_in}>Sign in</h4>

        <div className={styles.social}>

          <Button
            text={"Sign up"}
            variant={"google"}
            onClick={() => { }}
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
            imageSize="25px"  // Galite pakeisti į norimą dydį
          />
          <Button
            text={"Sign up "}
            variant={"facebook"}
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png?20190503112358"
            imageSize="25px"  // Galite pakeisti į norimą dydį
          />
        </div>

        <h3>OR</h3>

        {/* ================================================== */}
        <label htmlFor="nameInput">Name:</label>

        <div className={`${styles.wrapper} ${isNameValid ? styles.valid : styles.invalid}`}>
          <i className="fa-solid fa-user"></i>
          <input
            type="text"
            id="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
        </div>

        {/* ================================================== */}

        <label htmlFor="emailInput">Email:</label>

        <div className={`${styles.wrapper} ${isEmailValid ? styles.valid : styles.invalid}`}>
          <i class="fa-solid fa-envelope"></i>
          <input
            type="email"
            id="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>
        {/* ================================================== */}

        <label htmlFor="passwordInput">Password:</label>

        <div className={`${styles.wrapper} ${isPasswordValid ? styles.valid : styles.invalid}`}>
          <i class="fa-solid fa-key"></i>
          <input
            type="password"
            id="passwordInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        {/* ================================================== */}


        <button type="submit">Submit</button>
      </div>


    </form>
  );
}
