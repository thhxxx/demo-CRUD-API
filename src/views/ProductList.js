import "../assets/css/product-list.scss"
import {Products} from "../components/Products";

export const ProductList = () => {
    return (
        <div className="product-list">
            <div className="left">
                <div className="col">
                    <h1 className="col__title">
                        Filter
                    </h1>
                    <div className="content">

                    </div>
                </div>
            </div>
            <div className="right">
                <div className="col">
                    <h1 className="col__title">
                        Product List
                    </h1>
                    <div className="content">
                        <Products/>
                    </div>
                </div>
            </div>
        </div>
    )
}