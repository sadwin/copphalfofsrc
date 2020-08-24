import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    marginTop: 10,
    "& .MuiInput-underline:after": {
      borderBottomColor: "#778899"
    },
    "& > .MuiInputLabel-root": {
      color: "#778899"
    },
    "& > .MuiInputLabel-root > .MuiInputLabel-asterisk": {
      color: "#E95356"
    },
    "& > .MuiInputBase-root": {
      fontSize: 12
    },
  },
  menuStyles: {
    "& ul": {
      padding: 0
    },
    "& > .MuiPaper-root": {
      width: "444px",
      height: "264px",
      // top: "320px !important"
    },
    "& > .MuiPaper-root > ul > li": {
      fontSize: "10px",
      padding: "17px",
      whiteSpace: "normal"
    },
    padding: 0
  },

  text: {
    "& .MuiInputBase-input": {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
      lineHeight: '16px',
      color: '#000000',
    },
  },
}));

const ComboBox = props => {
  const { dataSource, onChange, required, label} = props;
  const { container, menuStyles, text } = useStyles();
  const [value, setValue] = useState(props.value);

  
  return (
      <div className={container}>
          <Autocomplete
            options={dataSource}
            getOptionLabel={option => option.name}
            optionLabelProps={{
              shrink: true,
            }}
            disableClearable
            value={value}
            onChange={(event, newValue) => {
              onChange(newValue);
              setValue(newValue);
            }}
            renderInput={params => (
              <TextField {...params} className={text}  label={label} fullWidth required={required} />
            )}
          />
      </div>

  );
};

export default ComboBox;
