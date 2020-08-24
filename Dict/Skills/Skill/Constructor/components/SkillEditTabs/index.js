import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SkillEditDesc from './components/SkillEditDesc';
import SkillEditQualification from './components/SkillEditQualification';
import { changeSkill } from '../../../store/actions';
import SkillEditPassport from './components/SkillEditPassport';
import SkillEditWorkplace from './components/SkillEditWorkplace';
import SkillEditStaff from './components/SkillViewStaff';
import SkillEditGrading from './components/SkillEditGrading';
import SkillViewInfrastructure from './components/SkillViewInfrastructure';

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

const SkillEditTabs = ({skill, changeSkill}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const change = (field, value) => {
    console.log(field, value)
    let obj = {...skill};
    obj.data[field] = value;
    changeSkill(obj)
  }

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
          {skill.data && <SkillEditPassport skill={skill} change={change} />}  
      </TabPanel>
      <TabPanel className={classes.elem} value={value} index={1}>
          {skill.data && <SkillEditDesc desc={skill.data.description}  change={change} />}
      </TabPanel>
      <TabPanel className={classes.elem} value={value} index={2}>
          {skill.data && <SkillEditQualification id={skill.info.id} />}  
      </TabPanel>
      <TabPanel className={classes.elem} value={value} index={3}>
      {skill.data && <SkillViewInfrastructure id={skill.info.id} />}  
      </TabPanel>
      <TabPanel className={classes.elem} value={value} index={4}>
        {skill.data &&  <SkillEditWorkplace safety={skill.data.safety}
                            safetyFirst={skill.data.safetyFirst}
                            change={change} />
        }
      </TabPanel>
      <TabPanel className={classes.elem} value={value} index={5}>
        {skill.data &&
          <SkillEditStaff
              teacherLevel={skill.data.teacherLevel}
              teacherStage={skill.data.teacherStage}
              teacherProf={skill.data.teacherProf}
              teacherExtra={skill.data.teacherExtra}
              change={change}
          />
        }
      </TabPanel>
      <TabPanel className={classes.elem} value={value} index={6}>
          {skill.data && <SkillEditGrading id={skill.info.id} />}  
      </TabPanel>
    </div>
  );
}

const mapStateToProps = state => ({
    skill : state.skill.skill
})

const mapDispatchToProps = dispatch => ({
    changeSkill: (skill) =>  dispatch(changeSkill(skill))
})

export default connect(mapStateToProps, mapDispatchToProps)(SkillEditTabs);