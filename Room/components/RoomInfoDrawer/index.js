import React from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import RoomInfoField from "./components/RoomInfoField";
import FacilityImage from "./components/FacilityImage";
import { Typography } from "@material-ui/core";
import Button from "../../../ui/Button";
import Progress from "../../../ui/Progress";
import useRoomCard from "./useRoomCard";
import Appointments from "./components/Appointments";
import Availability from "./components/Availability";
import skills from "./worldskills_demo.png";

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
    display: "flex",
    justifyContent: "center"
  },
  cardTitle: {
    padding: "16px 0",
    borderBottom: "1px dashed #CACCD1",
    "& > div + div": {
      marginTop: 16,
    }
  },
  cardTitleCenter: {
    padding: "16px 0",
    borderBottom: "1px dashed #CACCD1",
    textAlign: "center",
    "& > div + div": {
      marginTop: 16,
    }
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

const RoomInfoDrawer = ({ open, roomId, history, hideLink }) => {
  const classes = useStyles();
  const { roomCard, getRoomCard } = useRoomCard();

  React.useEffect(() => {
    if (roomId !== -1) {
      getRoomCard(roomId);
    }
  }, [roomId]);

  const onLinkClick = () => {
    history.push(`/work/app/rooms/${roomCard.id}`);
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
      {roomCard ? (
        <div>
          <FacilityImage images={roomCard.photos || []} />
          <div className={classes.cardTitle}>
            <Typography className={classes.typo} align="center">
              {roomCard.name}
            </Typography>
            <Availability appointments={roomCard.appointments} />
          </div>
          <div className={classes.cardTitle}>
            <RoomInfoField field="Адрес:" value={roomCard.address} noMargin />
            <RoomInfoField field="Площадь:" value={roomCard.area} />
            <RoomInfoField field="Вместимость:" value={roomCard.capacity} />
          </div>
          {roomCard.appointments && roomCard.appointments.length > 0 && (
            <div className={classes.cardTitle}>
              <Typography variant="caption" color="textSecondary">
                Ближайшие мероприятия:
              </Typography>
              <Appointments appointments={roomCard.appointments} />
            </div>
          )}
          <div className={classes.cardTitleCenter}>
            <Typography variant="caption" color="textSecondary">
              Информация о доступности помещения отсутствует
            </Typography>
          </div>
          {roomCard.demo && (
            <div className={classes.demo}>
              <img src={skills} alt="worldSkills" />
              <Typography variant="body1" component="span">
                Оборудовано для проведения демо-экзамена
              </Typography>
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

export default withRouter(RoomInfoDrawer);
