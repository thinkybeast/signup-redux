import React from "react";

const SaveRow = (props) => {
  return (
    <div className="d-flex flex-row justify-content-end">{props.children}</div>
  );
};

export default SaveRow;
