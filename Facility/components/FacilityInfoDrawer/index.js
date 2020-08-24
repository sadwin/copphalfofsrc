import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import { getFacility } from "../../store/actions";
import FacilityInfoField from "./components/FacilityInfoField";
import FacilityImage from "./components/FacilityImage";
import { Typography } from "@material-ui/core";
import Button from "../../../ui/Button";
import Progress from "../../../ui/Progress";
import MapComponent from "../Map";

const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  },
  typo: {
    fontSize: 16,
    lineHeight: "24px"
  },
  map: {
    marginTop: 10
  },
  more: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center"
  },
  cardTitle: {
    padding: "8px 0",
    borderBottom: "1px dashed #CACCD1"
  },
  progress: {
    display: "flex",
    justifyContent: "center"
  },
  drawerOpen: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 1000,
    [theme.breakpoints.down("md")]: {
      position: "fixed"
    }
  },
  drawerClosed: {
    width: 0
  },
  drawerPaper: {
    width: drawerWidth,
    boxSizing: "border-box",
    padding: 20,
    top: 65
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }
}));

const FacilityInfoDrawer = ({
  open,
  getFacility,
  facilityId,
  facilityCard,
  history,
  hideLink
}) => {
  const classes = useStyles();
  const [card, setCard] = React.useState(null);

  React.useEffect(() => {
    if (facilityId !== -1) {
      setCard(null);
      getFacility(facilityId);
    }
  }, [facilityId]);

  React.useEffect(() => {
    setCard(facilityCard);
  }, [facilityCard]);

  const onLinkClick = () => {
    history.push(`/work/app/facilities/${card.id}`);
  };

  return (
    <Drawer
      className={open ? classes.drawerOpen : classes.drawerClosed}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      {card ? (
        <div>
          <FacilityImage images={card.photos || []} />
          <div className={classes.cardTitle}>
            <Typography className={classes.typo} align="center">
              {card.name}
            </Typography>
            <Typography className={classes.typo} align="center">
              {card.orgName}
            </Typography>
          </div>
          <FacilityInfoField field="Назначение:" value={card.assign} />
          <FacilityInfoField field="Адрес:" value={card.address} />
          <div className={classes.map}>
            <MapComponent
              width={240}
              height={150}
              center={[card.latitude, card.longitude]}
              readOnly
            />
          </div>
          <div className={classes.more}>
            {!hideLink && <Button onClick={onLinkClick}>Подробнее</Button>}
          </div>
        </div>
      ) : (
        <div className={classes.progress}>
          <Progress />
        </div>
      )}
    </Drawer>
  );
};

const mapStateToProps = state => ({
  facilityCard: state.facilities.facilityCard
});

const mapDispatchToProps = dispatch => ({
  getFacility: id => dispatch(getFacility(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FacilityInfoDrawer));
