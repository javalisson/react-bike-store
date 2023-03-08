enum BikeCategory {
    Road = 'road',
    Mountain = 'mountain',
    Hybrid = 'hybrid',
}

type Bike = {
    model: string
    category?: BikeCategory,
    price?: number
}

const bikes: Record<BikeCategory, Bike['model'][]> = {
    [BikeCategory.Road]: ['Canyon Ultimate', 'Boardman SLR', 'Specialized S-Works Tarmac', 'Merida Scultura'],
    [BikeCategory.Mountain]: ['Ibis Ripmo', 'Specialized Stumpjumper', 'Yeti SB130 TURQ'],
    [BikeCategory.Hybrid]: ['Canyon Commuter', 'Cannondale Treadwell', 'Marin Fairfax'],
}

// TODO populate the `allBikes` array to include a single list of all bikes in `bikes`
const allBikes: string[] = [];

// console.log(allBikes);

export type {
    BikeCategory,
    Bike,
}

export {
    bikes,
    allBikes,
}