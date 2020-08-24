import React, {useEffect} from 'react';
import Breadcrumbs from "../../../../ui/Breadcrumbs";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PageUnderConstruction from '../../../../PageUnderConstruction';
import ExpertiseTable from "../../components/ExpertiseTable";

const items = [
  {
    label: "Конструктор КиОП",
    link: "/work/app/constructor"
  },
  {
    label: "Экспертиза",
    link: "#"
  },
];

const ExpertiseList = () => {
  return (
    <div>
      <Breadcrumbs items={items} />
      <ExpertiseTable/>
    </div>
  );
};

export default ExpertiseList;
