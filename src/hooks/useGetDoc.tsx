import {collection, doc, DocumentData, getDoc, getDocs} from "firebase/firestore";
import {activeUserUID, db, storage} from "../App";
import {getDownloadURL, listAll, ref} from "firebase/storage";

export const getUserInfo = () => {

    const getPersonalDetails = async (uid: string) => {
        try {
            const docRef = doc(db, "users", uid);
            const res: DocumentData = await getDoc(docRef);
            return res.data()
        } catch (e) {
            console.log(e)
        }
    }
    const getPersonalBlogDetails = async (uid: string) => {

        try {
            const res: any = []
            const docRef = collection(db, 'users', uid, 'personal_blog');
            const querySnapshot = await getDocs(docRef);

            // console.log(res.data(), 're1111s')
            // return res.data()
            querySnapshot.forEach((doc) => {
                res.push(doc.data())
                res.sort((a: any, b: any) => {
                    return b.date - a.date
                })
            });
            // const renderBlogTime = res.sort((a: any, b: any) => {
            //     return b.date - a.date
            // });
            // console.log(renderBlogTime, 'сортировка')
            console.log(res, 'bloggggg')
            return res
        } catch (e) {
            console.log(e)
        }
    }

    const getPersonalBlogImg = async (uid: string) => {
        try {
            const res = await getDownloadURL(ref(storage, `/blog/${activeUserUID()}/Passat.jpg`));
            console.log(res, 'res')
            return res
        } catch (e) {
            console.log(e)
        }

    }

    const getPersonalImage = async (uid: string) => {
        try {
            const listRef = ref(storage, `${activeUserUID()}`);
            const imageRefList = await listAll(listRef);

            const urlsPromise = imageRefList.items.map(itemRef => getDownloadURL(ref(storage, itemRef.fullPath)))
            return Promise.all(urlsPromise)


            // await listAll(listRef)
            //     .then((res) => {
            //         console.log(res, 'ref')
            //
            //         res.prefixes.forEach((folderRef) => {
            //             // All the prefixes under listRef.
            //             // You may call listAll() recursively on them.
            //
            //         });
            //         res.items.forEach(async (itemRef) => {
            //             console.log(await getDownloadURL(ref(storage, itemRef.fullPath)));
            //             // All the items under listRef.
            //             console.log(itemRef, 'itemRef')
            //         });
            //     }).catch((error) => {
            //         // Uh-oh, an error occurred!
            //     });


            // const res = await getDownloadURL(ref(storage, `/${activeUserUID()}`));
            // console.log(res, 'res')
            // return res
        } catch (e) {
            console.log(e)
        }
    }

    return {
        getPersonalBlogImg,
        getPersonalBlogDetails,
        getPersonalImage,
        getPersonalDetails
    }
};