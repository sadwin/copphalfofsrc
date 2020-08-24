import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { getSkillCardAction } from "../../store/actions";
import SkillInfoField from "./components/SkillInfoField";
import SkillImage from "./components/SkillImage";
import SkillInfoBox from './components/SkillInfoBox';
import { Typography } from "@material-ui/core";
import Button from "../../../../../ui/Button";
import Progress from "../../../../../ui/Progress";

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
    marginBottom: 70,
    display: "flex",
    justifyContent: "space-between",
    fontWeight: '600',
    lineHeight: '15px',
    width: '240px',

    "& button": {
      fontSize: '12px',
      minWidth: 0,
      width: '110px'
    }
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
    marginTop: 65,
    scrollbarWidth: 'none',
    overflowY: 'scroll',
      "&::-webkit-scrollbar": {
        display: 'none',
      },
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
  },
  statusBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
  },
  typeName: {
    backgroundColor: 'rgba(0, 0, 143, 0.75)',
    color: '#ffffff',
    borderRadius: '10px',
    padding: '2px 10px',
    fontSize: '10px',
    lineHeight: '16px',
  },
  statusName: {
    color: '#ffffff',
    borderRadius: '10px',
    padding: '2px 10px',
    fontSize: '10px',
    lineHeight: '16px',
  },

  colorDevelopment: {
    backgroundColor: 'rgba(119, 136, 153, 0.7)',
  },
  colorExpertize: {
    backgroundColor: 'rgba(0, 127, 189, 0.7)',
  },
  colorApproved: {
    backgroundColor: 'rgba(255, 149, 0, 0.7)',
  },
  colorPublished: {
    backgroundColor: 'rgba(133, 196, 70, 0.8)',
  }
}));

const SkillInfoDrawer = ({
  open,
  getSkillCard,
  skillId,
  skillCard,
  history,
  hideLink
}) => {
  const classes = useStyles();
  const [card, setCard] = React.useState(null);

  React.useEffect(() => {
    if (skillId !== -1) {
      setCard(null);
      getSkillCard(skillId);
    }
  }, [skillId]);

  React.useEffect(() => {
    setCard(skillCard);
  }, [skillCard]);

  const onMoreClick = () => {
    history.push(`/work/app/dict/skills/skill/${card.id}`);
  };

  const onEditClick = () => {
    history.push(`/work/app/dict/skills/skill/edit/${card.id}`);
  }

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
          <SkillImage image={card.avatar || ''} />
          <div className={classes.cardTitle}>
            <Typography className={classes.typo} align="center">
              {card.name}
            </Typography>
            <div className={classes.statusBlock}>
                <div className={classes.typeName}>
                    {`${card.code} | ${card.typeName} `}
                </div>
                <div className={classes.statusName}
                     style={{backgroundColor: 'rgba(119, 136, 153, 0.7)'}}>
                    {card.statusName || 'В разработке'}
                </div>
            </div>
          </div>
         
            <SkillInfoField name="Блок:">
                {card.categoryName || 'gagas'}
            </SkillInfoField>
            <SkillInfoField name="Источник:">
                {card.sourceTypeName || 'gagas'}
            </SkillInfoField>
          <div className={classes.map}>
            <SkillInfoBox title={'Организация'} image={card.orgLogo} desc={card.orgName} />
            {card.authors && card.authors.map((one, index) => {
              return <SkillInfoBox
                        key={`item${index}`}
                        title={'Составители'}
                        image={one.avatar}
                        name={one.name}
                        desc={one.orgName} 
                      />
            })}
            <SkillInfoBox title={'Эксперт'} image={card.expertAvatar}
                          name={card.expertName} desc={card.expertOrgName} />
          </div>
          <div className={classes.more}>
            <Button onClick={onMoreClick}>ПОДРОБНЕЕ</Button>
            <Button onClick={onEditClick}>КОНСТРУКТОР</Button>
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
  skillCard: state.skill.skillCard
});

const mapDispatchToProps = dispatch => ({
  getSkillCard: id => dispatch(getSkillCardAction(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SkillInfoDrawer));
