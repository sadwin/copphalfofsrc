import React, {useEffect} from 'react';
import Breadcrumbs from "../ui/Breadcrumbs";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PageUnderConstruction from '../PageUnderConstruction';

const items = [
  {
    label: "Расписание ЦОПП региона",
    link: "#"
  },
];

const Schedule = () => {
  return (
    <div>
      <Breadcrumbs items={items} />
      <PageUnderConstruction/>
    </div>
  );
};

export default Schedule;
