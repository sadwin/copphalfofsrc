import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #CACCD1",
    boxSizing: "border-box",
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.1)",
    minHeight: 104,
    width: "100%"
  },
  name: {
    flexGrow: 1,
    textAlign: "center",
    padding: 4
  },
  code: {
    background: "#778899",
    color: "#FFF",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "16px",
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const SpecialitiesCards = ({ specialities }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      {[
        {
          id: 1,
          code: "1.01.01",
          name: "Гидрология",
          deleted: false
        },
        {
          id: 2,
          code: "1.01.01",
          name: "Гидрология",
          deleted: false
        },
        {
          id: 3,
          code: "1.01.01",
          name: "Гидрология",
          deleted: false
        },
        {
          id: 4,
          code: "1.01.01",
          name: "Гидрология",
          deleted: false
        },
        {
          id: 5,
          code: "1.01.01",
          name: "Гидрология",
          deleted: false
        },
        {
          id: 6,
          code: "1.01.01",
          name: "Гидрология",
          deleted: false
        }
      ].map(({ code, name, id }) => (
        <Grid item xs={3}>
          <div key={id} className={classes.card}>
            <div className={classes.name}>{name}</div>
            <div className={classes.code}>{code}</div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default SpecialitiesCards;
