import withStyles from "@material-ui/core/styles/withStyles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import React from "react";

const FormExpansionPanel = withStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        width: '100%',
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 0,
        }
    },
    expanded: {}
}))(props => (<ExpansionPanel classes={{root: props.classes.root}} elevation={0} square={true} {...props} />));

export default FormExpansionPanel;