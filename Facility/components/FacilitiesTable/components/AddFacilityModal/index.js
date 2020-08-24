import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "../../../../../ui/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import FacilityInfoForm from "../../../FacilityInfoForm";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { createFacility } from "../../../../store/actions";

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
    width: "476px"
  },
  checkbox: {
    "& > .MuiCheckbox-colorPrimary.Mui-checked": {
      color: "rgba(0, 127, 189, 0.7);"
    }
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

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: "16px",
    "& > button:first-of-type": {
      marginRight: 4
    }
  }
}))(MuiDialogActions);

const AddFacilityModal = ({
  open,
  handleClose,
  createFacility,
  isCreatingFacility,
  createdFacility,
  classes,
  history
}) => {
  const [formData, updateFormData] = React.useState(null);
  const [checked, setChecked] = React.useState(false);

  const onConfirm = () => {
    createFacility(formData);
  };

  const onClose = () => {
    updateFormData(null);
    handleClose();
  };

  React.useEffect(() => {
    if (createdFacility && createdFacility.success) {
      updateFormData(null);
      handleClose();

      if (checked) {
        history.push(`/work/app/facilities/${createdFacility.id}`);
      }
    }
  }, [createdFacility]);

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
        <DialogTitle onClose={onClose}>Новый адрес</DialogTitle>
        <DialogContent>
          <FacilityInfoForm
            onFormChange={updateFormData}
            disabled={isCreatingFacility}
          />
        </DialogContent>
        <DialogActions>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                value="checked"
                color="primary"
              />
            }
            label="Открыть форму для редактирования"
            classes={{
              label: classes.label,
              root: classes.checkbox
            }}
          />
          <Button onClick={handleClose}>Отмена</Button>
          <Button
            loading={isCreatingFacility}
            disabled={isCreatingFacility}
            onClick={() => onConfirm()}
            color="green"
          >
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => ({
  isCreatingFacility: state.facilities.isCreatingFacility,
  createdFacility: state.facilities.createdFacility
});

const mapDispatchToProps = dispatch => ({
  createFacility: data => dispatch(createFacility(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withRouter(AddFacilityModal)));
