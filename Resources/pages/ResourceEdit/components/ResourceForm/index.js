import React, { useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "../../../../../ui/TextField";
import DataSelect from "../../../../../ui/DataSelect";
import useRoomResourceForm from "./useRoomResourceForm";
import { Typography } from "@material-ui/core";
import WorldSkills from "../WorldSkills";
import SpecialitiesCards from "../SpecialitiesCards";

const defaultData = {
  name: "",
  manufacture: "",
  model: "",
  inventoryNumber: "",
  yearStart: null,
  unit: null,
  count: null,
  resourceType: null,
  orgId: null,
  buildingId: null,
  roomId: null,
  worldSkills: [],
  specialities: []
};

const styles = () => ({
  root: {
    padding: 8,
    maxWidth: 774,
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
  const [data, setData] = React.useState(initialData || defaultData);
  const {
    dataSources,
    getResourceForm,
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
    orgId,
    buildingId,
    roomId,
    worldSkills,
    specialities
  } = data;

  useEffect(() => {
    getResourceForm();
  }, []);

  useEffect(() => {
    if (orgId) getOrganizationAddressList(orgId);
  }, [orgId]);

  useEffect(() => {
    if (buildingId) getAddressRoomList(buildingId);
  }, [buildingId]);

  const onChange = (field, value) => {
    const newState = {
      ...data,
      [field]: value
    };

    setData(newState);
    onFormChange(newState);
  };

  console.log(roomId);

  return (
    <div className={classes.root}>
      <Typography className={classes.heading}>Основные сведения</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid item xs={12}>
            <DataSelect
              value={resourceType}
              onChange={value => onChange("resourceType", value.id)}
              label="Тип ресурса"
              dataSource={dataSources.resourceTypes}
              disabled={disabled}
            />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                value={manufacture}
                onChange={e => onChange("manufacture", e.target.value)}
                label="Производитель"
                disabled={disabled}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={model}
                onChange={e => onChange("model", e.target.value)}
                label="Модель"
                disabled={disabled}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12}>
            <TextField
              value={name}
              onChange={e => onChange("name", e.target.value)}
              label="Наименование"
              disabled={disabled}
            />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                value={inventoryNumber}
                onChange={e => onChange("inventoryNumber", e.target.value)}
                label="Инвент. номер"
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
        </Grid>
      </Grid>
      <div className={classes.block}>
        <Typography className={classes.heading}>Расположение</Typography>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <DataSelect
            value={orgId}
            onChange={value => onChange("orgId", value.id)}
            label="Организация"
            dataSource={dataSources.organizations}
            disabled={disabled}
          />
        </Grid>
        <Grid item xs={6}>
          <DataSelect
            value={buildingId}
            onChange={value => onChange("buildingId", value.id)}
            label="Адрес / Корпус"
            dataSource={dataSources.addresses}
            disabled={disabled}
          />
        </Grid>
        <Grid item xs={6}>
          <DataSelect
            value={roomId}
            onChange={value => onChange("roomId", value.id)}
            label="Помещение"
            dataSource={dataSources.rooms}
            disabled={disabled}
          />
        </Grid>
      </Grid>
      <div className={classes.block}>
        <Typography className={classes.heading}>Компетенции</Typography>
      </div>
      {disabled ? (
        <WorldSkills />
      ) : (
        <DataSelect
          value={worldSkills}
          multiple
          getOptionLabel={option =>
            `${option.cis} | ${option.typeName} | ${option.name}`
          }
          onChange={value => onChange("worldSkills", value)}
          label=""
          dataSource={dataSources.worldSkills}
          disableClearable={false}
          disabled={disabled}
        />
      )}
      <div className={classes.block}>
        <Typography className={classes.heading}>
          Профессии и специальности
        </Typography>
      </div>

      {disabled ? (
        <SpecialitiesCards specialities={specialities} />
      ) : (
        <DataSelect
          value={specialities}
          multiple
          getOptionLabel={option => option.name}
          renderOption={option => `${option.code} ${option.name}`}
          onChange={value => onChange("specialities", value)}
          label=""
          dataSource={dataSources.specialities}
          disabled={disabled}
        />
      )}
    </div>
  );
};

export default withStyles(styles)(AddResourceForm);
