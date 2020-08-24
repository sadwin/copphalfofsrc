import React from "react";
import { Form } from "react-final-form";
import FormContent from "./FormContent";
import { addPerson } from "../View/fetch";
import { connect } from "react-redux";

function AddPersonForm(props) {
    const { onSubmit, onCancel } = props;

    const handleSubmit = values => {
        const { addPerson } = props;
        addPerson(values);
        if (onSubmit) {
            onSubmit(values);
        }
    };

    const handleCancel = () => {
        if (onCancel) {
            onCancel();
        }
    };

    const renderFormContent = ({ handleSubmit, values }) => (
        <FormContent
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            values={values}
        />
    );

    return (
        <Form
            onSubmit={handleSubmit}
            render={renderFormContent}
            initialValues={{}}
        />
    );
}

const mapDispatchToProps = {
    addPerson
};

export default connect(null, mapDispatchToProps)(AddPersonForm);
