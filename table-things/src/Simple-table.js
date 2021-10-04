import React from "react";

export default function Simpletable() {
  const sample_data = [
    { col1: "hello", col2: "world", col3: "yay" },
    { col1: "react-table", col2: "rocks", col3: "success" },
    { col1: "whatever", col2: "you want", col3: "woohoo" }
  ];
  // const sample_header = sample_data.map((item) => {
  //   return (
  //     <div>
  //       <tr>
  //         <td>col1</td>
  //         <td>col2</td>
  //       </tr>
  //     </div>
  //   );
  // });
  const sample_data_iterate = sample_data.map((item) => {
    return (
      <div>
        <tr>
          <td>{item.col1}</td>
          <td>{item.col2}</td>
          {/* <td>{item.col3}</td> */}
        </tr>
      </div>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>col1</th>
          <th>col2</th>
        </tr>
      </thead>
      <tbody>{sample_data_iterate}</tbody>
    </table>
  );
}
