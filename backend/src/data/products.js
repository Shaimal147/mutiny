const products = [
    {
        id: crypto.randomUUID(),
        image: "/MedievalClaymore01_700x700.jpg",
        name: "Claymore Sword - New",
        rating: {
            stars: 4.5,
            count: 87
        },
        priceCents: 1090,
        keywords: ["Claymore", "Swords", "Weapons"]

    },
    {
        id: crypto.randomUUID(),
        image: "/images.jpeg",
        name: "Battle Axe - New",
        rating: {
            stars: 4.0,
            count: 19
        },
        priceCents: 860,
        keywords: ["Axe", "Edge", "Weapons"]

    },

]

export default products