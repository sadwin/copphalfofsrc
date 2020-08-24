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
    label: "Организации",
    link: "#"
  },
];

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const ResourcesOrg = ({
  history,
}) => {

  const classes = useStyles();

  const handleClick = (link) => {
    history.push(link);
  }

const orgdata = {'content': 'База организаций','counters': [{'title': 'Всего', 'count': '0'}, {'title':'Подрядчики', 'count':'0'}, {'title':'ЦОПП', 'count':'0'}]}
const requestdata = {'content': 'Заявки','counters': [{'title': 'Всего', 'count': '0'}, {'title':'Новые', 'count':'0'}, {'title':'Отклонено', 'count':'0'}]}

  return (
    <div>
      <Breadcrumbs items={items} />
      <div className={classes.root}>
        <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={orgdata}
            onClick={handleClick}
            goTo={'/work/app/organization'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={requestdata}
            onClick={handleClick}
            goTo={'/work/app/manage/resources/org/requests'}
          />
        </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default (withRouter(ResourcesOrg));
