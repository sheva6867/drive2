import * as Yup from "yup";


export const createAccountSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
})

export const SignupSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

export const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
});
export const CreateUserDataSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, 'Too Short!')
        .max(35, 'Too Long!')
        .required('Required'),
    surname: Yup.string()
        .min(4, 'Too Short!')
        .max(35, 'Too Long!')
        .required('Required'),
    nickname: Yup.string()
        .min(4, 'Too Short!')
        .max(35, 'Too Long!')
        .required('Required'),
});

export const AddUserBlogSchema = Yup.object().shape({
    title: Yup.string()
        .required('Required'),
    text: Yup.string()
        .required('Required'),
});

