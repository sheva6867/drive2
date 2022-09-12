import './RegistrationPage.scss'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {CreateAccountForm} from "../../components/forms/createAccount/createAccount";


function RegistrationPage() {
    return (
        <>
            <Header/>
            <div className={'createAccountForm'}>
                <CreateAccountForm/>
            </div>
            <Footer/>

        </>
    )
}

export default RegistrationPage