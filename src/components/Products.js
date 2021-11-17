import {useEffect, useState} from "react";
import {fetchProduct} from "../assets/js/callAPI";
import {useNavigate} from "react-router-dom";

export const Products = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchProduct().then(data => {
            setProducts(data)
        })
    }, [])
    return (
        <div className="products">
            {
                products.map(product => {
                    return <div className="products__item" key={product.id}>
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
                        <button
                            onClick={() => {
                                navigate("/product-detail/" + product.id + "/" + product.name, {
                                    state: product
                                })
                            }}
                        >view detail
                        </button>
                    </div>
                })
            }
        </div>
    )
}