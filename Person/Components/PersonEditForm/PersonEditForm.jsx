import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { PersonalData } from "./PersonalData";
import { SkillsData } from "./SkillsData";

import { connect } from "react-redux";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: "flex",
        margin: theme.spacing(2)
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
        marginRight: theme.spacing()
    },
    form: {
        flexGrow: 1,
        padding: `${theme.spacing(2)}px ${theme.spacing(9)}px 0 ${theme.spacing(
            2
        )}px`,
        backgroundColor: theme.palette.background.paper
    },
    label: {
        textTransform: "none",
        alignItems: "flex-start",
        textAlign: "left"
    },
    tabsContainer: {
        minWidth: "264px"
    }
}));

function PersonEditForm(props) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);

    const handleChange = (event, newValue) => {
        setPage(newValue);
    };

    const tabClasses = { wrapper: classes.label, wrapped: classes.label };

    return (
        <div className={classes.root}>
            <div classNames={classes.tabsContainer}>
                <Tabs
                    orientation="vertical"
                    value={page}
                    onChange={handleChange}
                    classes={{ wrapper: classes.label, wrapped: classes.label }}
                    className={classes.tabs}
                    variant="standard"
                >
                    <Tab
                        label="Основная информация"
                        {...a11yProps(0)}
                        classes={tabClasses}
                    />
                    <Tab
                        label="Профессиональные сведения"
                        {...a11yProps(1)}
                        classes={tabClasses}
                    />
                    <Tab
                        label="Учётные данные"
                        {...a11yProps(2)}
                        classes={tabClasses}
                    />
                    <Tab
                        label="История"
                        {...a11yProps(3)}
                        classes={tabClasses}
                    />
                    <Tab label="Связи" {...a11yProps(4)} classes={tabClasses} />
                </Tabs>
            </div>
            {page === 0 && <PersonalData />}
            {page === 1 && <SkillsData />}
            {page === 2 && (
                <div>
                    <Typography>Учётные данные</Typography>
                </div>
            )}
            {page === 3 && (
                <div>
                    <Typography>История</Typography>
                </div>
            )}
            {page === 4 && (
                <div>
                    <Typography>Связи</Typography>
                </div>
            )}
        </div>
    );
}

export default connect()(PersonEditForm);
