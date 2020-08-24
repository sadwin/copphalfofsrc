import React, {useEffect} from 'react';
import Breadcrumbs from "../../../../ui/Breadcrumbs";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PageUnderConstruction from '../../../../PageUnderConstruction';

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
    link: "/work/app/manage/orders/orgorders"
  },
  {
    label: "Мои исходящие заказы",
    link: "#"
  }
];

const MyOutboxOrders = () => {
  return (
    <div>
      <Breadcrumbs items={items} />
      <PageUnderConstruction/>
    </div>
  );
};

export default MyOutboxOrders;
