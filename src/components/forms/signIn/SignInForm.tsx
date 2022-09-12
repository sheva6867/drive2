import './SignInForm.scss'
import * as React from 'react';
import {useState} from 'react';
import {Form, Formik,} from 'formik';
import {useAuth} from "../../../hooks/useAuth";
import {initialValuesForm} from "../../../contstants/defaultData";
import {useNavigate} from "react-router-dom";
import AppRoutes from "../../../contstants/routes";
import {SignupSchema} from "../../../contstants/yupSchemas";
import Modal from "../../Modal/Modal";
import {ForgotPassword} from "../forgot/Forgot";
import mac from '../../../assets/svg/mac.svg'
import facebook from '../../../assets/svg/facebook.svg'
import google from '../../../assets/svg/google.svg'
import FieldInput from "../../FieldInput/FieldInput";

export const SignInForm = () => {

    const {signInUser} = useAuth();
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState<boolean>(false)
    const showModalHandler = () => setShowModal(!showModal)

    return (
        <div className={'SignInForm'}>
            <h1>Представьтесь, пожалуйста</h1>
            <h2>Авторизоватся с помощью</h2>
            <div className={'authorization-links'}>
                <a className={'links'} href=""><img className={'links-img'} src={google} alt=""/></a>
                <a className={'links'} href=""><img className={'links-img'} src={facebook} alt=""/></a>
                <a className={'links'} href=""><img className={'links-img'} src={mac} alt=""/></a>
            </div>
            <Formik
                initialValues={initialValuesForm}
                validationSchema={SignupSchema}
                onSubmit={async (values, actions) => {
                    const sighIn = await signInUser(values.email, values.password)
                    if (sighIn?.user.uid) {
                        navigate(AppRoutes.START_PAGE)
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
                                <label className={'login'} htmlFor="Login">Email</label>
                                <div className={'input_email'}>
                                    {/*<Field*/}
                                    {/*    onChange={handleChange}*/}
                                    {/*    value={values.email}*/}
                                    {/*    type="email"*/}
                                    {/*    name={'email'}*/}
                                    {/*    id={'Login'}*/}
                                    {/*    placeholder={'Email'}*/}
                                    {/*/>*/}
                                    <FieldInput name={'email'} id={'Login'}
                                                placeholder={'Email'}
                                                handleChange={handleChange} value={values.email} type={'email'}/>
                                    {errors.email && touched.email &&
                                        <p>{errors.email}</p>
                                    }
                                </div>
                            </div>
                            <div className={'password'}>
                                <label className={'label_password'} htmlFor="Password">Пароль</label>
                                {/*<Field*/}
                                {/*    onChange={handleChange}*/}
                                {/*    value={values.password}*/}
                                {/*    type="password"*/}
                                {/*    name={'password'}*/}
                                {/*    id={'password'}*/}
                                {/*    placeholder={'Password'}*/}
                                {/*/>*/}
                                <div className={'input_password'}>
                                    <FieldInput name={'password'} id={'password'}
                                                placeholder={'Password'}
                                                handleChange={handleChange} value={values.password} type={'password'}/>
                                    {errors.password && touched.password &&
                                        <p>{errors.password}</p>}
                                </div>
                            </div>
                            <div className={'form_btn'}>
                                <button className={'sign_btn'} type="submit">Войти</button>
                                <button className={'resetPassword_btn'} onClick={showModalHandler}>Не помню пароль
                                </button>
                                {showModal && <Modal showModal={showModalHandler} component={<ForgotPassword/>}/>}
                            </div>
                        </Form>
                    )
                }}
            </Formik>

        </div>
    );
};

