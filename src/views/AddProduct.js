import "../assets/css/add-product.scss"
import {AddNew} from "../components/form-input/AddNew";
import {ProductPreview} from "../components/ProductPreview";

export const AddProduct = () => {
    return (
        <div className="add-product">
            <div className="left">
                <div className="col">
                    <h1 className="col__title">
                        Add Product
                    </h1>
                    <div className="content">
                        <AddNew/>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="col">
                    <h1 className="col__title">
                        Preview
                    </h1>
                    <div className="content">
                        <ProductPreview/>
                    </div>
                </div>
            </div>
        </div>
    )
}