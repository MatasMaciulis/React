import mongoose from "mongoose";

// susikuriame modelio schema:
// su šios schemos pagalba vykdisime užklausas i savo DB

const todoSchema = new mongoose.Schema({
  todolist: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 200,
  },
});

// eksportuojame sukurta modeli "Users" kuris naudos schema : todoSchema
export default mongoose.model("Todo", todoSchema);
