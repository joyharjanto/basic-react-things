// IMPORT useState
import React, { useState } from "react";
import "./styles.css";
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imagesArr from "./imageData";
import bigImage from "./bigImage";

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage]
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  const handleClick = (newImage) => {
    setBigImage(newImage);
  };

  const images = imagesArr.map((image, index) => {
    return (
      <img
        class="thumb"
        src={image.img}
        alt={image.city}
        key={index}
        onClick={() => handleClick(image.img)}
      />
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        {/* RENDER THE IMAGES ARRAY  */}
        <div id="thumbnails"> {images} </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        {/* <img src="" id="bigimage" alt='bigImage'/> */}
        <bigImage bigImage={bigImage} />
      </div>
    </div>
  );
}
