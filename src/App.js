import "./assets/css/app.scss"
import "./assets/css/variable.scss"

import {Home} from "./views/Home";
import {ProductList} from "./views/ProductList";
import {AddProduct} from "./views/AddProduct";
import {Cart} from "./views/Cart";
import {ProductDetail} from "./views/ProductDetail";
import {Test} from "./views/Test";
import {Login} from "./views/Login";
import {useSelector} from "react-redux";
import {Layout} from "./layouts/Layout";
import {NoMatch} from "./layouts/NoMatch";
import {Route, Routes} from "react-router-dom";

function App() {
    const isLogin = useSelector(state => state.LoginReducer.tokenLogin)

    return (
        <Routes>
            <Route path="/" element={isLogin ? <Layout/> : <Login/>}>
                <Route index element={<Home/>}/>
                <Route path="product-list" element={<ProductList/>}/>
                <Route path="add-product" element={<AddProduct/>}/>
                <Route path="cart" element={<Cart/>}/>
                <Route path="product-detail/:id/:name" element={<ProductDetail/>}/>
                <Route path="test" element={<Test/>}/>
                {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                <Route path="*" element={<NoMatch/>}/>
            </Route>
        </Routes>
    )
}

export default App;
