import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import ProductList from "./components/ProductList/ProductList";
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
  },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <div className="App">
      <button onClick={() => setIsModalOpen((prev) => !prev)}>Shopping cart</button>
      <ProductList products={products} setShoppingCart={setShoppingCart} />
      <Modal isOpen={isModalOpen} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
    </div>
  );
}

export default App;
