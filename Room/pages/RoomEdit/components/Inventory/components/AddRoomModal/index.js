import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import AddRoomResourceForm from "../AddRoomResourceForm";
import Button from "../../../../../../../ui/Button";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  blackSpan: {
    fontSize: "12px",
    lineHeight: "16px",
    color: "#000"
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
    width: "550px"
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

const AddRoomModal = ({
  open,
  handleClose,
  createInventoryItem,
  createdInventoryItem,
  roomInfo,
  isCreatingRoom,
  resourceId,
  createdRoom,
  classes
}) => {
  const [formData, updateFormData] = React.useState(null);

  const onConfirm = () => {
    createInventoryItem(formData);
  };

  const onClose = () => {
    updateFormData(null);
    handleClose();
  };

  useEffect(() => {
    if (createdInventoryItem && createdInventoryItem.success) {
      updateFormData(null);
      handleClose();
    }
  }, [createdInventoryItem]);

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
        <DialogTitle onClose={onClose}>
          <span>{`Добавить новый ресурс в `}</span>
          <span
            className={classes.blackSpan}
          >{`${roomInfo.data.name}, ${roomInfo.info.depName}, ${roomInfo.info.orgName}`}</span>
        </DialogTitle>
        <DialogContent>
          <AddRoomResourceForm
            roomInfo={roomInfo}
            onFormChange={updateFormData}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button
            loading={isCreatingRoom}
            disabled={isCreatingRoom}
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

export default withStyles(styles)(withRouter(AddRoomModal));
