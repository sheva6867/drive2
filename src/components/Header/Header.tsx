import './Header.scss'
import Routes from "../../contstants/routes";
import {Link, useLocation} from "react-router-dom";


function Header() {
    const {pathname} = useLocation();
    const showSign = pathname !== Routes.SIGN_PAGE;
    const register = pathname !== Routes.SIGN_PAGE;
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
                    <div className={'auth_button'}>
                        {showSign && <Link className={'login_btn'} to={Routes.SIGN_PAGE}>Войти</Link>}
                        {register && <Link className={'create_btn'} to={Routes.REGISTER_PAGE}>Зарегистрироваться</Link>}
                    </div>
                </div>
            </div>
            {/*<Search/>*/}
        </>
    )
}


export default Header;