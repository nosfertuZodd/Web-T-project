import React from 'react'
import { Link } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import "./Client.css"
import axios from 'axios'

const ClientTopBar = () => {

    const logout = ()=>  {
        axios.post('http://127.0.0.1:8000/api/v1/users/logout')
        .then((res)=> {
          window.localStorage.clear();
        })
        .catch(e => console.error(e));
    }

    return (
        <div className="topbar-dash">
            <nav className="navbar navbar-expand-lg sticky-top Clienttopbar-dash">
                <div className="container-fluid ">
                    <span className="navbar-brand mb-0 h1 logo" >ADHost</span>
                    <div className="collapse navbar-collapse align-items-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                        <li className="nav-item">
                                <Link className="nav-link" to="/client">Home</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Jobs
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/client/my-job">My Jobs</Link></li>
                                    <li><Link className="dropdown-item" to="/client/post-job">Post a Job</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Talent
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/client/hire-youtuber">Dicover</Link></li>
                                    <li><Link className="dropdown-item" to="/client/hire-youtuber">Your Hire</Link></li>
                                    {/* <li><Link className="dropdown-item" to="/client/our-services">Our Services</Link></li> */}
                                </ul>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" onClick={logout} to="/login"><LogoutIcon /></Link>
                            </li>

                        </ul>
                    </div>

                </div>

            </nav>

        </div>
    )
}

export default ClientTopBar
