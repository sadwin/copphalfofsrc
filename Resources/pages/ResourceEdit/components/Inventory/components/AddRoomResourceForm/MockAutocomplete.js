import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
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
      margin: 0,
    }
  }
}));

const MockAutocomplete = ({
  value,
  classes,
  label,
}) => {
  const { container, labelStyle, tag } = useStyles();

  return (
    <Autocomplete
      disabled
      classes={{ root: container, tag }}
      value={value}
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

export default MockAutocomplete;
