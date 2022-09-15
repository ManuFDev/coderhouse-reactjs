import { v4 as uuidv4 } from 'uuid';

const items = [
    {
        id: uuidv4(),
        title: "Funko Pop Anime: Naruto Shippuden Tobi",
        price: 2500,
        img:'/assets/funkos-naruto/funko-tobi.jpg'
    }, {
        id: uuidv4(),
        title: "Funko Pop Pain Almighty Push 934 Gitd Naruto Shippuden",
        price: 2250,
        img:'/assets/funkos-naruto/funko-pain.jpg'
    },
    {
        id: uuidv4(),
        title: "Funko Pop Naruto (Modo Sennin) Naruto: Shippuden",
        price: 3500,
        img:  '/assets/funkos-naruto/funko-naruto-sage-mode.webp'
    },
    {
        id: uuidv4(),
        title: "Funko Pop Kakashi (Lightning Blade): Naruto Shippuden",
        price: 2350,
        img: '/assets/funkos-naruto/funko-kakashi.webp'
    },
    {
        id: uuidv4(),
        title: "Funko Pop Sasuke (Curse Mark): Naruto Shippuden",
        price: 3300,
        img: '/assets/funkos-naruto/funko-sasuke-curse.webp'
    },
    {
        id: uuidv4(),
        title: "Funko Pop Naruto (Six Path): Naruto Shippuden",
        price: 4000,
        img: '/assets/funkos-naruto/funko-naruto-sixpath.webp'
    },
    {
        id: uuidv4(),
        title: "Funko Pop Uchiha Madara Edo Tensei Special Edition",
        price: 4000,
        img: '/assets/funkos-naruto/funko-uchiha-madara-edotensei.webp'
    }
];

export default function getItems() {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve(items)
        }, 2000 )
    })
}
