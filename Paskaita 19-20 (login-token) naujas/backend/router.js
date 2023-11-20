// importuokime express js modulį tam, kad galėtume pasiimti Router
import express from "express";

// importuojame aprašytas funkcijas iš controllers.js
import {login, register, getUsers} from "./controllers.js";

import { validateJwt } from "./middleware.js"; 


// iš express pasiimkime Router funkcija, kad galėtume susikurti routes
const router = express.Router();

//======================================== POST /register  =================================
// susikuriame post router be Callback funkcijos
// Callback funkcija mes aprašysime controllers.js faile taip "paskaldydami" savo kodą
// apraše ir importave Callback funkcija (register) į router.js, mes ją idedame čia į post router:
router.post ("/register", register);

//======================================== POST /login  ====================================
// susikuriame login router be Callback funkcijos
// Callback funkcija mes aprašysime controllers.js faile taip "paskaldydami" savo kodą
// apraše ir importave Callback funkcija (login) į router.js, mes ją idedame čia į post router:
router.post ("/login", login);

//======================================== GET /users  ====================================
router.get ("/users", validateJwt, getUsers );



  


// sukurtus Routes exportuojame (šiuo atveju i server.js) nepamiršk ten juos importuoti :) ir :
// nurodyti kad appsas naudotu routes kuriuos importavome
export default router;