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
    label: "Подрядчики и заказчики",
    link: "#"
  }
];

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const OrdersCustomers = ({
  history,
}) => {

const classes = useStyles();

const handleClick = (link) => {
  history.push(link);
}

const customersdata = {'content': 'Портфолио заказчиков','counters': [{'title': 'Всего', 'count': '0'}, {'title':'Ожидающие заказ', 'count':'0'}]}
const contractdata = {'content': 'Портфолио подрядчиков','counters': [{'title': 'Всего', 'count': '0'}, {'title':'На исполнении', 'count':'0'}]}

  return (
    <div>
      <Breadcrumbs items={items} />
      <div className={classes.root}>
        <Grid container spacing={0} justify="flex-start" alignItems="flex-start">
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={customersdata}
            onClick={handleClick}
            goTo={'/work/app/manage/orders/customers/custlist'}
          />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <CountersCard
            data={contractdata}
            onClick={handleClick}
            goTo={'/work/app/manage/orders/customers/contracts'}
          />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default (withRouter(OrdersCustomers));
