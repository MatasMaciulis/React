import React from "react";

export default function ShoppingCartProduct({ product, setShoppingCart }) {
  function addProduct() {
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

  function removeProduct() {
    setShoppingCart((prev) => {
      const index = prev.findIndex((pr) => pr.id === product.id);

      const prevCopy = [...prev];

      if (prevCopy[index].amount === 1) {
        prevCopy.splice(index, 1);
        return prevCopy;
      } else {
        prevCopy[index].amount -= 1;
        return prevCopy;
      }
    });
  }

  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={removeProduct}>-</button>
      <p>amount: {product.amount}</p>
      <button onClick={addProduct}>+</button>
      <p>price: {product.price * product.amount}</p>
    </div>
  );
}
