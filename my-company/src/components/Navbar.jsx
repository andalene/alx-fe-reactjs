import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <>
        <ul style={{display: "flex", justifyContent: "center", gap:"2em", listStyle: "none", backgroundColor:"yellowgreen"}}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        </>
     );
}

export default Navbar;