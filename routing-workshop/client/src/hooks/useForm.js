import React from "react";

export const useForm = (initialValues) => {
    const [formValues, setFormValues] = React.useState(initialValues);

    const onChange = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
    }

    return {
        formValues,
        onChange
    }
}