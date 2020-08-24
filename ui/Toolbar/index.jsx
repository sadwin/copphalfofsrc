import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    margin: `0 ${theme.spacing()}px ${theme.spacing(2)}px ${theme.spacing()}px`,
    padding: theme.spacing(2),
    background: "#fff",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.05)"
  },
  start: {
    display: "flex",
    justifySelf: "flex-start"
  },
  end: {
    display: "flex",
    justifySelf: "flex-end"
  },
  center: {
    display: "flex",
    justifySelf: "center"
  }
}));

export function Start(props) {
  const classes = useStyles();
  return <div className={classes.start}>{props.children}</div>;
}

export function End(props) {
  const classes = useStyles();
  return <div className={classes.end}>{props.children}</div>;
}

export function Center(props) {
  const classes = useStyles();
  return <div className={classes.center}>{props.children}</div>;
}

function Toolbar(props) {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
}

export default Toolbar;
