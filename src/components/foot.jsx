import React from "react"
import { Link } from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css"

function Foot() {
  return (
    <footer className="bg-dark text-light position-relative ">

      <div className="container py-4">

        <div className="row">

          
          <div className="col-md-4 mb-3">
            <h4 className="fw-bold">
              <i className="bi bi-shop me-2"></i>SHOPIN
            </h4>
            <p className="fw-light">
              SHOPIN is a modern e-commerce platform where you can explore
              quality products with affordable prices.
            </p>
          </div>


       
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Quick Links</h5>

            <Link className="nav-link text-light" to="/">
              Home
            </Link>

            <Link className="nav-link text-light" to="/product">
              Products
            </Link>

            <Link className="nav-link text-light" to="/cart">
              Cart
            </Link>

            <Link className="nav-link text-light" to="/contact">
              Feedback
            </Link>
          </div>


         
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Contact</h5>

            <p className="mb-1">
              <i className="bi bi-envelope-fill me-2"></i>
              shopin@gmail.com
            </p>

            <p>
              <i className="bi bi-telephone-fill me-2"></i>
              +91 9876543210
            </p>

        
            <div className="fs-4">

              <i className="bi bi-facebook me-3"></i>

              <i className="bi bi-instagram me-3"></i>

              <i className="bi bi-twitter-x me-3"></i>

              <i className="bi bi-linkedin"></i>

            </div>
          </div>

        </div>

      </div>


      
      <div className="text-center border-top border-secondary py-3">

        © {new Date().getFullYear()} SHOPIN. All Rights Reserved.

      </div>

    </footer>
  )
}

export default Foot