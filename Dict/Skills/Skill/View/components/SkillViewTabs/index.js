import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SkillViewDesc from './components/SkillViewDesc';
import SkillViewQualification from './components/SkillViewQualification';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      variant={{width: '300px'}}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: '264px',
  },
  tab: {
    textAlign: 'left',
    fontSize: '14px',
    lineHeight: '18px',
    color: '#596E79',

    "& .MuiTab-wrapper": {
      textTransform: 'initial',
      alignItems: 'flex-start',
    },
    "&.Mui-selected": {
      background: '#F2F2F2',
    }
  },
  elem: {
    width: '800px'
  }
}));

const SkillViewTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab className={classes.tab} label="Паспорт" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Описание" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Квалификационные требования" {...a11yProps(2)} />
          <Tab className={classes.tab} label="Инфраструктурный лист" {...a11yProps(3)} />
          <Tab className={classes.tab} label="Требования к организации рабочего места и технике безопасности" {...a11yProps(4)} />
          <Tab className={classes.tab} label="Требования к квалификации педагогического состава" {...a11yProps(5)} />
          <Tab className={classes.tab} label="Оценивание" {...a11yProps(6)} />
      </Tabs>


      <TabPanel className={classes.elem} value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel className={classes.elem} value={value} index={1}>
          <SkillViewDesc />
      </TabPanel>
      <TabPanel className={classes.elem} value={value} index={2}>
          <SkillViewQualification />  
      </TabPanel>
      <TabPanel className={classes.elem} value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel className={classes.elem} value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel className={classes.elem} value={value} index={5}>
        Item Six kj kjjkbjkbkjbkjbkjbkjbkjbjkbjkbjkbk
      </TabPanel>
      <TabPanel className={classes.elem} value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}

export default SkillViewTabs;