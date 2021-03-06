import React from "react";
import SquareButton from "../../../../../ui/SquareButton";
import AddIcon from "@material-ui/icons/Add";

const AddRoom = ({ onClick }) => {
  return (
    <div>
      <SquareButton onClick={onClick}>
        <AddIcon fontSize="small" />
      </SquareButton>
    </div>
  );
};

export default AddRoom;
