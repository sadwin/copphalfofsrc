import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    margin: "0 8px"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
    marginRight: theme.spacing()
  },
  form: {
    flexGrow: 1,
    padding: `${theme.spacing(2)}px ${theme.spacing(9)}px 0 ${theme.spacing(
      2
    )}px`,
    backgroundColor: theme.palette.background.paper
  },
  label: {
    textTransform: "none",
    alignItems: "flex-start",
    textAlign: "left"
  },
  tabsContainer: {
    minWidth: "264px"
  },
  tabContent: {
    flexGrow: 1
  }
}));

export default function RoomEditTabs(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);

  const handleChange = (event, newValue) => {
    setPage(newValue);
  };

  const activePage = props.children[page];

  const tabClasses = { wrapper: classes.label, wrapped: classes.label };

  return (
    <div className={classes.root}>
      <div className={classes.tabsContainer}>
        <Tabs
          orientation="vertical"
          value={page}
          onChange={handleChange}
          classes={{ wrapper: classes.label, wrapped: classes.label }}
          className={classes.tabs}
          variant="standard"
        >
          <Tab
            label="Основная информация"
            {...a11yProps(0)}
            classes={tabClasses}
          />
          <Tab
            label="Инвентарная карточка"
            {...a11yProps(1)}
            classes={tabClasses}
          />
          <Tab label="Расписание" {...a11yProps(2)} classes={tabClasses} />
        </Tabs>
      </div>
      <div className={classes.tabContent}>{activePage}</div>
    </div>
  );
}
