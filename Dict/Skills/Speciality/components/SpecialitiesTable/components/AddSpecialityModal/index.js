import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "../../../../../../../ui/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import SpecialityInfoForm from "../SpecialityInfoForm";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { addSpecialitiesAction } from "../../../../store/actions";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  typography: {
    fontSize: "14px",
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
  label: {
    fontSize: 12
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

const AddSpecialityModal = ({
  open,
  handleClose,
  createSpeciality,
  isAddingSpeciality,
  addedSpeciality,
  classes
}) => {
  const [formData, updateFormData] = React.useState(null);

  const onConfirm = () => {
    createSpeciality(formData);
  };

  const onClose = () => {
    updateFormData(null);
    handleClose();
  };

  React.useEffect(() => {
    if (addedSpeciality && addedSpeciality.success) {
      updateFormData(null);
      handleClose();
    }
  }, [addedSpeciality]);

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
        <DialogTitle onClose={onClose}>Добавить профессию/специальность</DialogTitle>
        <DialogContent>
          <SpecialityInfoForm
            onFormChange={updateFormData}
            disabled={isAddingSpeciality}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button
            loading={isAddingSpeciality}
            disabled={isAddingSpeciality}
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
  isAddingSpeciality: state.specialities.isDeletingSpecialities,
  addedSpeciality: state.specialities.addedSpecialities
});

const mapDispatchToProps = dispatch => ({
  createSpeciality: data => dispatch(addSpecialitiesAction(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AddSpecialityModal));
