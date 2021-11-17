import {createSlice} from "@reduxjs/toolkit";

const ProductPreviewReducer = createSlice({
    name: "ProductPreviewReducer",
    initialState: {
        product: {
            name: "",
            image: "",
            color: "",
            price: 0,
            sale: 0
        }
    },
    reducers: {
        productPreview: (state, actions) => {
            const {product} = actions.payload
            state.product = product
        }
    }
})

export const {productPreview} = ProductPreviewReducer.actions
export default ProductPreviewReducer.reducer