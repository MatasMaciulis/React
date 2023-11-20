// Šis React komponentas vadinamas "Modal" ir jis yra skirtas rodyti pirkinių krepšelio informaciją šoniniame modale (dialogo lange).

import React from "react";

// kurti modalinius langus
import { createPortal } from "react-dom";

import ShoppingCartProduct from "../ShoppingCartProduct/ShoppingCartProduct";

export default function Modal({ isOpen, shoppingCart = [], setShoppingCart }) {
  //  nurodome kad modalai būtų pradžioje paslėpti
  if (!isOpen) {
    return null;
  }
  // apskaičiuojam bendrą prekių krepšelio kainos sumą
  const total = shoppingCart.reduce((acc, pr) => acc + pr.price * pr.amount, 0);

  return createPortal(
    <div>
      {shoppingCart.map((product) => (
        <ShoppingCartProduct
          // suteikia unikalų ID kiekvienai prekei,
          key={`shoppingCartItem${product.id}`}
          product={product}
          setShoppingCart={setShoppingCart}
        />
      ))}
      <p>Total: {total}</p>
    </div>,
    // nurodom kur įterpiamas portalas (modalinis langas) t.y į body apačia
    document.body
  );
}

// shoppingCart -  krepšelio masyvas, kuriame saugomi prekių objektai
// reduce -  sydėti visas prekių objektų kainas krepšelyje į vieną bendrą kainos sumą.
// acc -  yra suma, kuri nuolat didinama pridėjus kiekvienos prekės kainą prie jos. Pradinė suma yra nustatyta į 0, todėl kai pirmą kartą vyksta sumažinimo veiksmas, ji pradedama nuo nulio.
// pr -  yra kiekviena prekė iš shoppingCart masyvo, per kurią einama.
// pr.price -  yra prekės kaina.
// pr.amount -  yra prekės kiekis krepšelyje.
