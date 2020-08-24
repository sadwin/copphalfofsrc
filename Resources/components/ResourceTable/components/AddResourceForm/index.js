import React, { useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "../../../../../ui/TextField";
import DataSelect from "../../../../../ui/DataSelect";
import useRoomResourceForm from "./useRoomResourceForm";

const defaultData = {
  name: "",
  manufacture: "",
  model: "",
  inventoryNumber: "",
  yearStart: null,
  unit: null,
  count: null,
  resourceType: null,
  organization: null,
  address: null,
  room: null
};

const styles = () => ({
  root: {
    "& .MuiFormLabel-root": {
      whiteSpace: "nowrap"
    },
    "& .MuiInputBase-input.Mui-disabled": {
      color: "#000"
    }
  },
  heading: {
    fontSize: 14,
    lineHeight: "18px",
    display: "flex",
    alignItems: "center",
    color: "#000000",
    margin: "8px 0"
  },
  block: {
    margin: "35px 0 15px 0"
  }
});

const AddResourceForm = ({ disabled, onFormChange, initialData, classes }) => {
  const [data, setData] = React.useState(defaultData);
  const {
    dataSources,
    getResourceTypesList,
    getUnitTypesList,
    getOrganizationsList,
    getOrganizationAddressList,
    getAddressRoomList
  } = useRoomResourceForm();
  const {
    name,
    manufacture,
    model,
    inventoryNumber,
    yearStart,
    unit,
    count,
    resourceType,
    organization,
    address,
    room
  } = data;

  useEffect(() => {
    getResourceTypesList();
    getUnitTypesList();
    getOrganizationsList();
  }, []);

  useEffect(() => {
    onChange("address", null);
    if (organization) getOrganizationAddressList(organization);
  }, [organization]);

  useEffect(() => {
    onChange("room", null);
    if (address) getAddressRoomList(address);
  }, [address]);

  const onChange = (field, value) => {
    const newState = {
      ...data,
      [field]: value
    };

    setData(newState);
    onFormChange(newState);
  };

  return (
    <div className={classes.root}>
      <DataSelect
        value={resourceType}
        onChange={value => onChange("resourceType", value.id)}
        label="Тип ресурса"
        dataSource={dataSources.resourceTypes}
        disabled={disabled}
      />
      <TextField
        value={name}
        onChange={e => onChange("name", e.target.value)}
        label="Наименование"
        disabled={disabled}
      />
      <TextField
        value={manufacture}
        onChange={e => onChange("manufacture", e.target.value)}
        label="Производитель"
        disabled={disabled}
      />
      <TextField
        value={model}
        onChange={e => onChange("model", e.target.value)}
        label="Модель"
        disabled={disabled}
      />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            value={inventoryNumber}
            onChange={e => onChange("inventoryNumber", e.target.value)}
            label="Инвентарный номер"
            disabled={disabled}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={yearStart}
            type="number"
            onChange={e => onChange("yearStart", e.target.value)}
            label="Год выпуска"
            disabled={disabled}
          />
        </Grid>
        <Grid item xs={3}>
          <DataSelect
            value={unit}
            onChange={value => onChange("unit", value.id)}
            label="Ед.изм."
            dataSource={dataSources.unitTypes}
            disabled={disabled}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={count}
            onChange={e => onChange("count", e.target.value)}
            label="Количество"
            disabled={disabled}
          />
        </Grid>
      </Grid>
      <DataSelect
        value={organization}
        onChange={value => onChange("organization", value.id)}
        label="Организация"
        dataSource={dataSources.organizations}
        disabled={disabled}
      />
      <DataSelect
        value={address}
        onChange={value => onChange("address", value.id)}
        label="Адрес"
        dataSource={dataSources.addresses}
        disabled={disabled}
      />
      <DataSelect
        value={room}
        onChange={value => onChange("room", value.id)}
        label="Помещение"
        dataSource={dataSources.rooms}
        disabled={disabled}
      />
    </div>
  );
};

export default withStyles(styles)(AddResourceForm);
