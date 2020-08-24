import React from "react";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import "../styles.css";

const CoordinatesCell = cellData => {
  return (
    <div className="coordinates-cell">
      <RoomOutlinedIcon />
      <div>
        {`${cellData.key.longitude}`}
        <br />
        {`${cellData.key.latitude}`}
      </div>
    </div>
  );
};

export default CoordinatesCell;
