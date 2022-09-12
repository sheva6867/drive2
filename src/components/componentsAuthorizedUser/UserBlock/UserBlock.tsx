import './UserBlock.scss'
import img from '../../../assets/svg/volkswagen.svg'
import {getUserInfo} from "../../../hooks/useGetDoc";
import * as React from "react";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../../App";
import {UserData} from "../../../types";
import {useNavigate} from "react-router-dom";
import AppRoutes from "../../../contstants/routes";

function UserBlock() {
    const navigate = useNavigate();
    const showEditing = () => navigate(AppRoutes.CREATE_PERSONALAccount)

    const {getPersonalDetails} = getUserInfo()
    const [personalDetails, setPersonalDetails] = useState<UserData>({
        myCar: '',
        name: '',
        sex: '',
        nickname: '',
        surname: '',
        country: '',
        region: ''
    })
    const {myCar, nickname, name, sex, surname, country, region} = personalDetails
    useEffect(() => {
        const listener = onAuthStateChanged(auth, (user) => {
            if (user) {
                getPersonalDetails(user.uid).then(data => setPersonalDetails(data))

            } else {
                console.log('signout')
            }
        })
        return () => listener()
    }, [])

    const [active, setActive] = useState<{ [key: string]: boolean }>({1: true, 2: false, 3: false})
    const activeHandler = (id: string) => {
        setActive(prevState => ({...prevState, [id]: !prevState[id]}))
    }

    // const [showContent, setShowContent] = useState<boolean>(false)
    // const showContentHandler = () => setShowContent(!showContent)
    //
    // const [showCommunities, setShowCommunities] = useState<boolean>(false)
    // const showCommunitiesHandler = () => setShowCommunities(!showCommunities)
    //
    // const [showSales, setShowSales] = useState<boolean>(false)
    // const showSalesHandler = () => setShowSales(!showSales)


    return (
        <div className={'UserMenu'}>
            <div className={'user_card'}>
                <div className={'user_Avatar'}>
                    <img src={img} alt=""/>
                </div>
                <div className={"user_name"}>
                    <a href=""></a>
                    <p>Ник {nickname}</p>
                    <p>АВто {myCar}</p>
                    <p>{name}</p>
                    <p>dcdcdc</p>
                    <div className={'user_status'}><p>В сети</p></div>
                </div>
                <button onClick={showEditing} className={'btn_settings'}>Редактировать профиль</button>
            </div>

            <div className={'wrapper'}>

                <div className={active['1'] ? 'content1' : 'content'}>
                    <div onClick={() => activeHandler('1')}
                         className={active['1'] ? 'content_parent1' : 'content_parent'}>
                        Обо мне
                    </div>
                    <div className={active['1'] ? 'content_child1' : 'content_child'}>
                        <p className={'show'}>Восемь лет на сайте</p>
                        <p className={'show'}>Комментариев не писал</p>
                    </div>
                </div>

                <div className={active[2] ? 'content1' : 'content'}>
                    <div onClick={() => activeHandler('2')}
                         className={active[2] ? 'content_parent1' : 'content_parent'}>Сообщества
                    </div>
                    <div className={active[2] ? 'content_child1' : 'content_child'}>
                        <p>Сообщества текст</p>
                    </div>
                </div>

                <div className={active['3'] ? 'content1' : 'content'}>
                    <div onClick={() => activeHandler('3')}
                         className={active['3'] ? 'content_parent1' : 'content_parent'}>Объявления
                    </div>
                    <div className={active['3'] ? 'content_child1' : 'content_child'}>
                        <p>Объявления текст</p>
                    </div>
                </div>
            </div>
            {/*<div className={'test'}>*/}
            {/*    <div onClick={showModalHandler} className={'parent'}>parrent</div>*/}
            {/*    {showModal && <div className={'child'}>child</div>}*/}
            {/*</div>*/}
            {/*<button className={showModal ? 'settings_active' : 'settings'} onClick={showModalHandler}/>*/}
            {/*{showModal && <ModalSettings/>}*/}


            {/*const [state, setState] = useState<string>('1')*/}
            {/*const showSalesHandler = () => setState(state)*/}


            {/*<div id={'2'} onClick={(e) => setState(e.currentTarget.id)}*/}
            {/*     className={state === '2' ? 'communities' : 'communities1'}>*/}
            {/*    <div*/}
            {/*        className={state === '2' ? 'communities_parent' : 'communities_parent1'}>Сообщества*/}
            {/*    </div>*/}
            {/*    <div className={state === '2' ? 'communities_child' : 'communities_child2'}>*/}
            {/*        <p>xcxcxcxcxcxcxcxcxc</p>*/}
            {/*    </div>*/}
            {/*</div>*/}


        </div>
    )
}

export default UserBlock