import mongoose from "mongoose";

import Todo from "./Models/Todo.js";

//======================================== POST  ==========================================

export async function addTodo(req, res) {
  // iš (req.body) paimame : title, body
  const { title, body } = req.body;

  // tikriname, ar įvesties laukai yra užpildyti prieš siunčiant informaciją į DB
  if (!title || !body) {
    return res.status(400).json({ message: "Title and body are required" });
  }
  try {
    // siunčiame užklausą į DB : naujo objekto sukurimui (naudojant Mongoose .create)
    const newTodo = await Todo.create({ title, body });

    // Nustatome HTTP būseną kaip "200 OK" ir grąžiname JSON atsakymą
    res.status(201).json(newTodo);
    // Nustatome HTTP būseną kaip "500 Internal Server Error" ir grąžiname JSON klaidos atsakymą
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
//======================================== GET  ===========================================
export async function getTodos(req, res) {
  try {
    // siunčiame užklausą į DB : surasti visus irašus (naudojant Mongoose .find)
    // ({kaip filtruoti įrašus?})  {} kad bus grąžinti visi įrašai iš duomenų bazės
    // ({ __v: 0 }) nurodome, kad nebus rodoma versijos
    const todos = await Todo.find({}, { __v: 0 });

    // Nustatome HTTP būseną kaip "200 OK" ir grąžiname JSON atsakymą
    res.status(200).json(todos);
    // Nustatome HTTP būseną kaip "500 Internal Server Error" ir grąžiname JSON klaidos atsakymą
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//======================================= DELETE  ==========================================

export async function deleteById(req, res) {
  // iš (req.params) paimame : id
  const { id } = req.params;

  // Tikriname ar ID yra teisingo formato (naudojant Mongoose .isValid),
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid id" });
  }

  try {
    // siunčiame užklausą į DB : kad ištrintu įrašą pagal pateiktą "id" (naudojant Mongoose .findByIdAndDelete),
    const response = await Todo.findByIdAndDelete(id);

    if (response) {
      // Nustatome HTTP būseną kaip "200 OK" ir grąžiname JSON atsakymą
      res.status(200).json({ message: "Todo deleted" });
    } else {
      // Nustatome HTTP būseną kaip "404 Not Found" ir grąžiname JSON atsakymą
      res.status(404).json({ message: "Todo not found" });
    }
    // Nustatome HTTP būseną kaip "500 Internal Server Error" ir grąžiname JSON klaidos atsakymą
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//======================================= UPDATE  ==========================================

export async function updateTodoById(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid id" });
  }

  try {
    const todo = await Todo.findById(id);
    todo.isFinished = !todo.isFinished;
    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
