import React from "react";
// import Popup from "devextreme-react/popup";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import AddReferenceForm from "./AddReferenceForm";

export default function AddReferenceDialog(props) {
    const { visible, onHiding, handleSubmit } = props;

    return (
        <Dialog
            open={visible}
            onClose={onHiding}
            aria-labelledby="form-dialog-title"
            disableBackdropClick
            scroll="body"
            className="dialog-add"
        >
            <DialogTitle
                id="form-dialog-title"
                disableTypography
                className="dialog-add__title"
            >
                Добавить ресурс
                <IconButton onClick={onHiding} size="small">
                    <CloseIcon fontSize="small" />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <AddReferenceForm handleSubmit={handleSubmit} close={onHiding} />
            </DialogContent>
        </Dialog>
    );
}
