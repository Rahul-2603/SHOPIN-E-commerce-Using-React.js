import React from "react"
import { useLocation } from "react-router-dom"

function Item() {

    const loc = useLocation()
    const obj = loc.state?.obj
    const stockStatus = obj.stock > 0 
    ? obj.stock 
    : <span className="text-danger">Out Of Stock</span>;

    if (!obj) {
        return (
            <section className="pg p-5 text-center">
                <h2>Product not found</h2>
            </section>
        )
    }

    return (

        <section className="pg p-4">

            <div className="container">

                <div className="row g-4">

                    {/* PRODUCT IMAGE */}
                    <div  className="col-md-4 mt-5">

                        <div style={{height:'495px'}} className="card p-4 text-center">

                            <img
                                src={obj.thumbnail || obj.images?.[0]}
                                alt={obj.title}
                                className="img-fluid "
                            />

                           

                        </div>

                    </div>


                    {/* PRODUCT DETAILS */}
                    <div className="col-md-8 mt-5">

                        <div className="card p-4">

                            <h3 className="fw-bold">
                                {obj.title}
                            </h3>

                            <p className="text-muted">
                                Brand: {obj.brand}
                            </p>

                            <p>
                                {obj.description}
                            </p>


                            {/* TAGS */}
                            <div className="mb-2">

                                {obj.tags?.map((tag,i)=>(
                                    <span
                                        key={i}
                                        className="badge bg-secondary me-2"
                                    >
                                        {tag}
                                    </span>
                                ))}

                            </div>


                            {/* RATING */}
                            <div className="d-flex gap-4 mt-3">

                                <span>
                                    ⭐ Rating: {obj.rating}
                                </span>

                                <span>Stock: {stockStatus}</span>

                            </div>


                            {/* PRICE */}
                            <h4 className="mt-3 text-success">
                                ${obj.price}
                            </h4>

                            <p className="text-danger">
                                Discount: {obj.discountPercentage}%
                            </p>


                            {/* SHIPPING INFO */}
                            <p>
                                🚚 {obj.shippingInformation}
                            </p>

                            <p>
                                🛡 Warranty: {obj.warrantyInformation}
                            </p>


                          
                            <div className="d-flex gap-3 mt-3">

                                <button className="btn btn-dark">
                                    Buy Now
                                </button>

                               

                            </div>

                        </div>

                    </div>

                </div>


                {obj.reviews && (

                    <div className="card p-4 mt-4">

                        <h4 className="mb-3">
                            Customer Reviews
                        </h4>

                        {obj.reviews.slice(0,4).map((rev,i)=>(

                            <div key={i} className="border-bottom pb-3 mb-3">

                                <strong>
                                    {rev.reviewerName}
                                </strong>

                                <p className="mb-1">
                                    ⭐ {rev.rating}
                                </p>

                                <p>
                                    {rev.comment}
                                </p>

                            </div>
    
                        ))}

                    </div>

                )}

            </div>

        </section>

    )
}

export default Item