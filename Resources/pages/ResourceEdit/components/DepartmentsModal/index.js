import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "../../../../../ui/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import MuiTreeView from "@material-ui/lab/TreeView";
import MuiTreeItem from "@material-ui/lab/TreeItem";

import { editDepartments, getDepartments } from "../../../../store/actions";
import { loadDepartments } from "../../../../../Organization/View/fetch";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  typography: {
    color: "#778899"
  },
  closeButton: {
    position: "absolute",
    right: 4,
    top: 4,
    color: theme.palette.grey[500]
  },
  dialog: {
    width: "360px",
    boxSizing: "border-box"
  },
  label: {
    fontSize: 10
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography className={classes.typography}>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, 0.12)"
  }
}))(MuiDialogContent);

const DialogActions = withStyles(() => ({
  root: {
    margin: 0,
    padding: "16px",
    "& > button:first-of-type": {
      marginRight: 4
    }
  }
}))(MuiDialogActions);

const TreeView = withStyles(() => ({
  root: {
    borderColor: "#CACCD1",
    borderWidth: "1px 1px 0px 1px",
    borderStyle: "solid"
  }
}))(MuiTreeView);

const useTreeItemStyles = makeStyles(theme => ({
  root: {
    boxSizing: "border-box",
    padding: "0 18px",
    borderBottom: "1px solid #CACCD1",
    "& .MuiTreeItem-content:hover": {
      backgroundColor: "transparent"
    }
  },
  labelRoot: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  checkbox: {
    "&.Mui-checked": {
      color: "rgba(0, 127, 189, 0.7);"
    }
  }
}));

const TreeItem = ({ labelText, onChange, index, checked, ...rest }) => {
  const classes = useTreeItemStyles();

  return (
    <MuiTreeItem
      label={
        <div className={classes.labelRoot}>
          <Typography variant="body2">{labelText}</Typography>
          <Checkbox
            className={classes.checkbox}
            onChange={(_, val) => onChange(index, val)}
            checked={checked}
            value="checked"
            color="primary"
          />
        </div>
      }
      classes={{
        root: classes.root
      }}
      {...rest}
    />
  );
};

const DepartmentsModal = ({
  open,
  handleClose,
  classes,
  history,
  fullInfo,
  loadDepartments,
  loadFacilityDepartments,
  editDepartments,
  departments,
  selectedDepartments
}) => {
  const [deps, setDeps] = React.useState([]);
  const onConfirm = () => {
    editDepartments(fullInfo.info.id, deps);
    loadFacilityDepartments(fullInfo.info.id);
    onClose();
  };

  const onClose = () => {
    handleClose();
  };

  React.useEffect(() => {
    loadDepartments(fullInfo.info.orgId);
  }, []);

  const availableDeps = departments[fullInfo.info.orgId];

  React.useEffect(() => {
    if (availableDeps && selectedDepartments) {
      const checkedDeps = availableDeps.map(dep => ({
        ...dep,
        checked: selectedDepartments.some(({ id }) => id === dep.id)
      }));
      setDeps(checkedDeps);
    }
  }, [availableDeps, selectedDepartments]);

  const onCheck = (index, checked) => {
    const newDeps = [...deps];
    newDeps[index].checked = checked ? true : false;
    setDeps(newDeps);
  };

  return (
    <div>
      <Dialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          className: classes.dialog
        }}
      >
        <DialogTitle onClose={onClose}>Подразделения в здании</DialogTitle>
        <DialogContent>
          <TreeView
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
          >
            {deps &&
              deps.map(({ id, name, checked }, index) => (
                <TreeItem
                  key={id}
                  nodeId={id.toString()}
                  checked={checked}
                  labelText={name}
                  onChange={onCheck}
                  index={index}
                />
              ))}
          </TreeView>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={() => onConfirm()} color="green">
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => ({
  fullInfo: state.facilities.facilityFullInfo,
  departments: state.organizationView.orgDepartmentsMap,
  selectedDepartments: state.facilities.departments
});

const mapDispatchToProps = dispatch => ({
  loadDepartments: id => dispatch(loadDepartments(id)),
  loadFacilityDepartments: id => dispatch(getDepartments(id)),
  editDepartments: (id, deps) => dispatch(editDepartments(id, deps))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withRouter(DepartmentsModal)));
