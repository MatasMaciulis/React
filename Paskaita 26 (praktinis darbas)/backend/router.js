// importuokime express js modulį tam, kad galėtume pasiimti Router
import express from "express";

// importuojame aprašytas funkcijas iš controllers.js
import { registration } from "./controllers.js";

// iš express pasiimkime Router funkcija, kad galėtume susikurti routes
const router = express.Router();

//======================================== POST /register  =================================
// susikuriame post router be Callback funkcijos
// Callback funkcija mes aprašysime controllers.js faile taip "paskaldydami" savo kodą
// apraše ir importave Callback funkcija (registration) į router.js, mes ją idedame čia į post router:
router.post("/registration", registration);

// sukurtus Routes exportuojame (šiuo atveju i server.js) nepamiršk ten juos importuoti :) ir :
// nurodyti kad appsas naudotu routes kuriuos importavome
export default router;
