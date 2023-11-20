
//============================================== FORMOS INPUT KOMPONENTAS====================================== 

import React from 'react'

export default function FormInput({
  text,
  value = "",
  onChange,
  inputId,
  type,
  placeholder
}) {
  return (
    <div>
      <label htmlFor={inputId}> {text}</label>
      <input type={type} id={inputId} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

// text: Tai įvesties lauko pavadinimas arba antraštė.
// value: Tai yra įvesties lauko (input) pradinė reikšmė.
// onChange: Tai yra funkcija, kuri bus iškviesta, kai įvesties lauko (input) reikšmė pasikeis.
// inputId: Tai yra unikalus identifikatorius, susijęs su etiketės (label) ir įvesties lauko (input) elementais.
// type: Tai yra įvesties lauko (input) tipas, (pvz., "text", "email", "password" ir tt.).
// placeholder : Tai yra viduje inpute rodomas tekstas 

//==============================================================================================================

// aprašytą formInput komponenta importuojame į norimą kitą komponentą : 
import FormInput from "../FormInput/FormInput";
import React from 'react'



export default function components_Input() {

  const [username, setUsername] = useState(second)
  return (
    <div>
      <FormInput
        inputId="username"
        text="Username"
        type="text"
        value={username}
        // keičiant reikšmę input laukelyje, įvyksta "onChange" įvykis, kuris iškviečia nurodyta funkciją
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
    </div>
  )
}





