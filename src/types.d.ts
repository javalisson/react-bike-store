export enum BikeCategory {
    Road = 'road',
    Mountain = 'mountain',
    Hybrid = 'hybrid',
}

export interface Bike {
    id: number
    modelName: string
    category?: BikeCategory
    price?: number
    productImage?: string
}

export interface CartItem extends Bike {
    quantity: number
    subtotal: number

}

export interface CartData {
    items: CartItem[]
    total: number
}

export interface CartDataContextType {
    cartData: CartData
    addToCart: (bike: Bike) => void
};
