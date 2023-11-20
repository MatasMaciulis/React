import mongoose from "mongoose";

// susikuriame modelio schema:
// su šios schemos pagalba vykdisime užklausas i savo DB
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    require: true,
  },
  dateOfCreation: {
    type: Date,
    default: Date.now,
  },
  isFinished: {
    type: Boolean,
    default: false,
  },
});

// eksportuojame sukurta modelį su pavadinimu "Todo" kuris naudos schema : todoSchema
export default mongoose.model("Todo", todoSchema);
