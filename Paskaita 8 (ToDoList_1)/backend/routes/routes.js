// importuokime express js modulį tam, kad galėtume pasiimti Router
import express from "express";

// importuojame aprašytas funkcijas iš controllers
import { createTodo, getTodos, deleteTodo } from "../controllers/todo.js";

// iš express pasiimkime Router funkcija, kad galėtume susikurti routes
const router = express.Router();

//================================== POST  ================================================
// susikuriame post router be Callback funkcijos
// Callback funkcija mes aprašysime controllers.js faile taip "paskaldydami" savo kodą
// apraše ir importave Callback funkcija (createTodo) į routers.js, mes ją idedame čia :
router.post("/todos", createTodo);

//==================================  GET  ================================================
// susikuriame get router be Callback funkcijos
// Callback funkcija mes aprašysime controllers.js faile taip "paskaldydami" savo kodą
// apraše ir importave Callback funkcija (getTodos) į routers.js, mes ją idedame čia :
router.get("/todos", getTodos);

//================================ DELETE  ================================================
// susikuriame delte router be Callback funkcijos
// Callback funkcija mes aprašysime controllers.js faile taip "paskaldydami" savo kodą
// apraše ir importave Callback funkcija (deleteTodo) į routers.js, mes ją idedame čia :
router.delete("/todos/:id", deleteTodo);

// sukurtus Routes exportuojame (šiuo atveju i server.js) nepamiršk ten juos importuoti :) ir :
// nurodyti kad appsas naudotu routes kuriuos importavome
export default router;
