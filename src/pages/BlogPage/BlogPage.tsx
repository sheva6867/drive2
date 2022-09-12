import BlogMenu from "../../components/BlogMenu/BlogMenu";
import Header from "../../components/Header/Header";
import ContainerBlog from "../../components/ContainerBlog/ContainerBlog";
import './BlogPage.scss'
import Footer from "../../components/Footer/Footer";

function BlogPage() {
    return (
        <div className={'blog_wrapper'}>
            <Header/>
            <div className={'BlogPages'}>
                <BlogMenu/>
                <ContainerBlog/>
            </div>
            <Footer/>
        </div>
    )
}

export default BlogPage;