import './FormCarSelection.scss'
import {carMarks, carMarksPopular, imgCarArr} from "../../contstants/defaultData";
import AppRoutes from "../../contstants/routes";
import {useNavigate} from "react-router-dom";
import Search from "../Search/Search";
import * as React from "react";
import {useState} from "react";

interface Props {
    title: string;
}

function FormCarSelection({title}: Props) {
    const navigate = useNavigate();

    // const [showAll, setShowAll] = useState(false);

    const [currentOption, setCurrentOption] = useState<string>('popular')


    // const [showPopularCar, setCar] = useState<boolean>(false)
    // const showCarHandler = () => setCar(!showPopularCar)

    const renderImgCar = () =>
        imgCarArr.map((img, index) => {
            return <img key={index} src={img} alt={'mark'}/>;
        });

    const renderCars = () =>
        carMarks.map((carMark, index) => {
            return <div onClick={() => navigate(`${AppRoutes.BLOG}/${carMark}`)} key={index}
                        className={'list_car'}>{carMark}</div>;
        });

    const renderPopularCars = () =>
        carMarksPopular.map((carMark, index) => {
            return <div onClick={() => navigate(`${AppRoutes.BLOG}/${carMark}`)} key={index}
                        className={'list_car'}>{carMark}</div>;
        });

    const currentOptionHandler = (e: React.MouseEvent) => {
        setCurrentOption(e.currentTarget.id)
    }
    return (
        <>
            <Search/>
            <div className={'form_car'}>
                <div className={'car-find'}>
                    <h1>Искать по марке</h1>
                    <div className={'btn_Group-form'}>
                        <button id={'popular'}
                                className={currentOption === 'popular' ? 'activeOption' : 'currentOption'}
                                onClick={currentOptionHandler}>Популярные
                        </button>
                        <button id={'all'} className={currentOption === 'all' ? 'activeOption' : 'currentOption'}
                                onClick={currentOptionHandler}>Все марки
                        </button>
                    </div>
                </div>
                {currentOption !== 'all' && <div className={'popularcarimages'}>{renderImgCar()}</div>}
                {/*{!showAll && <div>popular</div>}*/}
                {/*{showAll && <div>all</div>}*/}
                {currentOption === 'all' && <div className={'car_list'}>{renderCars()}</div>}
                {currentOption === 'popular' && <div className={'carMarksPopular'}>{renderPopularCars()}</div>}
                {currentOption !== 'all' &&
                    <button onClick={() => setCurrentOption('all')} className={'btn_allCars'}>Все марки машин</button>}
            </div>
        </>
    )
}

export default FormCarSelection;