
// rfc
import React from "react";
import styles from "./Button.module.css";

// sukuriam komponentą: Button su (props ir funkcija) ir exportuojame į App.js
export default function Button ({text = "default name", onClick, className}) {
  // galima matyti, kokios savybės buvo perduotos šiam komponentui
  // console.log(props);

  // returninam sukurta komponentą (buttona) su funkcija {props.onClick} ir tekstu {props.text} 
  return ( <button className = {styles.background} onClick={onClick}>{text}</button>);

}
   