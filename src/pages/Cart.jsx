import { useState } from "react"
import { Link } from "react-router-dom"

function Cart({ cart_item, deletecart, setcart }) {

    function handleinc(item) {

        const updated = cart_item.map((ele) =>
            ele.id === item.id
                ? { ...ele, qty: ele.qty + 1 }
                : ele
        )

        setcart(updated)
    }


    function handledec(item) {

        const updated = cart_item.map((ele) =>
            ele.id === item.id && ele.qty > 1
                ? { ...ele, qty: ele.qty - 1 }
                : ele
        )

        setcart(updated)
    }


    function delcart(id) {

        deletecart(id)

    }


    const totalPrice = cart_item.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    )


    if (cart_item.length === 0) {
        return (

            <section className="p-4  pg" style={{ minHeight: '1000px' }}>

                <div className="container text-center">

                    <h2 className="fw-light mb-4">
                        Your Cart is Empty
                    </h2>

                    <Link to="/product" className="btn btn-dark">
                        Start Shopping
                    </Link>

                </div>

            </section>
        )
    }



    return (

        <section className="pg p-4 ov    ">

            <div className="container text-center">

                <h3 className=" fw-bolder mb-2">
                    YOUR CART
                </h3>

                <h3 className="mb-4 fw-lighter p-2  m-auto w-25 rounded d-block">
                    Total Price: ${totalPrice.toFixed(2)} <button className="btn m-3 btn-success">BUY NOW </button>
                </h3>

                <div className="row">

                    {cart_item.map((ele) => (

                        <div
                            className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 m-2"
                            key={ele.id}
                        >

                            <div className="card shadow-sm h-100  text-center p-2">
                                <h5 onClick={() => delcart(ele.id)}><i className="bi bi-trash3 float-end me-2 text-danger"></i></h5>

                                <Link state={{ obj: ele }} to="/Item" className="nav-link">

                                    <img
                                        src={ele.images[0]}
                                        alt={ele.title}
                                        className="img-fluid product-img"
                                    />

                                    <div className="card-body p-1">

                                        <h6 className="fw-bold mb-2">
                                            {ele.title}
                                        </h6>

                                        <h6 className="fw-light">
                                            <i className="bi bi-tag-fill"></i> {ele.price}
                                        </h6>

                                        <div className="d-flex justify-content-between px-3">

                                            <span>Stock: {ele.stock}</span>

                                            <span>⭐ {ele.rating}</span>

                                        </div>

                                    </div>

                                </Link>





                                <div className=" d-flex gap-3   m-auto rounded-3 mt-3">

                                    <button
                                        onClick={() => handleinc(ele)}
                                        className=" btn btn-outline-light   text-danger  fs-5 p-1"
                                    >
                                        <i className="bi bi-plus-circle"></i>
                                    </button>

                                    <span className="fw-bold fs-4 text-dark m-2">
                                        {ele.qty}
                                    </span>

                                    <button
                                        onClick={() => handledec(ele)}
                                        className="btn btn-outline-light   text-danger  fs-4 p-1"
                                    >
                                        <i className="bi bi-dash-circle"></i>
                                    </button>

                                </div>

                            </div>
                        </div>




                    ))}

                </div>


            </div>

        </section>
    )
}

export default Cart