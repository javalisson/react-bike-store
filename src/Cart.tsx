import { CartData } from "./types";
import "./Cart.css";


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
        },
    ],
    total: 930,
};
const cartData = mockCartData;

// const emptyCartData: CartData = {
//     items: [],
//     total: 0
// };
// const cartData = emptyCartData;

const Cart = () => {
    if (cartData.items.length > 0) return (
        <div className="cart__container">
            <h2>Items on Cart</h2>
            <ul className="cart__items-container">
                {cartData.items.map(item => (
                    <li className="cart__item" key={item.id}>
                        <span className="cart__item-name-quantity">
                            <span className="cart__item-model-name">{item.modelName}</span>
                            x <span>{item.quantity}</span>
                        </span>
                        <span className="cart__item-subtotal"><span className="cart__item-subtotal-label">Subtotal:</span> USD&nbsp;<span>{item.subtotal}</span></span>
                    </li>
                ))}
            </ul>
            <span className="cart__total-container"><span className="cart__total-label">Total:</span> <span>USD&nbsp;{cartData.total}</span></span>
        </div>
    );
    return <div className="cart__container">Cart is empty</div>
};

export default Cart;