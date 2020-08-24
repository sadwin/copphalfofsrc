import React from "react";
// import Popup from "devextreme-react/popup";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {Grid} from "@material-ui/core";
import Button from "../../ui/Button";

import './DialogStyles.css';

export default function DeleteSiteDialog({visible, onHiding, deleteAction}) {
  const actionClick = () => {
    deleteAction();
    onHiding();
  };

  return (
    <Dialog
      open={visible}
      onClose={onHiding}
      aria-labelledby="form-dialog-title"
      disableBackdropClick
      scroll="body"
      className="dialog-delete"
    >
      <DialogTitle
        id="form-dialog-title"
        disableTypography
        className="dialog-add__title"
      >
        Подтверждение
        <IconButton onClick={onHiding} size="small">
          <CloseIcon fontSize="small"/>
        </IconButton>
      </DialogTitle>
      <DialogContent style={{
        paddingLeft: '16px',
        paddingTop: '24px',
        fontSize: '14px'
      }} dividers>
        Удалить выбранные ресурсы?
        <Grid style={{marginTop: '38px'}} container justify="flex-end">
          <Grid item xs={5}>
            <Button onClick={onHiding}>
              Отмена
            </Button>
          </Grid>
          <Button color="pink" onClick={actionClick}>
            Удалить
          </Button>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
