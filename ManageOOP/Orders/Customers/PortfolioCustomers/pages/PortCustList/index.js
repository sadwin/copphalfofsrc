import React, {useEffect} from 'react';
import Breadcrumbs from "../../../../../../ui/Breadcrumbs";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PortCustTable from "../../components/PortCustTable";

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
    link: "/work/app/manage/orders/customers"
  },
  {
    label: "Портфолио заказчиков",
    link: "#"
  }
];

const PortCustList = () => {
  return (
    <div>
      <Breadcrumbs items={items} />
      <PortCustTable/>
    </div>
  );
};

export default PortCustList;
