import React from "react";

const DataList = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.lastName}</h2>
    </div>
  );
};
export default DataList;
