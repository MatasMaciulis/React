// importuojame npm package:
import express from "express";

// importuojame irašyta cors - kur nuima apsaugas nuo request
import cors from "cors";

// importuojame irašyta mongose - kuris padės prisijungti prie duonbazes
import mongoose from "mongoose";

// importuojame dotenv - saugoja paslaptis
import dotenv from "dotenv";

// importuojame routes iš routes.js failo
import router from "./router.js";

// tam kad paimtume info is .env failo
dotenv.config();

// su process.env patenkame į .env faila ir pasiimame duomenis kurios išsaugojam į const
// || 4000 suveiks tuo atveju jei port 3000 bus užimtas ir t.t.
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3001;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

// express pagalba susikurkime aplikacija (app)
const app = express();

// nurodome kad mūsų app naudotu cors :
app.use(cors());

// nurodome kad mūsų app naudotu is express paimta funkciją express.json
// jį padeda backendui dirbti su json ir suprasti kas tai yra (Jei yra POST,PUT atvejis)
app.use(express.json());

// nurodome kad mūsų app naudotu routes kuriuos importavome iš routes.js failo
app.use(router);

// app STARTAS
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
