import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
    drawerPaper: {
        width: drawerWidth,
        boxSizing: "border-box",
        padding: 20,
        top: 65
    }
}));

const InfoDrawer = ({
    open,
    children,
    variant = "persistent",
    anchor = "right"
}) => {
    const classes = useStyles();
    return (
        <Drawer
            variant={variant}
            anchor={anchor}
            open={open}
            classes={{
                paper: classes.drawerPaper
            }}
        >
            {children}
        </Drawer>
    );
};

export default InfoDrawer;
