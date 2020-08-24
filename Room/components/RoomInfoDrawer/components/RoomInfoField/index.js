import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "flex-start"
  },
  field: {
    minWidth: 90,
    paddingRight: 5,
  },
  value: {
    fontSize: 12,
  }
}));

const RoomInfoField = ({ field, value }) => {
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
      <Typography className={classes.value} variant="caption">
        {value}
      </Typography>
    </div>
  );
};

export default RoomInfoField;
