import { Bike } from "./data/store";
import "./Product.css";

const onAddToCart = (product: Bike) => {
    console.log("On add to cart", product);
};

const Product: React.FC<{data: Bike}> = ({data}) => {
    const product: Bike = data;
    return (<div className="product">
        <img className="product__image" src={product.productImage} alt="" />
        <div className="product__info">
            <span className="product__model">
                {product.modelName}
            </span>
            <span>USD {product.price}</span>
        </div>
        <div className="product_cta">
            <button onClick={() => onAddToCart(product)}>Add to cart</button>
        </div>
    </div>);
};

export default Product;