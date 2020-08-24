import React, { useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "../../../ui/TextField";
import DataSelect from "../../../ui/DataSelect";
import useRoomForm from "../../hooks/useRoomForm";

const initialData = {
    name: "",
    building: null,
    roomType: 1,
    department: null,
    area: null,
    capacity: null,
    number: ""
};

const styles = () => ({
    root: {
        "& .MuiFormLabel-root": {
            whiteSpace: "nowrap"
        }
    },
});

const RoomInfoForm = ({ disabled, onFormChange, classes }) => {
    const [data, setData] = React.useState(initialData);
    const {
        dataSources,
        getRoomFacilities,
        getRoomTypes,
        getRoomDeparments
    } = useRoomForm();
    const {
        name,
        building,
        roomType,
        department,
        area,
        capacity,
        number
    } = data;

    useEffect(() => {
        getRoomFacilities();
        getRoomTypes();
    }, []);

    useEffect(() => {
        building && getRoomDeparments(building);
    }, [building]);

    const onChange = (field, value) => {
        const newState = {
            ...data,
            [field]: value
        };

        setData(newState);
        onFormChange(newState);
    };

    return (
        <div className={classes.root}>
            <TextField
                required
                value={name}
                onChange={e => onChange("name", e.target.value)}
                label="Название"
                disabled={disabled}
            />
            <DataSelect
                value={building}
                onChange={value => onChange("building", value.id)}
                label="Адрес"
                dataSource={dataSources.facilities}
                getOptionLabel={option => option.address}
                disabled={disabled}
            />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <DataSelect
                        value={roomType}
                        onChange={value => onChange("roomType", value.id)}
                        label="Тип"
                        dataSource={dataSources.roomTypes}
                        disabled={disabled}
                    />
                </Grid>
                <Grid item xs={6}>
                    <DataSelect
                        value={department}
                        onChange={value => onChange("department", value.id)}
                        label="Подразделение"
                        dataSource={dataSources.departments}
                        disabled={disabled}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField
                        value={area}
                        onChange={e => onChange("area", e.target.value)}
                        label="Площадь (м2)"
                        disabled={disabled}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        value={capacity}
                        onChange={e => onChange("capacity", e.target.value)}
                        label="Вместимость"
                        disabled={disabled}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        required
                        value={number}
                        onChange={e => onChange("number", e.target.value)}
                        label="Номер"
                        disabled={disabled}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(styles)(RoomInfoForm);
