import './PersonalBlog.scss'
import {getUserInfo} from "../../../hooks/useGetDoc";
import {useEffect, useState} from "react";
import {UserData} from "../../../types";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../../App";
import {UseFirebaseStorage} from "../../../hooks/useFirebaseStorage";
import AppRoutes from "../../../contstants/routes";
import {useNavigate} from "react-router-dom";
import BlogItem from "../../BlogItem/BlogItem";

export function PersonalBlog() {
    const {uploadFileAsync, validateFileSize, extractFile} = UseFirebaseStorage()

    const {getPersonalDetails, getPersonalImage, getPersonalBlogDetails, getPersonalBlogImg} = getUserInfo()

    const [personalImage, setPersonalImage] = useState<Array<string> | undefined>()

    const [personalBlogDetailsImg, setPersonalBlogDetailsImg] = useState<string>('')
    console.log(personalBlogDetailsImg, 'img')

    const [personalDetails, setPersonalDetails] = useState<UserData>({
        myCar: '',
        name: '',
        sex: '',
        nickname: '',
        surname: '',
        country: '',
        region: ''
    })
    const [personalBlog, setPersonalBlog] = useState<Array<any>>()
    console.log(personalBlog, 'BLOG')
    const renderBlogItems = () => personalBlog?.map((item, index) => {
        return <BlogItem key={index} title={item.title} text={item.text} nickname={nickname}
                         image={personalBlogDetailsImg}/>
    })
    // const renderBlogTime = personalBlog?.sort((a: { data: number; }, b: { data: number; }) => a.data - b.data)
    // console.log(renderBlogTime, 'сортировка')
    //Получение данных
    // const [personalBlog, setPersonalBlog] = useState<UserBlog>({
    //     text: '',
    //     title: ''
    // })
    // const {text, title} = personalBlog
    // console.log(text, title, 'res')


    const {myCar, nickname, name, sex, surname, country, region} = personalDetails
    useEffect(() => {
        const listener = onAuthStateChanged(auth, async (user) => {
            if (user) {
                getPersonalDetails(user.uid).then(data => setPersonalDetails(data))
                getPersonalBlogDetails(user.uid).then(data => {
                    if (data) {
                        setPersonalBlog(data)
                    }
                })
                getPersonalBlogImg(user.uid).then((data) => {
                    if (data) {
                        setPersonalBlogDetailsImg(data)
                    }
                })
                // const urls = await getPersonalImage(user.uid)
                // setPersonalImage(urls)
                // console.log(urls)
            } else {
                console.log('signout')
            }
        })
        return () => listener()
    }, [])

    const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {

        try {
            if (!extractFile(e)) {
                return;
            }

            if (!validateFileSize(e, 3)) {
                new Error('The file size could not be saved because it exceeded 3MB, the maximum allowed size to upload');
            }

            await uploadFileAsync(e);


        } catch (error) {
            console.log(error)
        }
    };

    const navigate = useNavigate();
    const showHandler = () => navigate(AppRoutes.AuthorizedBlogAdd_PAGE)

    return (
        <div className={'blog_page'}>
            <div className={'blog_header'}>
                <div className={'car_id'}>
                    <h2>Профиль {nickname}</h2>
                    <h3>Машины</h3>
                </div>
            </div>
            <div className={'blog_lenta'}>

                <div className={'lenta_main'}>
                    <div className={'card_lenta'}>
                        {/*<img src={passat} alt=""/>*/}
                        {/*<img src={personalImage} alt=""/>*/}
                        <img
                            src={Array.isArray(personalImage) && personalImage.length > 0 && personalImage[0] || ''}
                            alt=""/>
                        {/*{Array.isArray(personalImage) && personalImage.length > 0 && personalImage.map((image, key) =>*/}
                        {/*    <img key={key}*/}
                        {/*         src={image} alt=""/>)}*/}
                        {/*<img src={personalImage} alt=""/>*/}
                    </div>
                    <div className={'btn_Group'}>
                        <button className={'btn'}>Написать про машину</button>
                        <div>и завести бортовой журнал</div>
                    </div>
                    <input
                        className="inputFile"
                        id="resumeIcon"
                        type="file"
                        accept=".png, .jpeg, .pdf"
                        onChange={(e) => onChangeHandler(e)}
                    />
                </div>
            </div>

            <div className={'personal_blog'}>
                <div className={'details_blog'}>
                    <h2>Личный блог</h2>
                    <button onClick={showHandler} className={'btn_blog'}>Написать в блог</button>
                </div>
                <div className={'component_blog'}>
                    {renderBlogItems()}
                    {/*<h2>В блоге пока ничего нет</h2>*/}
                    {/*<h2>{title}</h2>*/}
                    {/*<h3>{text}</h3>*/}
                    {/*<h3> {personalBlog?.map(personalBlog => <h2>{personalBlog.text}</h2>)}</h3>*/}
                    {/*<h3>{text}</h3>*/}
                    {/*<div><img className={'personal_BlogImg'} src={personalBlogDetailsImg} alt=""/></div>*/}
                </div>
            </div>

        </div>
    )
}
