import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

const FormExpansionPanelSummary = withStyles(theme => ({
    root: {
        justifyContent: 'flex-start',
        padding: theme.spacing(1)
    },
    content: {
        margin: 0,
        flexGrow: 0,
        '&$expanded': {
            margin: 0,
        }
    },
    expanded: {}
}))((props => (<ExpansionPanelSummary
    classes={{root: props.classes.root, content: props.classes.content}}
    expandIcon={<ExpandMore/>} {...props} />)));
export default FormExpansionPanelSummary;