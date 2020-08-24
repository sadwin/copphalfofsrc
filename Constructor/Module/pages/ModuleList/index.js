import React, {useEffect} from 'react';
import Breadcrumbs from "../../../../ui/Breadcrumbs";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ModuleTable from "../../components/ModuleTable";

const items = [
  {
    label: "Конструктор КиОП",
    link: "/work/app/constructor"
  },
  {
    label: "Конструктор модулей",
    link: "#"
  },
];

const ModuleList = () => {
  return (
    <div>
      <Breadcrumbs items={items} />
      <ModuleTable/>
    </div>
  );
};

export default ModuleList;
