import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {

    const [NavBackground, setNavBackground] = useState(false);

    const bgColor = {
        backgroundColor: NavBackground ? "#fff" : "transparent",
    }

    const colors = {
        color: NavBackground ? "#2D325A" : `${props.textColor}`
    }

    const logo = {
        color: NavBackground ? "#F4263E" : props.logo,
    }

    const changeBg = () => {
        window.scrollY >= 100 ? setNavBackground(true) : setNavBackground(false);
    }



    window.addEventListener('scroll', changeBg)

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top" style={bgColor}>
                <div className="container">
                    <NavLink className="navbar-brand logo" style={logo} to="/">HostAD</NavLink>
                    <button className="navbar-toggler justify-content-end me-3 fab" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                        <span className="navbar"><i className="fa-solid fa-bars-staggered"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" style={colors} aria-current="page" to="/"><i className="fa-solid fa-home pe-1"></i>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={colors} to="/about"><i className="pe-1 fa-brands fa-medium"></i>About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={colors} to="/services"><i className="pe-1 fa-brands fa-servicestack"></i>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={colors} to="/contact"><i className="fa-solid fa-phone pe-1"></i>Contact</NavLink>
                            </li>
                        </ul>
                        <div className="link-btn">
                            <NavLink className="btn btn-wrapper" style={{ color: props.btnText, backgroundColor: props.logo }} to="/login"><i className="me-2 fa-solid fa-user"></i>Login</NavLink>
                            
                            <NavLink type="button" className="btn btn-wrapper" style={{ color: props.btnText, backgroundColor: props.logo }} to="/signup"><i className="me-2 fa-solid fa-user-plus"></i>Sign Up</NavLink>
                        </div>
                    </div>

                </div>
            </nav>
            {/* <Outlet /> */}
        </>
    )
}


export default Navbar;