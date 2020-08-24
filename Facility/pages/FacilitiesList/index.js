import React, { useEffect } from "react";
import Breadcrumbs from "./../../../ui/Breadcrumbs";
import { connect } from "react-redux";
import { getFacilities } from "../../store/actions";
import FacilitiesTable from "../../components/FacilitiesTable";

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
    label: "Материально-технические ресурсы",
    link: "#"
  },
  {
    label: "Мои адреса",
    link: "#"
  }
];

const FacilitiesList = ({ getFacilities, facilities }) => {
  useEffect(() => {
    getFacilities();
  }, []);

  return (
    <div>
      <Breadcrumbs items={items} />
      <FacilitiesTable facilities={facilities} />
    </div>
  );
};

const mapStateToProps = state => ({
  facilities: state.facilities.facilities
});

const mapDispatchToProps = dispatch => ({
  getFacilities: () => {
    dispatch(getFacilities());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FacilitiesList);
