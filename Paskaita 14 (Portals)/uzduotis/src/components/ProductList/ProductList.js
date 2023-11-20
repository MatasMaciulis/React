import React from "react";
import Product from "../Product/Product";

export default function ProductList({ products = [], setShoppingCart }) {
  return (
    <div>
      {products.map((pr) => (
        <Product product={pr} key={pr.id} setShoppingCart={setShoppingCart} />
      ))}
    </div>
  );
}
