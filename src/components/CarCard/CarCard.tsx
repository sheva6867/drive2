import {useMemo} from "react";
import {DocumentData} from "firebase/firestore";
import './CarCard.scss'

interface Props {
    cars: DocumentData[];
}

function CarCard({cars}: Props) {
    const renderCarCard = useMemo(() => {
        return cars.map((car) => {
            return (
                <div className={'carCard'}>
                    <h3>{car.title}</h3>
                    <div className={'docImg'}>
                        <p>{car.town}</p>
                        <p>{car.year}</p>
                    </div>
                    <div className={'doc_text'}>
                        <p>{car.price}</p>
                        <p>{car.carrency}</p>
                    </div>
                </div>
            )
        })
    }, [cars])
    return (
        <>
            {renderCarCard}
        </>
    );
}

export default CarCard;