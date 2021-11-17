import {useState} from "react";
import {useDispatch} from "react-redux";
import {productPreview} from "../../reducers/ProductPreviewReducer";
import axios from "axios";

const initProduct = {
    name: "",
    image: "",
    color: "",
    price: 0,
    sale: 0
}

export const AddNew = () => {
    const [product, setProduct] = useState(initProduct)
    const [imageName, setImageName] = useState("")
    const dispatch = useDispatch()

    const handleInput = (event) => {
        const {name, value} = event.target
        setProduct({
            ...product,
            [name]: value
        })



        dispatch(productPreview({product}))


    }

    const validateForm = () => {
        if (!imageName && !product.name && !product.color) {
            alert("Please choose Image, Name and Color!")
        } else if (product.price < 0) {
            alert("Price must be greater than or equal to 0!")
        } else if (product.sale < 0 || product.sale > 100) {
            alert("Sale must be greater than 0 and less than 100!")
        } else {
            if (imageName) {
                product.image = imageName[0].name
            }
            return true
        }
    }

    const resetForm = () => {
        setProduct(initProduct)
        setImageName("")
    }

    async function addProduct() {
        if (validateForm()) {
            try {
                await axios.post("http://localhost:2210/products", {
                    name: product.name,
                    image: product.image,
                    color: product.color,
                    price: +product.price,
                    sale: +product.sale
                })
                resetForm()
            } catch (e) {
                console.log(e)
            }
        }
    }


    return (
        <div className="form-input">
            <div className="item">
                <input
                    type="file"
                    onChange={event => setImageName(event.target.files)}
                />
            </div>
            <div className="item">
                <input
                    type="text"
                    placeholder="Name"
                    value={product.name}
                    name="name"
                    onChange={handleInput}
                />
            </div>
            <div className="item">
                <label>
                    Color
                </label>
                <input
                    type="text"
                    placeholder="Ex. Red"
                    value={product.color}
                    name="color"
                    onChange={handleInput}
                />
            </div>
            <div className="item">
                <label>
                    Price
                </label>
                <input
                    type="number"
                    placeholder="Price"
                    value={product.price}
                    name="price"
                    onChange={handleInput}
                />
            </div>
            <div className="item">
                <label>
                    Sale
                </label>
                <input
                    type="number"
                    placeholder="Sale"
                    value={product.sale}
                    name="sale"
                    onChange={handleInput}
                />
            </div>
            <div className="item">
                <button onClick={addProduct}>add new</button>
            </div>
        </div>
    )
}