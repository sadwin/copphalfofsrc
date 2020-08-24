import React from "react";
import '../styles.css';

const PrimaryCell = (cellData) => {
  return <div className="cell-customized">{cellData.text}</div>;
};

export default PrimaryCell;
