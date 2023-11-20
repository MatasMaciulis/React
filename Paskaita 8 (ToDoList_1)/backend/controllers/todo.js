import Todo from "../models/Todo.js";

import mongoose from "mongoose";

//=================================== POST /todo ==============================

export async function createTodo(req, res) {
  // iš (req.body) paimame : todolist
  const { todolist } = req.body;

  // susikuriame nauja objektą kurį siusime į duomenų bazę (const todo = new + importuoto modelio pavadimaimas (Todo))
  try {
    const todo = new Todo({ todolist });

    // siunciame užklausą į db naujo objekto isaugojimui
    await todo.save();

    // Nustatome HTTP būseną kaip "200 OK" ir grąžiname JSON atsakymą
    res.status(201).json(todo);

    // Nustatome HTTP būseną kaip "500 Internal Server Error" ir grąžiname JSON klaidos atsakymą
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  // res.json({message:"veikia"})
}

//=================================== GET /memberships ==============================

export async function getTodos(req, res) {
  try {
    // siunčiame užklausa į DB informacijai gauti ({}{}) irašome pagal ką norime ieškoti savo info.
    // {} - pagal ka mes filtruojame? {tuščias} reiškia paimsti visa info
    // {} - nurodome kokios nenorime/norime gauti informacijos
    const todos = await Todo.find({}, { __v: 0, users_id: 0 });

    // Nustatome HTTP būseną kaip "200 OK" ir grąžiname JSON atsakymą
    res.status(200).json(todos);

    // Nustatome HTTP būseną kaip "500 Internal Server Error" ir grąžiname JSON klaidos atsakymą
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//================================ DELETE /memberships/:id ===========================

export async function deleteById(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid id" });
  }

  try {
    const response = await Todo.findByIdAndDelete(id);

    if (response) {
      return res.status(200).json({ message: "Todo deleted" });
    } else {
      return res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
