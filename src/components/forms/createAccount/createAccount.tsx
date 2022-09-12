import './createAccount.scss'
import * as React from 'react';
import {Field, Form, Formik,} from 'formik';
import {useAuth} from "../../../hooks/useAuth";
import {initialValuesForm} from "../../../contstants/defaultData";
import {useNavigate} from "react-router-dom";
import AppRoutes from "../../../contstants/routes";
import {createAccountSchema} from "../../../contstants/yupSchemas";

export const CreateAccountForm = () => {

    const {createAccount} = useAuth();
    const navigate = useNavigate();

    return (
        <div className={'create_account'}>
            <h1>Регистрация</h1>
            <h4>Общайтесь, делитесь опытом и сохраняйте нужное. На компьютере и телефоне.</h4>
            <Formik
                initialValues={initialValuesForm}
                validationSchema={createAccountSchema}
                onSubmit={async (values, actions) => {
                    const sighIn = await createAccount(values.email, values.password)
                    if (sighIn?.user.uid) {
                        navigate(AppRoutes.CREATE_PERSONALAccount)
                    } else {
                        //todo handle login errors
                        alert('Неверный Пароли или Email')

                    }
                }}
            >
                {({values, handleChange, errors, touched}) => {
                    console.log(errors, 'errors')
                    return (
                        <Form>
                            <div className={'email'}>
                                <Field
                                    onChange={handleChange}
                                    value={values.email}
                                    type="email"
                                    name={'email'}
                                    id={'Login'}
                                    placeholder={'Email'}
                                />
                                {errors.email && touched.email &&
                                    <p>{errors.email}</p>
                                }
                            </div>
                            <div className={'password'}>
                                <Field
                                    onChange={handleChange}
                                    value={values.password}
                                    type="password"
                                    name={'password'}
                                    id={'password'}
                                    placeholder={'Password'}
                                />
                                {errors.password && touched.password &&
                                    <p>{errors.password}</p>
                                }
                            </div>
                            <button type="submit">Зарегестрироваться</button>
                        </Form>
                    )
                }}

            </Formik>
        </div>
    );
};

