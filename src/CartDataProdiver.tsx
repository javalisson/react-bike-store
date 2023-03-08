import React, { createContext, PropsWithChildren, useState } from "react";
import { Bike, CartItem, CartData, CartDataContextType } from "./types";

let initialCartData: CartData;

// mock data
const mockCartData: CartData = {
    items: [
        {
            id: 1,
            modelName: 'Ultimate Speed Bike',
            price: 300,
            quantity: 1,
            subtotal: 300,
        }, {
            id: 5,
            modelName: 'Mountain Xplr',
            price: 315,
            quantity: 2,
            subtotal: 630,
        }, {
            id: 9,
            modelName: 'Sunrise',
            price: 340,
            quantity: 3,
            subtotal: 1020,
        },
    ],
    total: 1950,
};
// initialCartData = mockCartData;

const emptyCart: CartData = {
    items: [],
    total: 0
};
initialCartData = emptyCart;

type Props = {
    children?: React.ReactNode
};

const CartDataContext = createContext<CartDataContextType | null>(null);

const CartDataProvider: React.FC<PropsWithChildren<Props>> = ({children}) => {
    const [cartData, setCartData] = useState<CartData>(initialCartData);

    const contextValue: CartDataContextType = {
        cartData: cartData,
        addToCart: function (bike: Bike): void {
            const foundItemIndex: number = cartData.items.findIndex(item => item.id === bike.id);
            const foundItem = cartData.items[foundItemIndex];
            let newItem: CartItem;
            let newData: CartData;
            let newItems: CartItem[];
            if (foundItem) {
                const newQuantity: number = foundItem.quantity + 1;
                const newSubtotal: number = newQuantity * (bike.price as number);
                newItem = { ...bike, quantity: newQuantity, subtotal: newSubtotal };
                newItems = cartData.items.map((item, index) => index === foundItemIndex ? newItem : item)
                
            } else {
                newItem = { ...bike, quantity: 1, subtotal: bike.price as number };
                newItems = [...cartData.items, { ...newItem}];
            }
            const newTotal = newItems.reduce((acc, cur) => acc + cur.subtotal, 0);
            newData = { items: newItems, total: newTotal };
            setCartData({ ...newData });
        }
    };

    return (
        <CartDataContext.Provider value={contextValue}>
            {children}
      </CartDataContext.Provider>
    );
};

export type {
    CartItem,
    CartData,
    CartDataContextType,
}

export { 
    CartDataContext,
    CartDataProvider,
} ;