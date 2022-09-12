import './AuthorizedUserPage.scss'
import BlogMenu from "../../components/BlogMenu/BlogMenu";
import Footer from "../../components/Footer/Footer";
import HeaderAuthorizedUser from "../../components/componentsAuthorizedUser/HeaderAuthorizedUser/HeaderAuthorizedUser";
import UserBlock from "../../components/componentsAuthorizedUser/UserBlock/UserBlock";
import {PersonalBlog} from "../../components/componentsAuthorizedUser/PersonalBlog/PersonalBlog";


function AuthorizedUserPage() {
    return (
        <div className={'blog_wrapper'}>
            <HeaderAuthorizedUser/>
            <div className={'BlogPages'}>
                <BlogMenu/>
                <PersonalBlog/>
                <UserBlock/>
            </div>
            <Footer/>
        </div>
    )
}

export default AuthorizedUserPage
