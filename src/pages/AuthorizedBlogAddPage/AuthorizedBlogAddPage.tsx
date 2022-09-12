import HeaderAuthorizedUser from "../../components/componentsAuthorizedUser/HeaderAuthorizedUser/HeaderAuthorizedUser";
import BlogMenu from "../../components/BlogMenu/BlogMenu";
import Footer from "../../components/Footer/Footer";
import {BlogAdd} from "../../components/componentsAuthorizedUser/BlogAdd/BlogAdd";
import './AuthorizedBlogAddPage.scss'

function AuthorizedBlogAddPage() {
    return (
        <div className={'blogAdd_wrapper'}>
            <HeaderAuthorizedUser/>
            <div className={'BlogAddPages'}>
                <BlogMenu/>
                <BlogAdd/>
            </div>
            <Footer/>
        </div>
    )
}

export default AuthorizedBlogAddPage