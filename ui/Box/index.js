import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const root = {
    background: "#FFFFFF",
    border: "1px solid #F6F6F5",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.05)",
    margin: "0 8px",
    padding: "8px",
    transition: "all .2s",
}

const useStyles = makeStyles(theme => ({
    root,
    noMargins: {
        ...root,
        margin: 0,
    }
}));

const Box = ({ children, noMargin, ...rest }) => {
    const { root, noMargins } = useStyles();

    return <div className={noMargin ? noMargins : root} {...rest}>{children}</div>;
};

export default Box;
