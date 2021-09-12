import "./styles.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Giphy from "./components/giphy";

export default function App() {
  const [gifData, setGifData] = useState(
    "https://api.giphy.com/v1/gifs/search?q=pusheen&api_key=7kHOTVgLrNG5xAZktOdZPEQFTsisSwoh&limit=1"
  );

  const apiSearchReq = async (gifQuery) => {
    let api_key = "7kHOTVgLrNG5xAZktOdZPEQFTsisSwoh";
    const gifSrc = `https://api.giphy.com/v1/gifs/search?q=${gifQuery}&limit=1&api_key=${api_key}`;
    const res = await fetch(gifSrc);
    const json = await res.json();
    // console.log(json.data[0].images.original.url)
    setGifData(json.data[0].images.original.url);
  };

  const randomSearch = async (gifQuery) => {
    let api_key = "7kHOTVgLrNG5xAZktOdZPEQFTsisSwoh";
    const gifSrc = `https://api.giphy.com/v1/gifs/random?limit=1&api_key=${api_key}`;
    const res = await fetch(gifSrc);
    const json = await res.json();
    setGifData(json.data.image_url);
    // console.log(json.data[0].images.original.url)
    // setGifData(json.data[0].images.original.url);
  };

  useEffect(() => {
    randomSearch();
  }, []);

  return (
    <div className="App">
      <h1>Giphy</h1>
      <Form randomSearch={randomSearch} handleSearch={apiSearchReq} />
      <Giphy gifUrl={gifData} />
    </div>
  );
}
