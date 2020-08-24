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
    label: "Заказы",
    link: "#"
  }
];

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const ManageOrders = ({
  history,
}) => {

const classes = useStyles();

const handleClick = (link) => {
  history.push(link);
}

const coppordersdata = {'content': 'База заказов ЦОПП','counters': [{'title': 'Всего', 'count': '0'}, {'title':'Обучение', 'count':'0'}, {'title':'Разработка', 'count':'0'}]}
const ordersdata = {'content': 'Заказы организаций','counters': [{'title': 'Всего', 'count': '0'}, {'title':'Входящие', 'count':'0'}, {'title':'Исходящие', 'count':'0'}]}
const podryaddata = {'content': 'Подрядчики и заказчики','counters': [{'title': 'Всего', 'count': '0'}, {'title':'Подрядчики', 'count':'0'}, {'title':'Заказчики', 'count':'0'}]}

  return (
    <div>
      <Breadcrumbs items={items} />
      <div className={classes.root}>
        <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={coppordersdata}
            onClick={handleClick}
            goTo={'/work/app/manage/orders/copporders'}
          />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={ordersdata}
            onClick={handleClick}
            goTo={'/work/app/manage/orders/orgorders'}
          />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CountersCard
              data={podryaddata}
              onClick={handleClick}
              goTo={'/work/app/manage/orders/customers'}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default (withRouter(ManageOrders));
