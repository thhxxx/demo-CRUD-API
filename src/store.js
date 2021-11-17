import {configureStore} from "@reduxjs/toolkit";
import LoginReducer from "./reducers/LoginReducer";
import ProductPreviewReducer from "./reducers/ProductPreviewReducer";

export const store = configureStore({
    reducer:{
        LoginReducer,
        ProductPreviewReducer
    }
})