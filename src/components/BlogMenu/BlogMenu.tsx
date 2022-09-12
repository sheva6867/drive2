import React from "react";
import './BlogMenu.scss'
import {Link} from "react-router-dom";
import Routes from "../../contstants/routes";

function BlogMenu() {
    return (
        <div className={'blog_menu'}>
            <Link to={Routes.PAGE_404}>Купить машину</Link>
            <Link to={Routes.PAGE_404}>Машины</Link>
            <Link to={Routes.PAGE_404}>Бортжурналы</Link>
            <Link to={Routes.PAGE_404}>Сообщества</Link>
            <Link to={Routes.PAGE_404}>Автосервисы и магазины</Link>
            <Link to={Routes.PAGE_404}>Барахолка</Link>
            <Link to={Routes.PAGE_404}>Самое интересное</Link>
            <Link to={Routes.PAGE_404}>Машины в продаже</Link>
        </div>
    )
}


export default BlogMenu