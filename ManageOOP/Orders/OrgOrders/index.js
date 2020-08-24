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
    label: "Заказы",
    link: "/work/app/manage/orders"
  },
  {
    label: "Заказы организаций",
    link: "#"
  }
];

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const OrgOrders = ({
  history,
}) => {

const classes = useStyles();

const handleClick = (link) => {
  history.push(link);
}

const inboxdata = {'content': 'Мои входящие заказы','counters': [{'title': 'Всего', 'count': '0'}, {'title':'Принято', 'count':'0'}, {'title':'Отклонено', 'count':'0'}]}
const outboxdata = {'content': 'Мои исходящие заказы','counters': [{'title': 'Всего', 'count': '0'}, {'title':'Принято', 'count':'0'}, {'title':'Отклонено', 'count':'0'}]}

  return (
    <div>
      <Breadcrumbs items={items} />
      <div className={classes.root}>
        <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
          <Grid item xs={4} lg={3}>
          <CountersCard
            data={inboxdata}
            onClick={handleClick}
            goTo={'/work/app/manage/orders/orgorders/myinbox'}
          />
          </Grid>
          <Grid item xs={4} lg={3}>
          <CountersCard
            data={outboxdata}
            onClick={handleClick}
            goTo={'/work/app/manage/orders/orgorders/myoutbox'}
          />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default (withRouter(OrgOrders));
