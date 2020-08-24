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
    label: "Образовательные программы и модули",
    link: "/work/app/manage/resources/programs"
  },
  {
    label: "Управление экспертизой и публикацией",
    link: "#"
  },
];

const ManageExpertise = () => {
  return (
    <div>
      <Breadcrumbs items={items} />
      <PageUnderConstruction/>
    </div>
  );
};

export default ManageExpertise;
