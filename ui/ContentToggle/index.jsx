import React from "react";
import { makeStyles, Typography, FormControl } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
        borderBottom: "1px dashed #CACCD1",
        boxSizing: "border-box"
    },
    toggler: {
        marginTop: theme.spacing(2),
        display: "flex",
        flexGrow: 1,
        // justifyContent: "space-between"
        alignItems: "center",
        padding: `6px 0 2px 0`,
        cursor: "pointer",
        boxSizing: "border-box"
    }
}));

export function ContentToggle(props) {
    const classes = useStyles();
    const { label, onToggle, open } = props;

    const handleToggle = () => {
        onToggle();
    };

    return (
        <FormControl className={classes.root}>
            <div onClick={handleToggle} className={classes.toggler}>
                <Typography>{label}</Typography>
                {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
        </FormControl>
    );
}
