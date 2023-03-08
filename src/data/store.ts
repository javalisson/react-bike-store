enum BikeCategory {
    Road = 'road',
    Mountain = 'mountain',
    Hybrid = 'hybrid',
}

interface Bike {
    modelName: string
    category?: BikeCategory
    price?: number
    productImage?: string
}

const bikes: Record<BikeCategory, Bike[]> = {
    [BikeCategory.Road]: [
        {
            modelName: 'Ultimate Speed Bike',
            price: 300,
            productImage: './img/bikes-01.png',
        },         {
            modelName: 'Road Warrior 2000',
            price: 350,
            productImage: './img/bikes-02.png',
        },         {
            modelName: 'Cannonball 23',
            price: 400,
            productImage: './img/bikes-03.png',
        },         {
            modelName: 'Storm Chaser',
            price: 450,
            productImage: './img/bikes-04.png',
        },
    ],
    [BikeCategory.Mountain]: [
        {
            modelName: 'Mountain Xplr',
            price: 315,
            productImage: './img/bikes-05.png',
        }, {
            modelName: 'Mega Stomper',
            price: 375,
            productImage: './img/bikes-06.png',
        }, {
            modelName: 'Yeti SB130 TURQ',
            price: 415,
            productImage: './img/bikes-07.png',
        },
    ],
    [BikeCategory.Hybrid]: [
        {
            modelName: 'City Bike 5',
            price: 340,
            productImage: './img/bikes-08.png',
        }, {
            modelName: 'Sunrise',
            price: 340,
            productImage: './img/bikes-09.png',
        }, {
            modelName: 'Pegasus',
            price: 340,
            productImage: './img/bikes-10.png',
        },
    ],
}

// TODO populate the `allBikes` array to include a single list of all bikes in `bikes`
const allBikes: Bike[] = [];

// console.log(allBikes);

export type {
    BikeCategory,
    Bike,
}

export {
    bikes,
    allBikes,
}