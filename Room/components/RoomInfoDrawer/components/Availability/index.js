import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { format, isWithinInterval, parseISO } from "date-fns";

const badge = {
  fontSize: "10px",
  lineHeight: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "uppercase",
  color: "#FFFFFF",
  borderRadius: "10px",
  padding: "4px 8px"
};

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 40
  },
  available: {
    ...badge,
    background: "rgba(133, 196, 70, 0.8)"
  },
  unavailable: {
    ...badge,
    background: "#B51F29"
  }
}));

const Availability = ({ appointments }) => {
  const classes = useStyles();

  const availability = appointments.every(({ startDate, endDate }) => {
    const [start, end] = [startDate, endDate].map(parseISO);

    return (
      isWithinInterval(new Date(), {
        start,
        end
      }) === false
    );
  });

  return (
    <div className={classes.root}>
      <div className={availability ? classes.available : classes.unavailable}>
        {availability ? "Свободно" : "Занято"}
      </div>
    </div>
  );
};

export default Availability;
