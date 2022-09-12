import './SignIn.scss'
import {SignInForm} from "../forms/signIn/SignInForm";


function SignIn() {

    return (
        <div className={'container_signIn'}>
            <h1>Представьтесь, пожалуйста</h1>
            <div className={'signIn_block'}>
                <div className={'signIn_social'}>
                    <form action="">
                        <button type={'submit'}>Войти через Facebook</button>
                        <button type={'submit'}>Войти с Apple</button>
                        <button type={'submit'}>Войти через Google</button>
                    </form>
                </div>
                <div className={'hr'}>
                    <hr/>
                </div>
                {/*<SignInForm/>*/}
                {/*<div className={'email'}>*/}
                {/*    <label htmlFor="Login">Email</label>*/}
                {/*    <input onChange={(e) => console.log(e.currentTarget.value)} value={''} type="email" id={'Login'}/>*/}
                {/*</div>*/}
                {/*<div className={'password'}>*/}
                {/*    <label htmlFor="Password">Пароль</label>*/}
                {/*    <input type="Password" id={'Password'}/>*/}
                {/*    <button type={"submit"}>Не помню пароль</button>*/}
                {/*</div>*/}
                <div>
                    <button>Войти</button>
                    <button>Зарегестрироваться</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;