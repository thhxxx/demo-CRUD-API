import "../assets/css/nav.scss"
import {NavLink} from "react-router-dom";
import {Logo} from "./Logo";
import {useDispatch} from "react-redux";
import {logout} from "../reducers/LoginReducer";

export const Nav = () => {
    const dispatch = useDispatch()
    return (
        <nav>
            <Logo/>
            <ul>
                <li>
                    <NavLink to="/">
                        <i className="fas fa-home-lg-alt"/>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/product-list">
                        <i className="fas fa-users"/>
                        Product List
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add-product">
                        <i className="fas fa-user-plus"/>
                        Add Product
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart">
                        <i className="fas fa-shopping-cart"/>
                        Cart
                    </NavLink>
                </li>
                <li onClick={() => dispatch(logout())}>
                    <i className="fas fa-sign-out-alt"/>
                    Log Out
                </li>
            </ul>
        </nav>
    )
}