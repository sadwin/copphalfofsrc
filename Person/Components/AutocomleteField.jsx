import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

import { Field } from "react-final-form";

export function AutocomleteField(props) {
    const { name } = props;

    return (
        <Field
            name={name}
            render={fieldRenderProps => (
                <AutocomleteFieldWrapper {...fieldRenderProps} {...props} />
            )}
        />
    );
}

function AutocomleteFieldWrapper(props) {
    const {
        input: { name, onChange, value, ...restInput },
        meta,
        options,
        getOptionLabel,
        label,
        ...rest
    } = props;

    const defaultProps = {
        options,
        getOptionLabel: getOptionLabel ? getOptionLabel : option => option.label
    };

    const showError =
        ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
        meta.touched;

    return (
        <Autocomplete
            {...defaultProps}
            id="clear-on-escape"
            onChange={(e, option) => onChange(option && option.value)}
            clearOnEscape
            
            renderInput={params => (
                <TextField
                    {...params}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label={label}
                    {...restInput}
                    helperText={
                        showError ? meta.error || meta.submitError : undefined
                    }
                />
            )}
            {...rest}
        />
    );
}
