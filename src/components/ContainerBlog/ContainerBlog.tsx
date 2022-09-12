import './ContainerBlog.scss'
import useCars from "../../hooks/useCars";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {DocumentData} from "firebase/firestore";
import CarCard from "../CarCard/CarCard";

function ContainerBlog() {
    //запрос на получение данных с колекции firebase
    const {getCarsByMark} = useCars();
    //хранение url
    const {id} = useParams();
    //забираем данные по id тоесть по марке
    const [cars, setCars] = useState<DocumentData[]>([])
    useEffect(() => {
        getCarsByMark(`${id}`).then(data => setCars(data))
        console.log(cars, 'cars')
    }, [])


    return (
        <div className={'blog_page'}>
            <div className={'blog_header'}>
                <div className={'car_id'}>
                    <h2>Бортжурналы</h2>
                    <h3>Марка авто</h3>
                </div>
                <div className={'blog_radiogroup'}>
                    <a href=""><span>По лайкам</span></a>
                    <a href=""><span>По коментариям</span></a>
                    <a href=""><span>По дате</span></a>
                </div>
            </div>
            <div className={'blog_lenta'}>
                <div className={'lenta_main'}>
                    <div className={'card_lenta'}>
                        <div className={'block_doc'}>
                            <CarCard cars={cars}/>
                        </div>
                    </div>
                </div>
                <div className={'lenta_sidebar'}>
                </div>
            </div>
        </div>
    )
}

export default ContainerBlog