import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CachedIcon from "@material-ui/icons/Cached";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Box from "../../../../../ui/Box";
import SquareButton from "../../../../../ui/SquareButton";
import Button from "../../../../../ui/Button";
import ActionsMenu from "../../../../../ui/ActionsMenu";

const useStyles = makeStyles(() => ({
  topBar: {
    display: "flex",
    justifyContent: "space-between"
  },
  topBarLeft: {
    display: "flex",
    "& > button": {
      marginRight: 12
    }
  },
  topBarRight: {
    display: "flex",
    "& > div": {
      marginLeft: 12
    }
  }
}));

const TopBar = ({
  reloadRoom,
  returnBack,
  updateRoom,
  isUpdatingRoom,
  openDeleteModal,
  disabled
}) => {
  const classes = useStyles();

  const actions = [
    {
      label: "Удалить помещение",
      onClick: openDeleteModal
    }
  ];

  return (
    <Box>
      <div className={classes.topBar}>
        <div className={classes.topBarLeft}>
          <SquareButton onClick={returnBack}>
            <ChevronLeftIcon fontSize="small" />
          </SquareButton>
          <SquareButton onClick={reloadRoom}>
            <CachedIcon fontSize="small" />
          </SquareButton>
        </div>
        <div className={classes.topBarRight}>
          <Button
            onClick={updateRoom}
            disabled={disabled}
            loading={isUpdatingRoom}
            color="green"
          >
            Сохранить
          </Button>
          <ActionsMenu actions={actions} />
        </div>
      </div>
    </Box>
  );
};

export default withRouter(TopBar);
