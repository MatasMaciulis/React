

//(src komanda) 
import React from 'react'


// susikuriame komponentą Tekstas2 kuris priims props: textProps

// props yra objektas, 
// kuris perduodamas komponentui 
// Jis leidžia jums perdavineti duomenis iš vieno komponento į kitą 
// ir yra būdas, kaip komponentai gali komunikuoti tarpusavyje.

// Susikuriam komponenta su React
// exportuojame į Tekstas.js
export default function Tekstas2 ({textProps}) {


  return (
    <div>{textProps}</div>
  )
}
