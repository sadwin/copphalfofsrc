import React from "react";
import { IconButton } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import cn from "classnames";

const useStyles = makeStyles({
  root: {
    width: "34px",
    height: "34px",
    background: "#FFFFFF",
    outline: "none",
    border: "1px solid #CACCD1",
    boxSizing: "border-box",
    borderRadius: "3px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover, &:focus": {
      backgroundColor: "#F6F6F5",
      cursor: "pointer"
    },
    padding: 0
  }
});

const SquareButton = ({ children, onClick, classes, ...rest }) => {
  const { root } = useStyles();
  const rootClass = classes && classes.root;

  return (
    <IconButton
      onClick={onClick}
      classes={{ root: cn(root, rootClass) }}
      {...rest}
    >
      {children}
    </IconButton>
  );
};

export default SquareButton;
