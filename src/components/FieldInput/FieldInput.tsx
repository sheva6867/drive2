import {Field} from "formik";
import * as React from "react";
import './FieldInput.scss'

interface Props {
    handleChange: any;
    value: any;
    type?: any;
    name: string;
    id?: string;
    placeholder?: string;
}

function FieldInput({handleChange, value, id, type, placeholder, name}: Props) {
    return (
        <Field
            className={'Field-input'}
            onChange={handleChange}
            value={value}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
        />
    )
}

export default FieldInput