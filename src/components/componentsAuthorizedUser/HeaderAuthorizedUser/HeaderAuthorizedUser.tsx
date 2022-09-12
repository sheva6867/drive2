import './HeaderAuthorizedUser.scss'
import Routes from "../../../contstants/routes";
import {Link, useLocation} from "react-router-dom";
import hui from '../../../assets/svg/message.svg'
import * as React from "react";
import {useState} from "react";
import ModalSettings from "../../Modal/ModalSettings";

function HeaderAuthorizedUser() {
    const {pathname} = useLocation();
    const showSign = pathname !== Routes.SIGN_PAGE;
    const register = pathname !== Routes.SIGN_PAGE;

    const [showModal, setShowModal] = useState<boolean>(false)
    const showModalHandler = () => setShowModal(!showModal)

    return (
        <>
            <div className={'header_wrapper'}>
                <div className={'header'}>
                    <div className={'logo'}>
                        <Link className={'logoImg'} to={Routes.START_PAGE}>
                    <span>
                        DRIVE2.UA
                    </span>
                        </Link>
                    </div>
                    <div className={'search'}>
                        <link rel="stylesheet"
                              href="src/components/componentsAuthorizedUser/HeaderAuthorizedUser/HeaderAuthorizedUser"/>
                        <form
                            action="src/components/componentsAuthorizedUser/HeaderAuthorizedUser/HeaderAuthorizedUser">
                            <input className={'search_input'} placeholder={'Искать здесь...'} type="text"/>
                            <button className={'search_btnN'} type={"submit"}>Найти</button>
                        </form>
                    </div>
                    <div className={'auth_button'}>
                        <Link className={'message'} to={Routes.SIGN_PAGE}><img src={hui} alt=""/>
                        </Link>

                        <button className={'notification'}/>
                        <button className={showModal ? 'settings_active' : 'settings'} onClick={showModalHandler}/>
                        {showModal && <ModalSettings/>}
                        {/*{showSign && <Link className={'login_btn'} to={Routes.SIGN_PAGE}>Войти</Link>}*/}
                        {/*{register && <Link className={'create_btn'} to={Routes.REGISTER_PAGE}>Зарегистрироваться</Link>}*/}
                    </div>
                </div>
            </div>
            {/*<Search/>*/}
        </>
    )
}


export default HeaderAuthorizedUser;