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
    label: "Материально-технические ресурсы",
    link: "#"
  },
];

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const ResourcesMatTech = ({
  history,
}) => {

const classes = useStyles();

const handleClick = (link) => {
  history.push(link);
}

const addressdata = {'content': 'Мои адреса','counters': [{'title': 'Всего', 'count': '12'}]}
const builddata = {'content': 'Мои помещения и площадки','counters': [{'title': 'Всего', 'count': '1'}, {'title':'Помещения', 'count':'2'}, {'title':'WorldSkills', 'count':'3'}]}
const oboruddata = {'content': 'Моё оборудование, инструменты и ПО','counters': [{'title': 'Оборуд.', 'count': '1'}, {'title':'Инструменты', 'count':'2'}, {'title':'ПО', 'count':'3'}]}
const nomenkldata = {'content': 'Номенклатура материально-технических ресурсов','counters': [{'title': 'Всего', 'count': '50'}]}

  return (
    <div>
      <Breadcrumbs items={items} />
      <div className={classes.root}>
        <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={addressdata}
            onClick={handleClick}
            goTo={'/work/app/facilities'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={builddata}
            onClick={handleClick}
            goTo={'/work/app/rooms'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={oboruddata}
            onClick={handleClick}
            goTo={'/work/app/resources'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={nomenkldata}
            onClick={handleClick}
            goTo={'/work/app/manage/resources/mattech/nomanclature'}
          />
        </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default (withRouter(ResourcesMatTech));
