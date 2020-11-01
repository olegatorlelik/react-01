import React from "react";

const Smallsquad = (props) => {
  return (
    <div>
      <div className={props.cssClass}>{props.lable}</div>
    </div>
  );
};

export default Smallsquad;
