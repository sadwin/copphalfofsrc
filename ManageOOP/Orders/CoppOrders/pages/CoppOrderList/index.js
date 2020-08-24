import React, {useEffect} from 'react';
import Breadcrumbs from "../../../../../ui/Breadcrumbs";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PageUnderConstruction from '../../../../../PageUnderConstruction';
import CoppOrdersTable from "../../components/CoppOrdersTable";

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
    label: "База заказов ЦОПП",
    link: "#"
  }
];

const CoppOrderList = () => {
  return (
    <div>
      <Breadcrumbs items={items} />
      <CoppOrdersTable/>
    </div>
  );
};

export default CoppOrderList;
