import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CountersCard from '../../../ui/CountersCard';
import Breadcrumbs from "../../../ui/Breadcrumbs";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const items = [
  {
    label: "Управление ООП",
    link: "#"
  },
  {
    label: "Ресурсы",
    link: "/work/app/manage/resources"
  },
  {
    label: "Справочник компетенций и ФГОС",
    link: "#"
  }
];

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const DictCompetFGOS = ({
  history,
}) => {

const classes = useStyles();

const handleClick = (link) => {
  history.push(link);
}

const skillCounter = {'content': 'Справочник компетенций','counters': [{'title': 'Всего', 'count': '0'}, {'title':'WorldSkills', 'count':'0'}, {'title':'ЦОПП', 'count':'0'}]}
const specCounter = {'content': 'Справочник профессий и специальностей','counters': [{'title': 'Всего', 'count': '0'}, {'title':'Опубликовано', 'count':'0'}, {'title':'Экспертиза', 'count':'0'}]}

  return (
    <div>
      <Breadcrumbs items={items} />
      <div className={classes.root}>
        <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={skillCounter}
            onClick={handleClick}
            goTo={'/work/app/dict/skills/skill'}
          />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={specCounter}
            onClick={handleClick}
            goTo={'/work/app/dict/skills/speciality'}
          />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default (withRouter(DictCompetFGOS));
