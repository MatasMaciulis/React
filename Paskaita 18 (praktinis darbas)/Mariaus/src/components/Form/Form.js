import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Button from "../Button/Button";

export default function Form() {
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);

  const [username, setUsername] = useState("");
  const [isUserNameValid, setIsUserNameValid] = useState(true);

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  useEffect(() => {
    if (username.length > 3) {
      setIsUserNameValid(true);
    } else {
      setIsUserNameValid(false);
    }

    if (email.includes("@")) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }

    if (name.length > 3) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }

  }, [name, username, email]);

  return (
    <form className={styles.form}>

      <Label text={"Name"} />
      <Input 
      startIcon={<i className="fa-solid fa-user"></i>}
      endIcon={isNameValid ? (<i className="fa-solid fa-check"></i>) : (<i class="fa-solid fa-xmark"></i>)}
      type={"text"} 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      isValid={isNameValid}
      />


      <Label text={"Username"} />
      <Input
        startIcon={<i className="fa-solid fa-user"></i>}
        endIcon={isUserNameValid ? (<i className="fa-solid fa-check"></i>) : (<i class="fa-solid fa-xmark"></i>)}
        type={"text"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        isValid={isUserNameValid}
      />

      <Label text={"Email"} />
      <Input
        type={"email"}
        startIcon={<i className="fa-solid fa-envelope"></i>}
        endIcon={isEmailValid ? <i className="fa-solid fa-check"></i> : <i class="fa-solid fa-xmark"></i>}
        isValid={isEmailValid}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={() => {}} text={"Submit"} variant={"primary"} />
      <Button onClick={() => {}} text={"Cancel"} variant={"secondary"} />
    </form>
  );
}
