import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "../Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { closeConfirmationDialog } from "../uiModule";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    minWidth: 360
  },
  typography: {
    fontSize: "12px",
    color: "#778899"
  },
  closeButton: {
    position: "absolute",
    right: 4,
    top: 4,
    color: theme.palette.grey[500]
  },
  dialog: {
    width: "424px",
    height: "210px"
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

const ConfirmationDialog = props => {
  const { options, opened, dispatch } = props;
  const {
    title = "Подтверждение",
    message,
    action,
    confirmLabel = "Да",
    cancelLabel = "Нет"
  } = options;

  function handleConfirm() {
    dispatch(closeConfirmationDialog());
    dispatch(action);
  }

  function handleClose() {
    dispatch(closeConfirmationDialog());
  }

  return (
    <div>
      <Dialog
        aria-labelledby="customized-dialog-title"
        open={opened}
        PaperProps={
          {
            // className: classes.dialog
          }
        }
      >
        <DialogTitle onClose={handleClose}>{title}</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>{message}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{cancelLabel}</Button>
          <Button onClick={handleConfirm} color="pink">
            {confirmLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => ({
  options: state.ui.confirmOptions,
  opened: state.ui.opened
});

export default withStyles(styles)(connect(mapStateToProps)(ConfirmationDialog));
