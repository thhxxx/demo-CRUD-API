import {useLocation} from "react-router-dom";

export const ProductDetail = () => {
    const location = useLocation()
    const product = location.state
    console.log(product)
    return (
        <div>

        </div>
    )
}