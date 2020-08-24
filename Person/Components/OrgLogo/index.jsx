import React from "react";
import { makeStyles } from "@material-ui/core";
import cn from "classnames";
import noimage from "./noimage.png";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex"
  },
  image: {
    width: "100%",
    maxHeight: "100%",
    margin: "auto"
  },
  noImage: {
    background: "#E9ECF7",
    border: "2px dashed #CACCD1",
    boxSizing: "border-box",
    padding: theme.spacing(0.5)
  }
}));

function OrgLogo(props) {
  const { imgId, className } = props;
  const classes = useStyles();

  if (!imgId) {
    return (
      <div className={cn(classes.root, classes.noImage, className)}>
        <img src={noimage} alt="logo" className={classes.image} />
      </div>
    );
  }

  return (
    <div className={cn(classes.root, className)}>
      <img
        src={`/work/api/file/${imgId}`}
        alt="logo"
        className={classes.image}
      />
    </div>
  );
}

export default OrgLogo;
