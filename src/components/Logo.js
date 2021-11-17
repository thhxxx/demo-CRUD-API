import "../assets/css/logo.scss"
import logo from "../assets/images/logo.svg";

export const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt=""/>
            <h1>REACT JS</h1>
        </div>
    )
}