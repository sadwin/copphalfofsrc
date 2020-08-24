import React, {useEffect} from 'react';
import Breadcrumbs from "../../../../../../ui/Breadcrumbs";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PageUnderConstruction from '../../../../../../PageUnderConstruction';
import OrgRequestTable from "../../components/OrgRequestTable";

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
    link: "/work/app/manage/resources/org"
  },
  {
    label: "Заявки органиазаций",
    link: "#"
  },
];

const OrgRequestList = () => {
  return (
    <div>
      <Breadcrumbs items={items} />
      <OrgRequestTable/>
    </div>
  );
};

export default OrgRequestList;
