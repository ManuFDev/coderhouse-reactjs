import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    addDoc,
    setDoc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDXtJ7tqUWcL0covivSUAahGi3l5elozYY",
    authDomain: "react-funko-nuevo.firebaseapp.com",
    projectId: "react-funko-nuevo",
    storageBucket: "react-funko-nuevo.appspot.com",
    messagingSenderId: "147059831466",
    appId: "1:147059831466:web:a3a45dee5edefac127d6d3"
};


const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const myCollection = collection(database, "funkos");

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
        const docRef = doc(database, "funkos", idItem);
        const docSnapshot = await getDoc(docRef);
        return { ...docSnapshot.data(), id: docSnapshot.id }
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

export async function createBuyOrder(orderData) {
    const collectionRef = collection(database, "orders");
    let respuesta = await addDoc(collectionRef, orderData);
    return respuesta.id
}

export async function exportDataToFirestore() {

    const items = [
        {
            title: "Funko Pop Anime: Naruto Shippuden Tobi",
            price: 2500,
            img: "/assets/funkos-naruto/funko-tobi.jpg",
            category: "naruto"
        },
        {
            title: "Funko Pop Pain Almighty Push 934 Gitd Naruto Shippuden",
            price: 2250,
            img: "/assets/funkos-naruto/funko-pain.jpg",
            category: "naruto"
        },
        {
            title: "Funko Pop Naruto (Modo Sennin) Naruto: Shippuden",
            price: 3500,
            img: "/assets/funkos-naruto/funko-naruto-sage-mode.webp",
            category: "naruto"
        },
        {
            title: "Funko Pop Kakashi (Lightning Blade): Naruto Shippuden",
            price: 2350,
            img: "/assets/funkos-naruto/funko-kakashi.webp",
            category: "naruto"
        },
        {
            title: "Funko Pop Sasuke (Curse Mark): Naruto Shippuden",
            price: 3300,
            img: "/assets/funkos-naruto/funko-sasuke-curse.webp",
            category: "categoria2"
        },
        {
            title: "Funko Pop Naruto (Six Path): Naruto Shippuden",
            price: 4000,
            img: "/assets/funkos-naruto/funko-naruto-sixpath.webp",
            category: "categoria2"
        },
        {
            title: "Funko Pop Uchiha Madara Edo Tensei Special Edition",
            price: 4000,
            img: "/assets/funkos-naruto/funko-uchiha-madara-edotensei.webp",
            category: "categoria2"
        },
    ];

    const collectionRef = collection(database, "funkos");

    for (let item of items) {
        const newDoc = doc(collectionRef);
        setDoc(newDoc, item)
            .then(res => {
                console.log("documento agregado", "respuesta:", res)
            })
            .catch((error => console.log("eror obteniendo los datos:", error)))
    }
}

export default database;
