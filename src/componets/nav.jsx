import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Link, NavLink } from 'react-router-dom'

function Nav({ themechange, theme }) {



    return (
        <>
            <nav className="navbar navbar-expand-lg  p-3 bg-dark ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/product' >
                        <span className='fs-4 fw-bolder text-light'> <i className="bi bi-shop m-3"></i>SHOPIN</span>
                    </Link>

                    <form className="d-flex float-end ">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-warning  btn-outline-dark me-5" type="submit">Search</button>
                        <ul className="navbar-nav fs-5 fw-bolder " >
                            <li className="nav-item me-5 ">
                                <Link className="nav-link text-light" to='/'>HOME</Link>
                            </li>
                            <li className="nav-item me-5">
                                <NavLink className="nav-link text-light " to='/Cart'>CART</NavLink>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link text-light " to='/Service'>SERVICE</Link>
                            </li>
                            <li className="nav-item me-5">
                                <NavLink className="nav-link text-light " to='/contact'>CONTACT</NavLink>
                            </li>
                            <li  className="nav-item me-5">
                                <div className='btn btn-danger mt-2'> LOGIN</div>
                            </li>
                        </ul>

                    </form>



                </div>
            </nav>

        </>
    )
}

export default Nav