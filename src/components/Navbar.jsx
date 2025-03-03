import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? 'blue' : '', fontWeight: isActive ? 'bold' : ''})}>Home</NavLink>
            <NavLink to="/shoppingcart" end style={({ isActive }) => ({ color: isActive ? 'blue' : '', fontWeight: isActive ? 'bold' : ''})}>View Cart (n)</NavLink>
        </nav>
    );
}

export default Navbar;