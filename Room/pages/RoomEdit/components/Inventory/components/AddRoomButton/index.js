import React from "react";
import AddIcon from "@material-ui/icons/Add";
import SquareButton from "../../../../../../../ui/SquareButton";

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
