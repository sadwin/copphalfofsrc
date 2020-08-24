import React from "react";
import { connect } from "react-redux";
import TextField from "../../../ui/TextField";
import DataSelect from "../../../ui/DataSelect";
import { getOrganizations, getMunicipals } from "../../store/actions";
import { loadList } from "../../../Dict/Region/View/fetch";

const initialInfo = {
  name: "",
  organization: null,
  assign: "",
  region: -1,
  municipal: "2383",
  address: ""
};

const FacilityInfoForm = ({
  facilityInfo,
  
  getOrganizations,
  getMunicipals,
  organizations,
  municipals,
  disabled,
  onFormChange,
  loadList,
  regionsList = []
}) => {
  const initialData = facilityInfo || initialInfo;
  const [data, setData] = React.useState(initialData);
  const { latitude, longitude, ...dataWithNoCords } = data;
  const { name, organization, assign, region, municipal, address } = data;

  const onChange = (field, value) => {
    const newState = {
      ...dataWithNoCords,
      [field]: value
    };

    setData(newState);
    onFormChange(newState);
  };

  React.useEffect(() => {
    getOrganizations();
    loadList();
  }, []);

  React.useEffect(() => {
    if (region) {
      getMunicipals(region);
    }
  }, [region]);

  return (
    <div>
      <TextField
        required
        value={name}
        onChange={e => onChange("name", e.target.value)}
        label="Название"
        disabled={disabled}
      />
      <DataSelect
        value={organization}
        onChange={value => onChange("organization", value.id)}
        label="Организация"
        dataSource={organizations}
        disabled={disabled}
      />
      <TextField
        required
        value={assign}
        onChange={e => onChange("assign", e.target.value)}
        label="Назначение"
        disabled={disabled}
      />
      <DataSelect
        value={region}
        onChange={value => onChange("region", value.id)}
        label="Регионы"
        dataSource={regionsList}
        disabled={disabled}
      />
      <DataSelect
        value={municipal}
        onChange={value => onChange("municipal", value.id)}
        label="Муниципальное образование"
        dataSource={municipals}
        disabled={disabled || !region}
      />
      <TextField
        required
        value={address}
        onChange={e => onChange("address", e.target.value)}
        label="Адрес"
        disabled={disabled}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  isFetchingOrganizations: state.facilities.isFetchingOrganizations,
  organizations: state.facilities.organizations,
  isFetchingMunicipals: state.facilities.isFetchingMunicipals,
  municipals: state.facilities.municipals,
  regionsList: state.dictRegionView.list
});

const mapDispatchToProps = dispatch => ({
  getOrganizations: () => dispatch(getOrganizations()),
  getMunicipals: region => dispatch(getMunicipals(region)),
  loadList: () => dispatch(loadList())
});

export default connect(mapStateToProps, mapDispatchToProps)(FacilityInfoForm);
