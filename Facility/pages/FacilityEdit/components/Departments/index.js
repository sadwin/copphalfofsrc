import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import SquareButton from "../../../../../ui/SquareButton";
import EditIcon from "@material-ui/icons/Edit";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { getDepartments } from "../../../../store/actions";
import Progress from "../../../../../ui/Progress";

const useStyles = makeStyles(() => ({
  topSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32
  },
  listItem: {
    boxSizing: "border-box",
    border: "1px solid #CACCD1",
    borderBottom: "none",
    "&:last-of-type": {
        borderBottom: "1px solid #CACCD1"
    }
  }
}));

const Departments = ({ id, departments, getDepartments, openModal }) => {
  const classes = useStyles();

  React.useEffect(() => {
    getDepartments(id);
  }, [id]);

  return departments ? (
    <div>
      <div className={classes.topSection}>
        <Typography>Подразделения в здании</Typography>
        <SquareButton onClick={openModal}>
          <EditIcon fontSize="small" />
        </SquareButton>
      </div>
      <div>
        <List>
          {departments.length > 0 ? (
            departments.map(({ id, name }) => (
              <ListItem className={classes.listItem} key={id}>
                <ListItemText primary={name} />
              </ListItem>
            ))
          ) : (
            <Typography variant="caption">Подразделений нет</Typography>
          )}
        </List>
      </div>
    </div>
  ) : (
    <Progress />
  );
};

const mapStateToProps = state => ({
  departments: state.facilities.departments
});

const mapDispatchToProps = dispatch => ({
  getDepartments: id => dispatch(getDepartments(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Departments));
