// middleware yra naudingas, kai norite apsaugoti savo serverio tam tikrus maršrutus arba resursus , 
// kurie turėtų būti pasiekiami tik autentikuotiems vartotojams su galiojančiu JWT.

// Token (JWT) kodavimui ir dekodavimui
import jwt from "jsonwebtoken";

// importuojame dotenv - saugoja paslaptis
import dotenv from "dotenv";

// tam kad paimtume info is .env failo
dotenv.config();

// su process.env patenkame į .env faila ir pasiimame duomenis kurios išsaugojam į const
const JWT_SECRET = process.env.JWT_SECRET;

// validateJwt priima tris argumentus: 
// req (užklausos objektas), 
// res (atsakymo objektas)
// next (perduoda vykdymą kitam middleware arba maršrutui).
export async function validateJwt(req, res, next) {
  // Tikriname, ar užklausoje yra Authorization antraštė. 
  // Jei jos nėra, tai reiškia, kad klientas nepateikė JWT. 
  const { authorization } = req.headers;

  // Jei Authorization nera, tai reiškia, kad klientas nepateikė JWT.
  if (!authorization) {
    return res.status(401).json({ message: "Authorization header required " });
  }
  // Jei Authorization yra, išgauname iš jos JWT, atskirdami jį pagal tarpo simbolį
  // JWT dažniausiai yra pateikiamas formatu Bearer [token] 
  // išskiriame antrąją dalį, kurioje yra pats [token]
  const token = authorization.split(" ")[1];

  try {
    // tikrinam (dekoduojm) JWT naudodami JWT raktą (JWT_SECRET) ir gauname dekoduotą objektą decoded
    const decoded = jwt.verify(token, JWT_SECRET);
    // Jei dekodavimas pavyksta ir JWT yra galiojantis, išsaugome dekoduotą naudotojo ID req objekte  
    req.userId = decoded.id;
    // kviečiame next funkciją, kad leistume HTTP užklausai tęsti vykdymą
    next();
    
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}