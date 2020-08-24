import React, { useEffect } from "react";
import Breadcrumbs from "../../../ui/Breadcrumbs";
import { connect } from "react-redux";
import { getSpecialities } from "./store/actions";
import SpecialitiesTable from "./components/SpecialitiesTable";
const items = [
  {
    label: "Управление ООП",
    link: "#"
  },
  {
    label: "Ресурсы",
    link: "#"
  },
  {
    label: "Справочник компетенций и ФГОС",
    link: "#"
  },
  {
    label: "Справочник профессий и специальностей",
    link: "#"
  }
];

const DictSpeciality = ({ getSpecialities, specialities }) => {
  useEffect(() => {
    getSpecialities();
  }, []);

  return (
    <div>
      <Breadcrumbs items={items} />
      <SpecialitiesTable specialities={specialities} />
    </div>
  );
};

const mapStateToProps = state => ({
    specialities: state.specialities.specialities
});

const mapDispatchToProps = dispatch => ({
    getSpecialities: () => {
    dispatch(getSpecialities());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DictSpeciality);
