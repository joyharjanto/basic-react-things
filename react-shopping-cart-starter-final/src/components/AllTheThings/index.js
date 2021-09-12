import React from "react";

function AllTheThings(props) {
  const thingsArray = props.things.map((item, index) => {
    return (
      <li key={index} onClick={() => props.handleClick(item)}>
        {item.name} - ${item.price}
        <br />
        {item.description}
      </li>
    );
  });
  return <div className="AllTheThings">{thingsArray}</div>;
}

export default AllTheThings;
