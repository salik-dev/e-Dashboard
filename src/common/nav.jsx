import { NavLink } from "react-router-dom";

const Nav = () => {
    let styled = {
        textDecoration: 'none',
        color: 'white'
    };
    return (
        <>
            <div className="header-container">
                <span>e-Dashboard</span>
                <ul className="nav">
                    <li><NavLink to='/' style={styled}>Products</NavLink></li>
                    <li><NavLink to='/add' style={styled}>Add Product</NavLink></li>
                    <li><NavLink to='/update' style={styled}>Update Product</NavLink></li>
                    <li><NavLink to='/logout' style={styled}>Logout</NavLink></li>
                    <li><NavLink to='/profile' style={styled}>Profile</NavLink></li>
                    <li><NavLink to='/signup' style={styled}>Sign Up</NavLink></li>
                </ul >
            </div>
        </>
    )
}

export default Nav;