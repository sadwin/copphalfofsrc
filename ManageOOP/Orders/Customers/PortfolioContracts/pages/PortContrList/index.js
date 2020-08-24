import React, {useEffect} from 'react';
import Breadcrumbs from "../../../../../../ui/Breadcrumbs";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PortContrTable from "../../components/PortContrTable";

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
    label: "Портфолио подрядчиков",
    link: "#"
  }
];

const PortContrList = () => {
  return (
    <div>
      <Breadcrumbs items={items} />
      <PortContrTable/>
    </div>
  );
};

export default PortContrList;
