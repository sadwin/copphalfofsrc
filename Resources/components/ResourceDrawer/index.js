import React from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import RoomInfoField from "./components/RoomInfoField";
import FacilityImage from "./components/FacilityImage";
import { Typography } from "@material-ui/core";
import Button from "../../../ui/Button";
import Progress from "../../../ui/Progress";
import useResourceCard from "./useResourceCard";
import Chips from "./components/Chips";

const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  },
  demo: {
    marginTop: 16,
    display: "flex",
    "& img": {
      paddingRight: 10
    }
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
    marginBottom: 90,
    display: "flex",
    justifyContent: "center"
  },
  cardTitle: {
    padding: "16px 0",
    borderBottom: "1px dashed #CACCD1",
    "& > div + div": {
      marginTop: 16
    }
  },
  cardTitleCenter: {
    padding: "16px 0",
    borderBottom: "1px dashed #CACCD1",
    textAlign: "center",
    "& > div + div": {
      marginTop: 16
    }
  },
  resourceType: {
    fontSize: 12,
    lineHeight: "16px",
    textAlign: "center",
    color: "#00334E"
  },
  font: {
    fontSize: 12,
    lineHeight: "16px",
    color: "#000000",
    marginTop: 8
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

const ResourceDrawer = ({ open, resourceId, history, hideLink }) => {
  const classes = useStyles();
  const { getResourceCard, resourceCard, resetCard } = useResourceCard();
  const { card, specialities, worldSkills } = resourceCard;

  React.useEffect(() => {
    resetCard();
    if (resourceId !== -1) {
      getResourceCard(resourceId);
    }
  }, [resourceId]);

  const onLinkClick = () => {
    history.push(`/work/app/resources/${card.id}`);
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
            <Typography className={classes.resourceType} align="center">
              {card.resourceTypeName}
            </Typography>
          </div>
          <div className={classes.cardTitle}>
            <RoomInfoField
              field="Количество:"
              value={`${card.count} ${card.unitName}`}
              noMargin
              useBadge
            />
            <RoomInfoField field="Производитель:" value={card.manufacture} />
            <RoomInfoField field="Модель:" value={card.model} />
          </div>
          <div className={classes.cardTitle}>
            <Typography variant="caption" color="textSecondary">
              Расположение
            </Typography>
            <Typography className={classes.font}>
              {`${card.orgName}, ${card.buildingName}`}
            </Typography>
            <Typography className={classes.font}>{card.roomName}</Typography>
          </div>
          {(specialities.length > 0 || worldSkills.length > 0) && (
            <div className={classes.cardTitle}>
              <Typography variant="caption" color="textSecondary">
                Профессии и компетенции
              </Typography>
              <Chips specialities={specialities} worldSkills={worldSkills} />
            </div>
          )}
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

export default withRouter(ResourceDrawer);
