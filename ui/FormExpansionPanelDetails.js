import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

const FormExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: 0
    },
}))((props => (<ExpansionPanelDetails
    classes={{root: props.classes.root}}
    {...props} />)));
export default FormExpansionPanelDetails;