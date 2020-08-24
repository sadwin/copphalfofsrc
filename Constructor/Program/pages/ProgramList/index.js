import React, {useEffect} from 'react';
import Breadcrumbs from "../../../../ui/Breadcrumbs";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ProgramTable from "../../components/ProgramTable";

const items = [
  {
    label: "Конструктор КиОП",
    link: "/work/app/constructor"
  },
  {
    label: "Конструктор образовательных программ",
    link: "#"
  },
];

const ProgramList = () => {
  return (
    <div>
      <Breadcrumbs items={items} />
      <ProgramTable/>
    </div>
  );
};

export default ProgramList;
