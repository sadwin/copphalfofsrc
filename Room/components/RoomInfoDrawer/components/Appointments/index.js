import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { format, isWithinInterval, parseISO } from "date-fns";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const useStyles = makeStyles(theme => ({
  root: {
      marginTop: 8
  },
  active: {
    boxSizing: "border-box",
    borderLeft: "5px solid #B51F29",
    paddingLeft: 6,
    color: "#000000"
  },
  inActive: {
    color: "rgba(0, 0, 0, 0.6)",
    boxSizing: "border-box",
    borderLeft: "5px solid #C4C4C4",
    paddingLeft: 6
  },
  time: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      marginRight: 6
    }
  },
  top: {
    marginBottom: 6,
    fontSize: 12,
    lineHeight: "16px"
  }
}));

const Appointments = ({ appointments }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {appointments.map(({ description, startDate, endDate }) => {
        const [start, end] = [startDate, endDate].map(parseISO);

        return (
          <div
            className={
              isWithinInterval(new Date(), {
                start,
                end
              })
                ? classes.active
                : classes.inActive
            }
          >
            <div className={classes.top}>{description}</div>
            <div className={classes.time}>
              <AccessTimeIcon fontSize="small" />
              <span>{format(start, "HH:mm")}</span>
              <ArrowForwardIcon fontSize="small" />
              <span>{format(end, "HH:mm")}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Appointments;
