import "../assets/css/product-preview.scss"
import {useSelector} from "react-redux";

export const ProductPreview = () => {
    const product = useSelector(state => state.ProductPreviewReducer.product)

    return (
        <div className="product-preview">
            <div className="image">
                <img src={"https://thhxxx.github.io/t-shirt/" + product.image} alt={product.image}/>
            </div>
            <h1>{product.name}</h1>
            {
                product.sale === 0
                    ? <div className="price">
                        <span>{product.price.toLocaleString()}đ</span>
                    </div>
                    : <div className="price">
                        <span>{((product.price / 100) * (100 - product.sale)).toLocaleString()}đ</span>
                        <s>{product.price.toLocaleString()}đ</s>
                        -{product.sale}%
                    </div>
            }
            <button>
                add new
            </button>
        </div>
    )
}
