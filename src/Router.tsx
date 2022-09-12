import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage";
import AppRoutes from "./contstants/routes";
import BlogPage from "./pages/BlogPage/BlogPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import CreatePersonalAccount from "./pages/CreatePersonalAccount/CreatePersonalAccount";
import AuthorizedUserPage from "./pages/AuthorizedUserPage/AuthorizedUserPage";
import AuthorizedBlogAddPage from "./pages/AuthorizedBlogAddPage/AuthorizedBlogAddPage";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path={AppRoutes.AuthorizedBlogAdd_PAGE} element={<AuthorizedBlogAddPage/>}/>
                <Route path={AppRoutes.AuthorizedUser_PAGE} element={<AuthorizedUserPage/>}/>
                <Route path={AppRoutes.CREATE_PERSONALAccount} element={<CreatePersonalAccount/>}/>
                <Route path={AppRoutes.REGISTER_PAGE} element={<RegistrationPage/>}/>
                <Route path={AppRoutes.SIGN_PAGE} element={<SignInPage/>}/>
                <Route path={AppRoutes.START_PAGE} element={<StartPage/>}/>
                <Route path={`${AppRoutes.BLOG}/:id`} element={<BlogPage/>}/>
                <Route path={AppRoutes.PAGE_404} element={<div>404 page</div>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;
