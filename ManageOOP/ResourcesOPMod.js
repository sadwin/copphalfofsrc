import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CountersCard from '../ui/CountersCard';
import Breadcrumbs from "../ui/Breadcrumbs";
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
    label: "Образовательные программы и модули",
    link: "#"
  },
];

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const ResourcesOPMod = ({
  history,
}) => {

const classes = useStyles();

const handleClick = (link) => {
  history.push(link);
}

const myopdata = {'content': 'Мои программ и модули','counters': [{'title': 'Всего', 'count': '0'}, {'title':'Программы', 'count':'0'}, {'title':'Модули', 'count':'0'}]}
const expertdata = {'content': 'Управление экспертизой и публикацией','counters': [{'title': 'Всего', 'count': '0'}, {'title':'На экспертизе', 'count':'0'}, {'title':'Опубликовано', 'count':'0'}]}

  return (
    <div>
      <Breadcrumbs items={items} />
      <div className={classes.root}>
        <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={myopdata}
            onClick={handleClick}
            goTo={'/work/app/manage/resources/programs/myprograms'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={expertdata}
            onClick={handleClick}
            goTo={'/work/app/manage/resources/programs/expertise'}
          />
        </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default (withRouter(ResourcesOPMod));
