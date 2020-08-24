import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CachedIcon from "@material-ui/icons/Cached";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Box from "../../../../../ui/Box";
import SquareButton from "../../../../../ui/SquareButton";
import Button from "../../../../../ui/Button";
import FacilityActions from "../../../../components/FacilityActions";

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
  reloadFacility,
  returnBack,
  updateFacility,
  isUpdatingFacility,
  openDeleteModal,
  disabled
}) => {
  const classes = useStyles();

  const actions = [
    {
      label: "Удалить адрес",
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
          <SquareButton onClick={reloadFacility}>
            <CachedIcon fontSize="small" />
          </SquareButton>
        </div>
        <div className={classes.topBarRight}>
          <Button
            onClick={updateFacility}
            disabled={disabled}
            loading={isUpdatingFacility}
            color="green"
          >
            Сохранить
          </Button>
          <FacilityActions actions={actions} />
        </div>
      </div>
    </Box>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopBar));
