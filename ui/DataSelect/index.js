import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    marginTop: 10,
    "& .MuiForm-underline:after": {
      borderBottomColor: "#778899"
    },
    "& .MuiAutocomplete-input": {
      fontSize: 12
    }
  },
  labelStyle: {
    fontSize: 14
  },
  tag: {
    background: "#FFF",
    color: "#304967",
    border: "1px solid #DADADA",
    height: 20,
    "& svg.MuiChip-deleteIcon": {
      height: 18,
      width: 18,
      margin: 0
    }
  }
}));

const DataSelect = ({
  dataSource,
  onChange,
  value,
  disabled,
  label,
  multiple,
  classes,
  disableClearable = true,
  getOptionLabel = option => option.name,
  ...rest
}) => {
  const { container, labelStyle, tag } = useStyles();

  const returnFunction = dataSource => {
    if (multiple) {
      return dataSource.filter(i => value.some(v => v.id === i.id));
    } else {
      return dataSource.find(i => i.id === value) || "";
    }
  };

  console.log(label, dataSource, value, returnFunction(dataSource));

  return (
    <Autocomplete
      disabled={dataSource.length == 0 || disabled}
      disableClearable={disableClearable}
      options={dataSource}
      classes={{ root: container, tag }}
      multiple={multiple}
      value={returnFunction(dataSource)}
      onChange={(e, value) => onChange(value)}
      getOptionLabel={getOptionLabel}
      {...rest}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          fullWidth
          InputLabelProps={{ shrink: true, classes: { root: labelStyle } }}
        />
      )}
    />
  );
};

export default DataSelect;
