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
    label: "Ресурсы",
    link: "/work/app/manage/resources"
  },
  {
    label: "Материально-технические ресурсы",
    link: "/work/app/manage/resources/mattech"
  },
  {
    label: "Номенклатура",
    link: "#"
  },
];

const Nomenclature = () => {
  return (
    <div>
      <Breadcrumbs items={items} />
      <PageUnderConstruction/>
    </div>
  );
};

export default Nomenclature;
