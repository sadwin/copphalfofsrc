import React, { useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "../../../../../../../ui/TextField";
import DataSelect from "../../../../../../../ui/DataSelect";
import MockAutocomplete from "./MockAutocomplete";
import useRoomResourceForm from "./useRoomResourceForm";

const defaultData = {
  name: "",
  manufacture: "",
  model: "",
  inventoryNumber: "",
  yearStart: null,
  unit: null,
  count: null,
  resourceType: null
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

const AddRoomResourceForm = ({
  disabled,
  onFormChange,
  initialData,
  roomInfo,
  classes
}) => {
  const [data, setData] = React.useState(initialData || defaultData);
  const { dataSources, getResourceTypes, getUnitTypes } = useRoomResourceForm();
  const {
    name,
    manufacture,
    model,
    inventoryNumber,
    yearStart,
    unit,
    count,
    resourceType
  } = data;

  useEffect(() => {
    getResourceTypes();
    getUnitTypes();
  }, []);

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
      <MockAutocomplete label="Организация" value={roomInfo.info.orgName} />
      <MockAutocomplete label="Адрес" value={roomInfo.info.depName} />
      <MockAutocomplete label="Помещение" value={roomInfo.data.name} />
    </div>
  );
};

export default withStyles(styles)(AddRoomResourceForm);
