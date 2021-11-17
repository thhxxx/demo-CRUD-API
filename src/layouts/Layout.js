import {Nav} from "../components/Nav";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className="app">
            <Nav/>
            <div className="view">
                <Outlet/>
            </div>
        </div>
    )
}