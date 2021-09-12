import React, { useState } from "react";

function Form(props) {
  const [product, setProduct] = useState({ name: "", price: "" });

  const handleSubmit = () => {
    props.addToProducts(product);
    console.log("handleSubmit");
    setProduct({ name: "", price: "", description: "" });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    console.log(value);
    setProduct({
      ...product,
      [name]: value
    });
  };
  return (
    <div className="Form">
      <input
        type="text"
        name="name"
        // value={product.name}
        placeholder="product name"
        onChange={() => handleChange(event)}
      />
      <input
        type="text"
        name="price"
        // value={product.price}
        placeholder="price"
        onChange={() => handleChange(event)}
      />
      <input
        type="text"
        name="description"
        // value={product.text}
        placeholder="description"
        onChange={() => handleChange(event)}
      />

      <button
        className="btn btn-lg btn-primary btn-block"
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
    </div>
  );
}

export default Form;
