import './BlogAdd.scss'
import {useAuth} from "../../../hooks/useAuth";
import {Link, useNavigate} from "react-router-dom";
import * as React from "react";
import {useEffect, useState} from "react";
import {initialValuesFormBlogAdd} from "../../../contstants/defaultData";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../../App";
import {Field, Form, Formik} from "formik";
import AppRoutes from "../../../contstants/routes";
import {UseFirebaseStorage} from "../../../hooks/useFirebaseStorage";
import {AddUserBlogSchema} from "../../../contstants/yupSchemas";

export const BlogAdd = () => {
    const {setBlogDocUser} = useAuth();

    const navigate = useNavigate();

    const {uploadFileAsync, validateFileSize, extractFile} = UseFirebaseStorage()


    const [uid, setUid] = useState<string>('')

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

    const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('YYYYYYY')
        try {
            if (!extractFile(e)) {
                return;
            }

            if (!validateFileSize(e, 3)) {
                new Error('The file size could not be saved because it exceeded 3MB, the maximum allowed size to upload');
            }

            await uploadFileAsync(e);


        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className={'blogAdd'}>
            <Link className={'url'} to={AppRoutes.AuthorizedUser_PAGE}>Личный блог</Link>
            <Formik
                initialValues={initialValuesFormBlogAdd}
                validationSchema={AddUserBlogSchema}
                onSubmit={(values, actions) => {
                    console.log('here', values)
                    if (uid) {
                        setBlogDocUser(values, uid) /*.then(() => navigate(AppRoutes.HeaderAuthorizedUser))*/
                        navigate(AppRoutes.AuthorizedUser_PAGE)
                        // alert('Send')
                    } else {
                        console.log(`Error`)
                    }
                }}
            >
                {({values, handleChange, errors, touched}) => {
                    console.log(values)
                    return (
                        <Form>
                            <div className={'box'}>
                                <div className={'title'}>
                                    <Field name={'title'}
                                           id={'title'}
                                           placeholder={'Заголовок записи'}
                                        // handleChange={handleChange}
                                           value={values.title}
                                           type={'text'}/>
                                    {errors.title && touched.title &&
                                        <p>{errors.title}</p>
                                    }
                                </div>
                                <div className={'text_field'}>
                                    <Field as='textarea'
                                           name={'text'}
                                           id={'text'}
                                           placeholder={'Текст записи'}
                                        // handleChange={handleChange}
                                           value={values.text}
                                           type={'text'}/>
                                    {errors.text && touched.text &&
                                        <p>{errors.text}</p>}
                                </div>
                            </div>
                            <div className={'add_image'}>
                                <h2>Фотографии</h2>
                                <label className='label_icon' htmlFor="blogIcon">Загрузить фотографии</label>
                                <input
                                    className="inputBlogFile"
                                    id="blogIcon"
                                    type="file"
                                    accept=".png, .jpeg, .pdf"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>


                            <div className={'btn_blog'}>
                                <button className={'blogAdd-btn'} type="submit">Опубликовать</button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>


        </div>
    );
};