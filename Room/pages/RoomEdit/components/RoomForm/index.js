import React, { useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useRoomForm from "../../../../hooks/useRoomForm";
import TextField from "../../../../../ui/TextField";
import DataSelect from "../../../../../ui/DataSelect";
import SpecialitiesCards from "../SpecialitiesCards";
import WorldSkills from "../WorldSkills";
import { FormControlLabel, Checkbox } from "@material-ui/core";

const defaultData = {
  name: "",
  buildingId: null,
  roomType: null,
  depId: null,
  area: null,
  capacity: null,
  number: "",
  note: "",
  demo: false,
  limiting: "",
  specialities: [],
  worldSkills: []
};

const styles = () => ({
  root: {
    width: 774,
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
  },
  checkbox: {
    "& > .MuiCheckbox-colorPrimary.Mui-checked": {
      color: "rgba(0, 127, 189, 0.7);"
    }
  },
  label: {
    fontSize: 12
  }
});

const RoomInfoForm = ({ disabled, onFormChange, initialData, classes }) => {
  const [data, setData] = React.useState(initialData || defaultData);
  const { dataSources, getRoomDeparments, getRoomForm } = useRoomForm();
  const {
    name,
    buildingId,
    roomType,
    depId,
    area,
    capacity,
    number,
    note,
    limiting,
    specialities,
    worldSkills,
    demo,
  } = data;

  useEffect(() => {
    getRoomForm();
  }, []);

  useEffect(() => {
    buildingId && getRoomDeparments(buildingId);
  }, [buildingId]);

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
      <Typography className={classes.heading}>Общие сведения</Typography>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextField
            required
            value={name}
            onChange={e => onChange("name", e.target.value)}
            label="Название"
            disabled={disabled}
          />
          <DataSelect
            value={buildingId}
            onChange={value => onChange("buildingId", value.id)}
            label="Адрес"
            dataSource={dataSources.facilities}
            getOptionLabel={option => option.address}
            disabled={disabled}
          />
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                required
                value={number}
                onChange={e => onChange("number", e.target.value)}
                label="Номер"
                disabled={disabled}
              />
            </Grid>
            <Grid item xs={3}>
              <DataSelect
                value={roomType}
                onChange={value => onChange("roomType", value.id)}
                label="Тип"
                dataSource={dataSources.roomTypes}
                disabled={disabled}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                value={area}
                onChange={e => onChange("area", e.target.value)}
                label="Площадь (м2)"
                disabled={disabled}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                value={capacity}
                onChange={e => onChange("capacity", e.target.value)}
                label="Вместимость"
                disabled={disabled}
              />
            </Grid>
          </Grid>
          <DataSelect
            value={depId}
            onChange={value => onChange("depId", value.id)}
            label="Подразделение"
            dataSource={dataSources.departments}
            disabled={disabled}
          />
        </Grid>
      </Grid>
      <TextField
        value={note}
        onChange={e => onChange("note", e.target.value)}
        label="Описание"
        disabled={disabled}
      />
      <TextField
        value={limiting}
        onChange={e => onChange("limiting", e.target.value)}
        label="Ограничения доступности"
        disabled={disabled}
      />
      <div className={classes.block}>
        <FormControlLabel
            control={
              <Checkbox
                checked={demo}
                onChange={(_, val) => onChange("demo", val)}
                value="checked"
                color="primary"
              />
            }
            label="Оборудовано для проведения демо-экзамена"
            classes={{
              label: classes.label,
              root: classes.checkbox
            }}
        />
      </div>
      <div className={classes.block}>
        <Typography className={classes.heading}>
          Специальности и профессии, для которых оборудован кабинет
        </Typography>
      </div>

      {disabled ? (
        <SpecialitiesCards specialities={specialities} />
      ) : (
        <DataSelect
          value={specialities}
          multiple
          getOptionLabel={option => option.code}
          renderOption={option => `${option.code} ${option.name}`}
          onChange={value => onChange("specialities", value)}
          label=""
          dataSource={dataSources.specialities}
          disabled={disabled}
        />
      )}
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
    </div>
  );
};

export default withStyles(styles)(RoomInfoForm);
