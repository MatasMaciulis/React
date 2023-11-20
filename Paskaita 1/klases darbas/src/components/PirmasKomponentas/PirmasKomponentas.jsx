
// čia pasirašome rfc ir sukuriame Komponentą kuri exportuojame į App.js

import React from 'react'
import AntrasKomponentas from '../AntrasKomponentas/AntrasKomponentas';

export default function PirmasKomponentas() {

    //susikuriame const
    let age = 20;

    function handleClick(){
     age++;
    }
    
  return (
    <div>
        {/* return const ( galimas tik vienas html komponentas ) */}
        <h1>{age + 10}</h1>
        <AntrasKomponentas />
        <button onClick={handleClick}>Paspausk mane</button>
    </div>
  )
}
