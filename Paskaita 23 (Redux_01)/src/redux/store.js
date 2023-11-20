// Funkcija configureStore yra Redux bibliotekos funkcija, kuri naudojama sukurti Redux talpyklą.
// Ši funkcija gali priimti objektą su keliais parametrais, kurie konfigūruoja talpyklą.
// Objekte galite nurodyti reducers ir kitus parametrus, kurie valdo talpyklos elgseną.
// Pavyzdžiui, nurodant reducer objekte, jūs nustatote, kokius reducers naudosite savo programoje.
// Tai yra pagrindinis būdas organizuoti būseną ir valdyti veiksmus su Redux.

// palengvinti darbą su Redux
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter/counterSlice";

// sukuriame talpyklą kuri priima viena objektą, kuriame yra reducer
export const store = configureStore({ reducer: { counter: counterReducer } });
