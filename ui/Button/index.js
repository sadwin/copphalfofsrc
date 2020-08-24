import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiButton from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const defaultStyles = {
  display: "flex",
  alignItems: "center",
  minWidth: "120px",
  height: "34px",
  boxSizing: "border-box",
  textTransform: "uppercase",
  outline: "none",
  borderRadius: "2px",
  "& > .MuiButton-label": {
    lineHeight: 1
  },
  progress: {
    "& .MuiCircularProgress-colorPrimary": {
      color: "#FFF !important"
    }
  },
  "&:disabled": {
    borderColor: "rgba(0, 0, 0, 0.26);"
  }
};

const Green = withStyles({
  root: {
    ...defaultStyles,
    border: "1px solid #85C446",
    color: "#85C446",
    "&:hover": {
      backgroundColor: "rgba(133, 196, 70, 0.8)",
      color: "#FFF",
      ...defaultStyles.progress
    },
    "&:active": {},
    "&:focus": {},
    "& .MuiCircularProgress-colorPrimary": {
      color: "#85C446 !important"
    }
  }
})(MuiButton);

const Pink = withStyles({
  root: {
    ...defaultStyles,
    border: "1px solid #EB5757",
    color: "#EB5757",
    "&:hover": {
      backgroundColor: "rgba(241, 84, 84, 0.5)",
      color: "#FFF",
      ...defaultStyles.progress
    },
    "&:active": {},
    "&:focus": {},
    "& .MuiCircularProgress-colorPrimary": {
      color: "#EB5757 !important"
    }
  }
})(MuiButton);

const Blue = withStyles({
  root: {
    ...defaultStyles,
    border: "1px solid #007FBD",
    color: "#007FBD",
    "&:hover": {
      backgroundColor: "rgba(0, 127, 189, 0.7)",
      color: "#FFF",
      ...defaultStyles.progress
    },
    "&:active": {},
    "&:focus": {},
    "& .MuiCircularProgress-colorPrimary": {
      color: "#007FBD !important"
    }
  }
})(MuiButton);

const Default = withStyles({
  root: {
    ...defaultStyles,
    border: "1px solid #778899",
    color: "#778899",
    "&:hover": {
      backgroundColor: "rgba(119, 136, 153, 0.5);",
      color: "#FFF",
      ...defaultStyles.progress
    },
    "&:active": {},
    "&:focus": {},
    "& .MuiCircularProgress-colorPrimary": {
      color: "#778899 !important"
    }
  }
})(MuiButton);

const Button = ({ children, loading, ...rest }) => {
  const content = !loading ? children : <CircularProgress size={20} />;

  switch (rest.color) {
    case "green":
      return <Green {...rest}>{content}</Green>;
    case "pink":
      return <Pink {...rest}>{content}</Pink>;
    case "blue":
        return <Blue {...rest}>{content}</Blue>;
    default:
      return <Default {...rest}>{content}</Default>;
  }
};

export default Button;
