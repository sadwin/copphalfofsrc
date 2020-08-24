import React from "react";
import NoAvatar from "./NoAvatar";
import cn from "classnames";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center"
  }
}));

function Avatar(props) {
  const { imgId, className } = props;
  const classes = useStyles();

  if (!imgId) {
    return (
      <div className={cn(classes.root, className)}>
        <NoAvatar />
      </div>
    );
  }

  return (
    <div className={className}>
      <img src={`/work/api/file/${imgId}`} alt="user avatar" />
    </div>
  );
}

export default Avatar;
