import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import {addDoc, collection, doc, serverTimestamp, setDoc} from "firebase/firestore";
import {auth, db} from "../App";
import {useNavigate} from "react-router-dom";
import AppRoutes from "../contstants/routes";
import {FormikValues} from "formik";

export const useAuth = () => {
    const navigate = useNavigate()
    const signInUser = async (email: string, password: string) => {
        try {
            return await signInWithEmailAndPassword(auth, email, password)
        } catch (e) {
            console.log(e)
        }
    }

    const forgotPassword = async (email: string) => {
        try {
            return await sendPasswordResetEmail(auth, email)
        } catch (e) {
            console.log(e)
        }
    }

    const createAccount = async (email: string, password: string) => {
        try {
            return await createUserWithEmailAndPassword(auth, email, password)
        } catch (e) {
            console.log(e)
        }
    }

    const exitAccount = async () => {
        try {
            await signOut(auth)
            navigate(AppRoutes.START_PAGE)
        } catch (e) {
            console.log(e)
        }
    }

    const setDocUser = async (data: FormikValues, uid: string) => {
        try {
            return await setDoc(doc(db, "users", uid), data)
        } catch (e) {
            console.log(e)
        }
    }
    const setBlogDocUser = async (data: FormikValues, uid: string) => {
        try {
            // return await setDoc(doc(db, "personal_blog", uid), data)
            // const sendData = {...data, date: serverTimestamp()}
            // console.log(sendData, 'senddata')
            await addDoc(collection(db, 'users', uid, 'personal_blog'), {...data, date: serverTimestamp()})
            // const date = new Date;
            // console.log(date)
            // const usersCollectionRef = collection(db, 'users', 'personal_blog', uid);

        } catch (e) {
            console.log(e)
        }
    }
    return {
        setBlogDocUser,
        setDocUser,
        signInUser,
        forgotPassword,
        createAccount,
        exitAccount,
    }
};