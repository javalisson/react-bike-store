import { Bike } from "./data/store";

interface CartItem extends Bike {
    quantity: number
    subtotal: number

}

interface CartInfo {
    items: CartItem[]
    total: number
}

// mock data
// const cartInfo: CartInfo = {
//     items: [
//         {
//             modelName: 'Ultimate Speed Bike',
//             price: 300,
//             quantity: 1,
//             subtotal: 300,
//         }, {
//             modelName: 'Mountain Xplr',
//             price: 315,
//             quantity: 2,
//             subtotal: 630,
//         },
//     ],
//     total: 930,
// };

const cartInfo: CartInfo = {
    items: [],
    total: 0
};

const Cart = () => {
    const data: CartInfo = cartInfo;
    if (data.items.length > 0) return (
        <div>
            Items on Cart
            <ul>
                {data.items.map(item => <li key={item.modelName.toLocaleLowerCase().replace(' ', '-')}>{item.modelName} x {item.quantity} Subtotal: USD {item.subtotal}</li>)}
            </ul>
            Total: USD {data.total}
        </div>
    );
    return <div>Cart is empty</div>
};

export default Cart;