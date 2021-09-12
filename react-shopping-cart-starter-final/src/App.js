// import useState
import React, { useState } from "react";
// import React from "react";
import "./styles.css";
import AllTheThings from "./components/AllTheThings";
import MyShoppingCart from "./components/MyShoppingCart";
import Form from "./components/Form";
import productsArr from "./products";

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  // create an addToCart function that takes in a product as a param
  // using the ...spread operator add the product to the cart array
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  // create an removeFromCart function that takes in an index as a param
  // using Array.filter remove create a new array where that item is removed

  const addToProductsFunction = (product) => {
    console.log(product);
    setProducts([product, ...products]);
  };

  const removeFromCart = (index) => {
    const cartArr = cart.filter((d, i) => i !== index);
    setCart(cartArr);
  };

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form addToProducts={addToProductsFunction} />
      <div className="products">
        <AllTheThings things={products} handleClick={addToCart} />
        <MyShoppingCart cart={cart} handleClick={removeFromCart} />
      </div>
    </div>
  );
}
