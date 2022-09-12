import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import React, {useEffect} from "react";
import FormCarSelection from "../../components/FormCarSelection/FormCarSelection";
import './StartPage.scss'
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../App";
import {useNavigate} from "react-router-dom";
import AppRoutes from "../../contstants/routes";

function StartPage() {

    const mainTitle = 'CAR'

    const navigate = useNavigate()

    useEffect(() => {
        const listener = onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                navigate(AppRoutes.AuthorizedUser_PAGE)
            } else {
                navigate(AppRoutes.START_PAGE)
            }
        })
        return () => listener()
    }, [])

    return (
        <div className={'startPage'}>
            <Header/>
            <FormCarSelection title={mainTitle}/>
            <Footer/>
        </div>
    )
}

export default StartPage;