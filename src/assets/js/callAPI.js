import axios from "axios";

export async function fetchProduct() {
    try {
        const {data} = await axios.get("http://localhost:2210/products")
        return data
    } catch (e) {
        console.log(e)
    }
}