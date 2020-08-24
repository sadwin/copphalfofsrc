import React from "react";
// import Popup from "devextreme-react/popup";
import AddPersonForm from "./AddPersonForm";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
    dialogPaper: {
        minWidth: 750
    },
    dialogTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

export function AddPersonDialog(props) {
    const { visible, onHiding } = props;
    const classes = useStyles();
    return (
        <Dialog
            open={visible}
            onClose={onHiding}
            aria-labelledby="form-dialog-title"
            disableBackdropClick
            scroll="body"
            classes={{ paper: classes.dialogPaper }}
        >
            <DialogTitle
                id="form-dialog-title"
                disableTypography
                className={classes.dialogTitle}
            >
                <div>Добавить сотрудника</div>
                <IconButton onClick={onHiding} size="small">
                    <CloseIcon fontSize="small" />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <AddPersonForm onSubmit={onHiding} onCancel={onHiding} />
            </DialogContent>
        </Dialog>
    );
}
