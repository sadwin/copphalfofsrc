import React from "react";
import "../styles.css";

const ProffesionCell = ({value}) => {
  return (
    <div className="cell-customized">
      {value ? 'Профессия' : 'Специальность'}
    </div>
  );
};

export default ProffesionCell;
