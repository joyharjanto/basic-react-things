import React, { useRef } from "react";

export default function Form(props) {
  // const [gif, setGif] = useState("");
  const gifTitle = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    props.handleSearch(gifTitle.current.value);
    gifTitle.current.value = "";
  };

  const handleRandom = (e) => {
    e.preventDefault();
    props.randomSearch();
    // props.handleRandom(gif);
    // setGif(gif);
  };

  return (
    <div className="Form">
      <div>
        search:
        <input
          ref={gifTitle}
          type="text"
          name="search"
          placeholder="enter giphy"
        />
        <button onClick={handleSearch}> submit </button>
      </div>
      <button onClick={handleRandom}> random </button>
    </div>
  );
}
