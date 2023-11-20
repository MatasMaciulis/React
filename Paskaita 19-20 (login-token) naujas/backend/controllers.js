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

export async function register(req, res) {
  // iš (req.body) paimame :username, password
  const { username, password } = req.body;

  // patikrina, ar abu laukai yra užpildyti
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "username and password are required" });
  }
  try {
    const user = await User.findOne({ username });
    if (user) {
      return res.status(401).json({ message: "user already exists" });
    }

    // Jei laukai yra užpildyti, slaptažodis užšifruojamas
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);

    // susikuriame nauja objektą su viduje saugoma informacija (const newUser = new + importuoto modelio pavadimaimas (User))
    const newUser = new User({
      username,
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

//======================================== POST /login  ====================================

export async function login(req, res) {
  // iš (req.body) paimame :username, password
  const { username, password } = req.body;

  // patikrina, ar abu laukai yra užpildyti
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "username and password are required" });
  }
  // ieškomas vartotojas su nurodytu username duomenų bazėje naudojant User.findOne
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ message: "user not found" });
  }
  //  Jei vartotojas yra rastas, jis tikrina, ar įvestas slaptažodis atitinka užšifruotą slaptažodį
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(401).json({ message: "password is incorrect" });
  }

  // jei slaptažodis atitinka, vartotojas  prisijungia ir išsaugoja unikalus "token"
  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });

  // grąžinamas : "true" arba "false"
  res.json({ token });
}

//======================================== GET /users  ====================================

export async function getUsers(req, res) {
  try {
    // siunčiame užklausa į DB informacijai gauti ({}{}) irašome pagal ką norime ieškoti savo info.
    // {} - pagal ka mes filtruojame?
    // {} - nurodome pagal ką mes nenorime/norime gauti informacijos
    const users = await User.find({});

    console.log(req.userId);

    // jei užklausa pavyko gauname atgal (į frontendą) atsakymą su visa info
    res.status(200).json({ users });
    // jei užklausa nepavyko gauname json su erroru
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}
