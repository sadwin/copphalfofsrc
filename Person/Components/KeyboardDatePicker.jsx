// source from https://github.com/lookfirst/mui-rff/blob/master/src/KeyboardDatePicker.tsx
// added MuiPickersUtilsProvider locale prop 
import React from "react";

import {
    KeyboardDatePicker as MuiKeyboardDatePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";

import { Field } from "react-final-form";

export function KeyboardDatePicker(props) {
    const { name } = props;

    return (
        <Field
            name={name}
            render={fieldRenderProps => (
                <KeyboardDatePickerWrapper {...fieldRenderProps} {...props} />
            )}
        />
    );
}

function KeyboardDatePickerWrapper(props) {
    const {
        input: { name, onChange, value, ...restInput },
        meta,
        dateFunsUtils,
        locale,
        ...rest
    } = props;

    const showError =
        ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
        meta.touched;

    return (
        <MuiPickersUtilsProvider utils={dateFunsUtils} locale={locale}>
            <MuiKeyboardDatePicker
                disableToolbar
                fullWidth={true}
                autoOk={true}
                helperText={
                    showError ? meta.error || meta.submitError : undefined
                }
                error={showError}
                variant="inline"
                format="yyyy-MM-dd"
                margin="normal"
                onChange={onChange}
                value={value === "" ? null : value}
                {...rest}
                inputProps={restInput}
            />
        </MuiPickersUtilsProvider>
    );
}
