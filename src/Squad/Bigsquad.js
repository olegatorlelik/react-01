import React from "react";

const Bigsquad = (props) => {
  return (
    <div>
      <div className={props.cssClass}>{props.lable}</div>
    </div>
  );
};

export default Bigsquad;
