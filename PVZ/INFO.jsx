
//====================================== BUSENOS KINTAMIEJI - useState ==========================================

// React būsenos valdymo principas :

// 1. Pradinė būsena (`useState`):

// Kai komponentas sukurtas, naudojant `useState`, nurodoma pradinė būsena. 
// Pradinė būsena yra informacija arba duomenys, kuriuos komponentas turi pradžioje. 
// Tai gali būti objektas, masyvas, skaičius, tekstas ar bet koks duomenų tipas.
// PVZ:, `useState({})` nustato pradinę būseną kaip tuščią objektą.

// 2. Būsenos atnaujinimas (`setUsers`):

// `setUsers` yra funkcija, kuri leidžia pakeisti pradinę komponeneto būseną, po jo sukūrimo.
// Kai gauname naujus duomenis iš užklausos ar kito šaltinio, mes naudojame `setUsers` funkciją, kad pakeistume komponeneto kintamąjį naujais duomenimis.
// Tai yra React būsenos atnaujinimo mechanizmas. Kai pakeičiame būseną, React supranta, kad komponento būsena pasikeitė, ir jis persirenderina, kad atspindėtų naują būseną.

// Taigi, `useState({})` nustato pradinę būseną, o `setUsers` leidžia dinamiškai keisti būseną gautomis duomenimis ir perrenderinti komponentą, kad jis rodytų naują informaciją.
// Tai yra pagrindinis React būsenos valdymo principas, kuris leidžia dinamiškai keisti ir atnaujinti komponento duomenis.


//============================= axios =========================

// atlikti HTTP užklausas į serverį.
import axios from "axios";

//====================== react-router-dom ======================

// naviguoti tarp maršrutų
import { useNavigate } from 'react-router-dom'

// kurti ir valdyti Routes
import { Routes, Route } from "react-router-dom";

// kurti (links) tarp skirtingų puslapių
import { Link } from "react-router-dom";

// gauti parametrus iš URL adreso
import { useParams } from "react-router-dom";

// Įtraukdami <BrowserRouter> komponentą aplink programos komponentus, 
// suteikiame galimybę naudotis maršrutavimo funkcijomis, pavyzdžiui, <Link>, <Route>, ir pan.
import { BrowserRouter } from "react-router-dom";

// atlikti veiksmus komponento gyvavimo ciklo metu
import React, { useEffect } from "react";

// saugoti ir atnaujinti komponentų duomenis.
import React, { useState } from "react";

//======================= createContext (skirtas : dalintis duomenimis tarp komponentų) ==========================

// tam kad kurti Context "saugykla"
import { createContext } from "react";

// sukuriam Context "saugykla" 
export const userContext = createContext();

// tam kad panaudoti Context "saugykla"
import React, { useContext } from "react";

// importuojame sukurtą Context "saugykla"
import { userContext } from "../../App";

// panaudojam Context "saugyklos" informaciją
const { user } = useContext(userContext);


//========================= react-dom ==========================

// kurti modalinius langus
import { createPortal } from "react-dom";

//========================= redux ==========================

// palengvinti darbą su Redux 
import { configureStore } from "@reduxjs/toolkit";


