import { allBikes } from "./data/store";
import Product from "./Product";
import './ProductList.css';

const ProductList = () => {
    return <div className="product-list">
            <h2>Products</h2>
        {
            allBikes.length > 0 ?
                <ul className="product-list__list-container">
                    {
                        allBikes.map(bike => 
                            <li className="product-list__list-item" key={bike.modelName.toLocaleLowerCase().replace(' ', '-')}>
                                <Product data={bike} />
                            </li>)}
                </ul>
                : <div>No products to display</div>
        }
    </div>
};



export default ProductList;
