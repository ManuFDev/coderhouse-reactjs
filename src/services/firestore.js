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
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
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
            .catch((error => console.log("error obteniendo los datos:", error)))
    }
}

export default database;
