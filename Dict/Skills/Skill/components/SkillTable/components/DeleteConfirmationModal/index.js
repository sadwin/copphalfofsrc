import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "../../../../../../../ui/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

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
    width: "424px",
    height: "230px"
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
    padding: '16px',
    "& > button:first-of-type": {
        marginRight: 4
    }
  }
}))(MuiDialogActions);

const DeleteConfirmationModal = ({ open, handleClose, onConfirm, classes }) => {
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          className: classes.dialog
        }}
      >
        <DialogTitle onClose={handleClose}>Подтверждение</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>Удалить выбранные компетенции?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Отмена
          </Button>
          <Button onClick={() => handleClose() || onConfirm()} color="pink">
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(DeleteConfirmationModal);
