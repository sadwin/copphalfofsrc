import React, {useEffect} from 'react';
import Breadcrumbs from "../ui/Breadcrumbs";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PageUnderConstruction from '../PageUnderConstruction';

const items = [
  {
    label: "Каталог образовательных программ",
    link: "#"
  },
];

const Catalog = () => {
  return (
    <div>
      <Breadcrumbs items={items} />
      <PageUnderConstruction/>
    </div>
  );
};

export default Catalog;
