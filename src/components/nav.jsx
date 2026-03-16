import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { Link, NavLink, useNavigate } from 'react-router-dom'


function Nav({ search, setSearch, cartCount }) {



    const navigate = useNavigate()



    return (
        <nav className="navbar navbaar-dark navbar-expand-lg p-3 bg-dark fixed-top">

            <div className="container-fluid">
                <button class="navbar-toggler bg-light " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasnavbar">
                 <i class="bi bi-justify text-dark"></i>
                </button>




                <div class="offcanvas offcanvas-start bg-dark w-50" id="offcanvasnavbar">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-light">Menu</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div className="offcanvas-body">
                        <Link className="navbar-brand " to="/product">
                            <span className="fs-4 fw-bolder text-light">
                                <i className="bi bi-shop m-2"></i>SHOPIN
                            </span>
                        </Link>
                        <ul className="navbar-nav ms-auto fs-5 fw-bolder">




                            <li className="nav-item me-4">
                                <NavLink className="nav-link text-light" to="/">
                                    HOME
                                </NavLink>
                            </li>

                            <li className="nav-item me-4">
                                <NavLink className="nav-link text-light" to="/cart">
                                    CART<span className='text-danger'>{cartCount > 0 ? `(${cartCount})` : ''}</span>
                                </NavLink>

                            </li>

                            <li className="nav-item me-4">
                                <NavLink className="nav-link text-light" to="/service">
                                    SERVICE
                                </NavLink>
                            </li>

                            <li className="nav-item me-4">
                                <NavLink className="nav-link text-light" to="/contact">
                                    CONTACT
                                </NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="btn btn-danger mt-1" to="">
                                    LOGIN
                                </Link>
                            </li>

                        </ul>
                    </div>





                </div>
                <li className="nav-item  me-4">

                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search product"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                            navigate('/product')
                        }}
                    />



                </li>



            </div>

        </nav>
    )
}

export default Nav