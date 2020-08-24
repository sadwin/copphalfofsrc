import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    marginTop: 10,
    "& .MuiInput-underline:after": {
      borderBottomColor: "#778899"
    },
    "& > .MuiInputLabel-root": {
      color: "#778899",
      fontSize: 14,
    },
    "& > .MuiInputLabel-root > .MuiInputLabel-asterisk": {
      color: "#E95356"
    },
    "& > .MuiInputBase-root": {
      fontSize: 12
    }
  }
}));

const TextField = props => {
  const { container } = useStyles();

  return (
    <FormControl className={container}>
      <InputLabel shrink>{props.label}</InputLabel>
      <Input
        {...props}
      />
    </FormControl>
  );
};

export default TextField;
