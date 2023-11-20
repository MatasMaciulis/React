import mongoose from "mongoose";

// susikuriame modelio schema:
// su šios schemos pagalba vykdisime užklausas i savo DB

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    unique: true, // Užtikrina, kad visi vartotojai turi unikalius elektroninio pašto adresus
    require: true,
  },

  email: {
    type: String,
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
