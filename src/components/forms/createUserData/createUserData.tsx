import {useAuth} from "../../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import * as React from "react";
import {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {carMarks, initialValuesFormCreateUserData} from "../../../contstants/defaultData";
import CountrySelector from "../../../CountrySelector";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../../App";
import './createUserData.scss'
import AppRoutes from "../../../contstants/routes";
import {CreateUserDataSchema} from "../../../contstants/yupSchemas";
import FieldInput from "../../FieldInput/FieldInput";


export const CreateUserData = () => {
    const {setDocUser} = useAuth();

    const navigate = useNavigate();

    const [uid, setUid] = useState<string>('')

    const renderMyCar = () =>
        carMarks.map((carmark, index) => {
            return <option key={index}>{carmark}</option>;
        });
    useEffect(() => {
        const listener = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid)
            } else {
                console.log('signout')
            }
        })
        return () => listener()
    }, [])

    return (
        <div className={'CreateUserData'}>
            <h1>Регистрация</h1>
            <Formik
                initialValues={initialValuesFormCreateUserData}
                validationSchema={CreateUserDataSchema}
                onSubmit={(values, actions) => {
                    console.log('here', values)
                    if (uid) {
                        setDocUser(values, uid) /*.then(() => navigate(AppRoutes.HeaderAuthorizedUser))*/
                        navigate(AppRoutes.AuthorizedUser_PAGE)
                        // alert('Send')
                    } else {
                        //     todo handle login errors
                        alert('Не отправлено')
                    }
                }}
            >
                {({values, handleChange, errors, touched}) => {
                    console.log(values)
                    return (
                        <Form>
                            <div className={'nickname'}>
                                <label htmlFor="nickname">Никнейм</label>
                                <div className={'input'}>
                                    <FieldInput name={'nickname'} id={'nickname'}
                                                placeholder={'nickname'}
                                                handleChange={handleChange} value={values.nickname} type={'text'}/>
                                    {errors.nickname && touched.nickname &&
                                        <p>{errors.nickname}</p>
                                    }
                                </div>
                            </div>
                            <div className={'name'}>
                                <label htmlFor="name">Меня зовут</label>
                                <div className={'input'}>
                                    <FieldInput name={'name'} id={'name'}
                                                placeholder={'name'}
                                                handleChange={handleChange} value={values.name} type={'text'}/>
                                    {errors.name && touched.name &&
                                        <p>{errors.name}</p>}
                                </div>
                            </div>
                            <div className={'surname'}>
                                <label htmlFor="surname">Моя фамилия</label>
                                <div className={'input'}>
                                    <FieldInput name={'surname'} id={'surname'}
                                                placeholder={'surname'}
                                                handleChange={handleChange} value={values.surname} type={'text'}/>
                                    {errors.surname && touched.surname &&
                                        <p>{errors.surname}</p>}
                                </div>
                            </div>
                            <div className="my-radio-group">
                                <p className={'radio-group'}>В детстве я</p>
                                <div className={'group'} aria-labelledby="my-radio-group">
                                    <label>
                                        <Field type="radio" name="sex" value={'male'} checked/>
                                        был мальчиком
                                    </label>
                                    <label>
                                        <Field type="radio" name="sex" value={'female'}/>
                                        был девочкой
                                    </label>
                                </div>
                            </div>
                            <div className={'country'}>
                                <CountrySelector countryValue={values.country} regionValue={values.region}/>
                                {/*<label htmlFor="country">Моя страна</label>*/}
                                {/*<Field as="select" name="country">*/}
                                {/*    {renderCountry()}*/}
                                {/*</Field>*/}
                            </div>
                            {/*<div>*/}
                            {/*    <label htmlFor="city">Мой город</label>*/}
                            {/*    <CountrySelector/>*/}
                            {/*</div>*/}
                            <div className={'car-selection'}>
                                <label htmlFor="myCar">Я езжу на</label>
                                <Field as="select" name="myCar">
                                    {renderMyCar()}
                                </Field>
                            </div>
                            <div className={'btn_create'}>
                                <button className={'create_data-btn'} type="submit">Создать учетную запись</button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
            <div className={'text'}>
                <p>
                    Регистрируясь, вы принимаете условия <a href="">Пользовательского соглашения,</a>
                    <a href="">Политики обработки персональных данных,</a>даёте
                    <a href="">согласие на обработку своих персональных данных</a> и обязуетесь соблюдать
                    <a href="">Правила сайта,</a> в том числе:
                </p>
                <ul>
                    <li>Я буду размещать только свой контент (фото, тексты).</li>
                    <li>Я обязуюсь не использовать ненормативную лексику.</li>
                    <li>Я не собираюсь несанкционированно рекламировать здесь свои товары и/или услуги.</li>
                </ul>
            </div>

        </div>
    );
};
