import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCuqs5P1V1e86-UaT4Gf0As1fO2iwICRnQ",
    authDomain: "react-funko-shop.firebaseapp.com",
    projectId: "react-funko-shop",
    storageBucket: "react-funko-shop.appspot.com",
    messagingSenderId: "277562790493",
    appId: "1:277562790493:web:b7029e6f8433866fe3f3b4"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const myCollection = collection(database, "naruto");

export async function getItems() {
    let snapShotDB = await getDocs(myCollection);

    let dataDocs = snapShotDB.docs.map(doc => {
        let docFormatted = { ...doc.data(), id: doc.id }
        return docFormatted;
    });
    return dataDocs;
}


export async function getSingleProduct(idItem) {
    try {
        const docRef = doc(database, "naruto", idItem);
        const docSnapshot = await getDoc(docRef);
        return {...docSnapshot.data(), id: docSnapshot.id}
    } catch (error) {
        console.error(error);
    }
}

export async function getSingleCategory(catParams) {
    const queryCategory = query(myCollection, where("category", "==", catParams));
    const resp = await getDocs(queryCategory);

    let dataDocs = resp.docs.map(doc => {
        let docFormatted = { ...doc.data(), id: doc.id }
        return docFormatted;
    });
    return dataDocs;

}


export default database;
