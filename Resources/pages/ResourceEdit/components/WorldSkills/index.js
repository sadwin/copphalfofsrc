import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  },
  tag: {
    background: "#FFF",
    color: "#304967",
    border: "1px solid #DADADA",
    height: 20,
    marginRight: 8,
    "& svg.MuiChip-deleteIcon": {
      height: 18,
      width: 18,
      margin: 0
    }
  }
}));

const WorldSkills = ({ worldSkills }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {[
        {
          id: 1,
          cis: "40",
          typeName: "WSE",
          name: "Кулинария",
          deleted: false
        },
        {
          id: 2,
          cis: "40",
          typeName: "WSE",
          name: "Кулинария",
          deleted: false
        },
        {
          id: 3,
          cis: "40",
          typeName: "WSE",
          name: "Кулинария",
          deleted: false
        }
      ].map(({ cis, typeName, name }) => (
        <Chip classes={{ root: classes.tag }} size="small" label={`${cis} | ${typeName} | ${name}`} />
      ))}
    </div>
  );
};

export default WorldSkills;
