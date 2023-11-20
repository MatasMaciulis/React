// užšifruoja passworda
import bcrypt from "bcrypt";

// Token (JWT) kodavimui ir dekodavimui
import jwt from "jsonwebtoken";

// importuojame User model iš models/Users.js failo su viduje esančia (informacija) schema"
import User from "./models/User.js";

// importuojame dotenv - saugoja paslaptis
import dotenv from "dotenv";

// tam kad paimtume info is .env failo
dotenv.config();

// paimame JWT_SECRET
const JWT_SECRET = process.env.JWT_SECRET;

//======================================== POST /register  =================================

export async function registration(req, res) {
  // iš (req.body) paimame :name, email, password
  const { name, email, password } = req.body;

  // patikrina  laukai yra užpildyti
  if (!name || !password || !email) {
    return res
      .status(400)
      .json({ message: "name password and email are required" });
  }
  try {
    const user = await User.findOne({ name });
    if (user) {
      return res.status(401).json({ message: "user already exists" });
    }

    // Jei laukai yra užpildyti, slaptažodis užšifruojamas
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);

    // susikuriame nauja objektą su viduje saugoma informacija (const newUser = new + importuoto modelio pavadimaimas (User))
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // siunčiame užklausa Į DB naujam objektui išsaugoti
    await newUser.save();

    // jei išsaugojimas pavyko gauname atsakymą (res) is DB su newService
    res.json({ user: newUser });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
}
