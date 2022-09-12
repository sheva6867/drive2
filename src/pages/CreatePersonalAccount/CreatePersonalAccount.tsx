import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {CreateUserData} from "../../components/forms/createUserData/createUserData";
import './CreatePersonalAccount.scss'

function CreatePersonalAccount() {

    return (
        <>
            <Header/>
            <div className={'СreateUser'}>
                <CreateUserData/>
            </div>
            <Footer/>
        </>
    )
}

export default CreatePersonalAccount