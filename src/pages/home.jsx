import React from "react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <section className="ho py-5">

      <div className="container">

        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-md-6 p-1 text-center">

            <div className="con1  p-5">

              <h1 className="fw-bold ms-4 mb-3">
                Welcome To SHOPIN <i className="bi bi-basket"></i>
              </h1>

              <p className="mb-4">
                Discover amazing products and enjoy shopping with the best deals.
              </p>

              <Link
                to="/product"
                className="btn btn-dark px-4 py-2"
              >
                LET'S SHOP <i className="bi bi-arrow-right-circle"></i>
              </Link>

            </div>

          </div>


          
          <div className=" di col-md-6 text-center">

            <img
              src="/Screen1.jpg"
              alt="shopping"
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default Home