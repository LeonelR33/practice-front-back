import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <ul>
            <li><NavLink to={"/login"}>login</NavLink></li>
            <li><NavLink to={"/home"}>home</NavLink></li>
            <li><NavLink to={"/favorites"}>favorites</NavLink></li>
        </ul>
        </>
    )
}

export default NavBar;