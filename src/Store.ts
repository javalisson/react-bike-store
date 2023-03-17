import { Bike, BikeCategory } from './types.d';

const bikes: Record<BikeCategory, Bike[]> = {
    [BikeCategory.Road]: [
        {
            id: 1,
            modelName: 'Ultimate Speed Bike',
            price: 300,
            productImage: './img/bikes-01.png',
        }, {
            id: 2,
            modelName: 'Road Warrior 2000',
            price: 350,
            productImage: './img/bikes-02.png',
        }, {
            id: 3,
            modelName: 'Cannonball 23',
            price: 400,
            productImage: './img/bikes-03.png',
        }, {
            id: 4,
            modelName: 'Storm Chaser',
            price: 450,
            productImage: './img/bikes-04.png',
        },
    ],
    [BikeCategory.Mountain]: [
        {
            id: 5,
            modelName: 'Mountain Xplr',
            price: 315,
            productImage: './img/bikes-05.png',
        }, {
            id: 6,
            modelName: 'Mega Stomper',
            price: 375,
            productImage: './img/bikes-06.png',
        }, {
            id: 7,
            modelName: 'Yeti SB130 TURQ',
            price: 415,
            productImage: './img/bikes-07.png',
        },
    ],
    [BikeCategory.Hybrid]: [
        {
            id: 8,
            modelName: 'City Bike 5',
            price: 340,
            productImage: './img/bikes-08.png',
        }, {
            id: 9,
            modelName: 'Sunrise',
            price: 340,
            productImage: './img/bikes-09.png',
        }, {
            id: 10,
            modelName: 'Pegasus',
            price: 340,
            productImage: './img/bikes-10.png',
        },
    ],
}

const allBikes: Bike[] = Object.values(bikes).flat();

// console.log(allBikes);

export {
    bikes,
    allBikes,
};
