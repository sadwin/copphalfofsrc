import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CountersCard from '../ui/CountersCard';
import Breadcrumbs from "../ui/Breadcrumbs";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const items = [
  {
    label: "Конструктор КиОП",
    link: "#"
  },
];

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Constructor = ({
  history,
}) => {

  const classes = useStyles();

  const handleClick = (link) => {
    history.push(link);
  }

const skilldata = {'content': 'Конструктор компетенций','counters': [{'title': 'Всего', 'count': '0'}, {'title':'Опубликовано', 'count':'0'}, {'title':'В работе', 'count':'0'}]}
const programdata = {'content': 'Конструктор образовательных программ','counters': [{'title': 'Всего', 'count': '0'}, {'title':'Опубликовано', 'count':'0'}, {'title':'В работе', 'count':'0'}]}
const moduledata = {'content': 'Конструктор модулей','counters': [{'title': 'Всего', 'count': '0'}, {'title':'Опубликовано', 'count':'0'}, {'title':'В работе', 'count':'0'}]}
const expertdata = {'content': 'Экспертиза','counters': [{'title': 'Всего', 'count': '0'}, {'title':'Утверждено', 'count':'0'}, {'title':'В работе', 'count':'0'}]}

  return (
    <div>
      <Breadcrumbs items={items} />
      <div className={classes.root}>
        <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CountersCard
              data={skilldata}
              onClick={handleClick}
              goTo={'/work/app/dict/skills/skill'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CountersCard
              data={programdata}
              onClick={handleClick}
              goTo={'/work/app/constructor/programs'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CountersCard
              data={moduledata}
              onClick={handleClick}
              goTo={'/work/app/constructor/modules'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CountersCard
              data={expertdata}
              onClick={handleClick}
              goTo={'/work/app/constructor/expertise'}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default (withRouter(Constructor));
