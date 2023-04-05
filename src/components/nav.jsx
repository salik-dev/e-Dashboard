import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {

    const userAuth = localStorage.getItem('user');
    let styled = {
        textDecoration: 'none',
        color: 'white'
    };
    const navigate = useNavigate();
    const SignOut = () => {
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <>
            <div className="header-container">
                <span>e-Dashboard</span>
                <ul className="nav">
                    <li><NavLink to='/' style={styled}>Products</NavLink></li>
                    <li><NavLink to='/add' style={styled}>Add Product</NavLink></li>
                    <li><NavLink to='/update' style={styled}>Update Product</NavLink></li>
                    <li><NavLink to='/profile' style={styled}>Profile</NavLink></li>
                    <li>
                        {
                            userAuth ? <NavLink to='/logout' style={styled} onClick={SignOut}>Sign Out</NavLink> :
                                <NavLink to='/signup' style={styled}>Sign Up</NavLink>
                        }
                    </li>
                </ul >
            </div>
        </>
    )
}

export default Nav;