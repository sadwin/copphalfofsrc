import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "flex-start"
  },
  field: {
    minWidth: 120,
    paddingRight: 5
  },
  value: {
    fontSize: 12
  },
  available: {
    fontSize: "10px",
    lineHeight: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
    color: "#FFFFFF",
    borderRadius: "10px",
    padding: "4px 8px",
    background: "rgba(133, 196, 70, 0.8)"
  }
}));

const RoomInfoField = ({ field, value, useBadge }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        className={classes.field}
        variant="caption"
        color="textSecondary"
      >
        {field}
      </Typography>
      <Typography className={useBadge ? classes.available : classes.value} variant="caption">
        {value}
      </Typography>
    </div>
  );
};

export default RoomInfoField;
