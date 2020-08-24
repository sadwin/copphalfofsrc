import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 16
  },
  fieldValue: {
    marginTop: 8
  }
}));

const FacilityInfoField = ({ field, value }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="caption" color="textSecondary">
        {field}
      </Typography>
      <Typography className={classes.fieldValue} variant="body2">
        {value}
      </Typography>
    </div>
  );
};

export default FacilityInfoField;
