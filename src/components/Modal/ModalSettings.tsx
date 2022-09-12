import './ModalSettings.scss'
import React from "react";
import {Link} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";


function ModalSettings() {
    const {exitAccount} = useAuth()

    return (
        <div className={'modal-settings'}>
            <Link rel="stylesheet" to="/asd">Редактирование профиля</Link>
            <Link rel="stylesheet" to="/asd">Уведомления и сообщения</Link>
            <Link rel="stylesheet" to="/asd">Черный список</Link>
            <Link rel="stylesheet" to="/asd">Привязка к соцсетям</Link>
            <Link className={'border'} rel="stylesheet" to="/asd">Настройка Ленты</Link>
            <Link rel="stylesheet" to="/asd">Подписка на машины</Link>
            <Link rel="stylesheet" to="/asd">Подписка на людей</Link>
            <Link className={'border'} rel="stylesheet" to="/asd">Подписка на модели и поколения</Link>
            <Link className={'border'} rel="stylesheet" to="/asd">Перейти на Премиум-аккаунт</Link>
            {/*<Link rel="stylesheet" to="/asd">Выход</Link>*/}
            <button onClick={exitAccount}>Выход</button>
        </div>
    )
}

export default ModalSettings;