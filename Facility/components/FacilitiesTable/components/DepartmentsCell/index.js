import React from "react";
import "../styles.css";

const DepartmentsCell = ({ key: { departments } }) => {
  return (
    <div className="cell-customized">
      {departments.length > 0
        ? departments.map(({ id, name }) => <div key={id}>{name}</div>)
        : "Не указаны"}
    </div>
  );
};

export default DepartmentsCell;
