import React, { useEffect, useMemo } from "react";
import { TextField, Select, Checkboxes } from "mui-rff";
import { Grid } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import ruLocale from "date-fns/locale/ru";
import { KeyboardDatePicker } from "./KeyboardDatePicker";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Button from "../../ui/Button";
import { connect } from "react-redux";
import DialogActions from "@material-ui/core/DialogActions";
import { TreeviewField } from "./TreeviewField";

import {
    loadList as loadOrganizations,
    loadDepartments
} from "../../Organization/View/fetch";

import { loadPosts } from "../View/fetch";

import "./styles.css";

import { makeStyles } from "@material-ui/core/styles";
import { AutocomleteField } from "./AutocomleteField";

const useStyles = makeStyles(theme => ({
    root: {
        padding: `${theme.spacing()}px 0`
    },
    dialogPaper: {
        minWidth: 750
    },
    dialogTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    checkBoxLabel: {
        fontSize: "0.75rem"
    },
    actions: {
        paddingTop: theme.spacing(4)
    },
    ".MuiFormLabel-asterisk": {
        color: "#f15454"
    }
}));

function FormContent(props) {
    const {
        onSubmit,
        onCancel,
        values,
        loadOrganizations,
        organizations,
        loadDepartments,
        loadPosts,
        departmentsMap,
        posts
    } = props;

    useEffect(() => {
        loadOrganizations();
        loadPosts();
    }, [loadOrganizations, loadPosts]);

    useEffect(() => {
        if (values.organization !== undefined) {
            loadDepartments(values.organization);
            values.department = undefined;
        }
    }, [values.organization, loadDepartments, values.department]);

    useEffect(() => {
        values.department = undefined;
    }, [values.organization, values.department]);

    const organizationsData = useMemo(() => {
        return organizations.map(({ id, shortName }) => ({
            label: shortName,
            value: id
        }));
    }, [organizations]);

    const departmentsData = useMemo(() => {
        if (!departmentsMap[values.organization]) {
            return [];
        }
        return departmentsMap[values.organization].map(
            ({ id, name, parentId }) => ({
                id,
                parentId,
                value: id,
                label: name,
            })
        );
    }, [departmentsMap, values.organization]);

    const postsData = useMemo(() => {
        if (!posts) {
            return [];
        }
        return posts.map(({ id, name }) => ({
            value: id,
            label: name
        }));
    }, [posts]);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <form onSubmit={onSubmit} noValidate>
                <Grid container>
                    <Grid container spacing={4}>
                        <Grid item xs={4}>
                            <TextField
                                name="lastName"
                                label="Фамилия"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                required
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                name="firstName"
                                label="Имя"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                required
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                name="middleName"
                                label="Отчество"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid item xs={4}>
                            <Select
                                name="sex"
                                label="Пол"
                                formControlProps={{ margin: "normal" }}
                                value={"-1"}
                                inputLabelProps={{
                                    shrink: true
                                }}
                            >
                                <MenuItem value={"-1"}>Не указан</MenuItem>
                                <MenuItem value={"0"}>Женский</MenuItem>
                                <MenuItem value={"1"}>Мужской</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={4}>
                            <KeyboardDatePicker
                                label="Дата рождения"
                                name="birthday"
                                dateFunsUtils={DateFnsUtils}
                                locale={ruLocale}
                                format="dd.MM.yyyy"
                                keyboardIcon={<ArrowDropDownIcon />}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                name="snils"
                                label="СНИЛС"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid item xs={4}>
                            <TextField
                                name="phone"
                                label="Телефон"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                name="email"
                                label="Email"
                                required
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Checkboxes
                                name="register"
                                data={{
                                    label: "Отправить приглашение",
                                    value: true
                                }}
                                fieldProps={{ color: "primary" }}
                                formControlLabelProps={{
                                    classes: { label: classes.checkBoxLabel }
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid item xs={8}>
                            <AutocomleteField
                                name="organization"
                                label="Организация"
                                options={organizationsData}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Select
                                name="post"
                                label="Должность"
                                data={postsData}
                                inputLabelProps={{
                                    shrink: true
                                }}
                            ></Select>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid item xs={8}>
                            <TreeviewField options={departmentsData} label="Подразделение"/>
                            {/* <Select
                                name="department"
                                label="Подразделение"
                                data={departmentsData}
                                inputLabelProps={{
                                    shrink: true
                                }}
                            ></Select> */}
                        </Grid>
                        <Grid item xs={4}>
                            <MuiPickersUtilsProvider
                                utils={DateFnsUtils}
                                locale={ruLocale}
                            >
                                <KeyboardDatePicker
                                    label="Дата начала работы"
                                    name="startDate"
                                    dateFunsUtils={DateFnsUtils}
                                    locale={ruLocale}
                                    format="dd.MM.yyyy"
                                    keyboardIcon={<ArrowDropDownIcon />}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} className={classes.actions}>
                        <Grid item xs={7}>
                            <Checkboxes
                                name="openEditForm"
                                data={{
                                    label: "Открыть форму для редактирования",
                                    value: true
                                }}
                                fieldProps={{ color: "primary" }}
                                formControlLabelProps={{
                                    classes: { label: classes.checkBoxLabel }
                                }}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <DialogActions>
                                <Button onClick={() => onCancel()}>
                                    Отмена
                                </Button>
                                <Button type="submit" color="green">
                                    Добавить
                                </Button>
                            </DialogActions>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

const mapStateToProps = state => ({
    organizations: state.organizationView.list,
    departmentsMap: state.organizationView.orgDepartmentsMap,
    posts: state.personView.mainDataPosts
});

const mapDispatchToProps = {
    loadOrganizations,
    loadDepartments,
    loadPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContent);
