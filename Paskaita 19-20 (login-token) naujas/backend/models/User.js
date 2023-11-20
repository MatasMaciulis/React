import mongoose from "mongoose";

// susikuriame modelio schema:
// su šios schemos pagalba vykdisime užklausas i savo DB

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: 3,
    require: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
  },
});

// eksportuojame sukurta modeli "Users" kuris naudos schema : userSchema
export default mongoose.model("User", UserSchema);
