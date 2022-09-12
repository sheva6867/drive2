import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../App";

function useCars() {
    const getCarsByMark = async (mark: string) => {
        const carsRef = collection(db, 'cars')
        const q = query(carsRef, where('mark', '==', mark))
        const querySnapShot = await getDocs(q)
        const list = querySnapShot.docs.map(doc => doc.data())
        return list;
    }
    return {getCarsByMark}
}

export default useCars;