import './SignInPage.scss'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {SignInForm} from "../../components/forms/signIn/SignInForm";


function SignInPage() {
    return (
        <div className={'sign_page'}>
            <Header/>
            <div className={'SignInPage'}>
                {/*<SignIn/>*/}
                <SignInForm/>
            </div>
            <Footer/>
        </div>
    )
}

export default SignInPage;