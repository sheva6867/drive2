import React from 'react';
import './App.css';
import AppRouter from "./Router";
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import firebaseConfig from "./contstants/firebaseConfig";

const application = initializeApp(firebaseConfig);
const auth = getAuth(application)
const storage = getStorage(application);
const db = getFirestore(application);
export const activeUserUID = () => auth.currentUser?.uid || '';

export {application, auth, db, storage}

function App() {
    return (
        <div className="App">
            <AppRouter/>
        </div>
    );
}

export default App;
