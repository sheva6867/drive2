import './Forgot.scss'
import * as React from "react";
import {initialValuesFormForgot} from "../../../contstants/defaultData";
import {Field, Form, Formik} from "formik";
import {ForgotPasswordSchema} from "../../../contstants/yupSchemas";
import {useAuth} from "../../../hooks/useAuth";
import {useNavigate} from "react-router-dom";


export const ForgotPassword = () => {
    const {forgotPassword} = useAuth();
    const navigate = useNavigate();

    return (
        <div className={'forgot'}>
            <h1>Забыли пароль?</h1>
            <Formik
                initialValues={initialValuesFormForgot}
                validationSchema={ForgotPasswordSchema}
                onSubmit={async (values, actions) => {
                    try {
                        await forgotPassword(values.email)
                        alert('Сообщение отправлено')
                    } catch (e) {
                        console.log(`Error`)
                    }

                }}
            >
                {({values, handleChange, errors}) => {
                    console.log(errors, 'errors')
                    return (
                        <Form className={'forgot_form'}>
                            <div className={'email'}>
                                <label htmlFor="Login">Email</label>
                                <Field
                                    onChange={handleChange}
                                    value={values.email}
                                    type="email"
                                    name={'email'}
                                    id={'Login'}
                                    placeholder={'Email'}
                                />
                            </div>
                            <button type="submit">Отправить</button>
                        </Form>
                    )
                }}

            </Formik>
        </div>
    );
};
