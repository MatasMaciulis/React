import React from "react";
import styles from "./Image.module.css";
export default function Image ({ imgSaltinis, imgAprasymas }) {
    return(

  <div className={styles.container}> 

    <img src={imgSaltinis} alt={imgAprasymas}/> 
    <p>{imgAprasymas}</p>
    
  </div> 
    );
}

 