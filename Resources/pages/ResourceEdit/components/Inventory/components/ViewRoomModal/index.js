import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import AddRoomResourceForm from "../AddRoomResourceForm";
import api from "../../../../../../api/room";

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

const ViewRoomModal = ({
  open,
  handleClose,
  roomInfo,
  resourceId,
  classes
}) => {
  const [formData, updateFormData] = React.useState(null);

  const onClose = () => {
    handleClose();
  };

  useEffect(() => {
    if (resourceId) {
      api
        .getInventoryItem(resourceId)
        .then(({ data }) => updateFormData(data.data));
    }
  }, [resourceId]);

  return (
    formData && (
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
            <span>Карточка ресурса</span>
          </DialogTitle>
          <DialogContent>
            <AddRoomResourceForm
              roomInfo={roomInfo}
              onFormChange={() => {}}
              initialData={formData}
              disabled
            />
          </DialogContent>
        </Dialog>
      </div>
    )
  );
};

export default withStyles(styles)(withRouter(ViewRoomModal));
