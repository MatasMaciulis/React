import React from "react";

export default function Product({ product, setShoppingCart }) {
  function addToCart() {
    setShoppingCart((prev) => {
      const index = prev.findIndex((pr) => pr.id === product.id);

      const prevCopy = [...prev];

      if (index === -1) {
        return [...prevCopy, { ...product, amount: 1 }];
      } else {
        prevCopy[index].amount += 1;
        console.log(prevCopy);
        return prevCopy;
      }
    });
  }

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={addToCart}>Add</button>
    </div>
  );
}
