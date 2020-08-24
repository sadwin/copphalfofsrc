import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(() => ({
  container: {
    width: "400px",
    "& .MuiInput-underline:after": {
      borderBottomColor: "#778899"
    }
  }
}));

export default function SearchField(props) {
  const { container } = useStyles();

  return (
    <FormControl className={container}>
      <Input
        id="input-with-icon-adornment"
        {...props}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
