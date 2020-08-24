import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const chip = {
  fontSize: "10px",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 20,
  whiteSpace: "nowrap",
  borderRadius: "10px",
  padding: "0px 10px",
  margin: "8px 8px 0 0"
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
    maxWidth: "100%",
    flexWrap: 'wrap'
  },
  outlined: {
    ...chip,
    border: "1px solid rgba(0, 0, 143, 0.4)",
    background: "#FFF",
    color: "rgba(0, 0, 143, 0.75)"
  },
  filled: {
    ...chip,
    background: "rgba(0, 0, 143, 0.75)",
    color: "#FFF"
  }
}));

const Chips = ({ specialities, worldSkills }) => {
  const classes = useStyles();

  return <div className={classes.root}>
      {specialities.map(({ name }) => <div className={classes.outlined}>{name}</div>)}
      {worldSkills.map(({ cis, typeName }) => <div className={classes.filled}>{`${cis} | ${typeName}`}</div>)}
  </div>;
};

export default Chips;
