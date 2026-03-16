import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../api/api'

function Product_list({ getcart, search, category }) {

    const [products, setproducts] = useState([])
    const [isloading, setloading] = useState(true)
    const [error, seterror] = useState(null)

    const filteredProducts = products.filter((ele) => {

        const matchSearch =
            ele.title.toLowerCase().startsWith(search.toLowerCase())

        const matchCategory =
            category === "all" || ele.category === category

        return matchSearch && matchCategory

    })

    useEffect(() => {
        fetchProducts()
    }, [])


    async function fetchProducts() {

        try {

            const res = await getProducts()

            const updatedProducts = res.data.products.map((ele) => ({
                ...ele,
                count: 0
            }))

            setproducts(updatedProducts)

        } catch (err) {

            seterror(err.message)

        } finally {

            setloading(false)

        }
    }


    function handleinc(id) {

        setproducts(prev =>
            prev.map(ele =>
                id === ele.id && ele.stock > ele.count
                    ? { ...ele, count: ele.count + 1 }
                    : ele
            )
        )
    }


    function handledec(id) {

        setproducts(prev =>
            prev.map(ele =>
                id === ele.id && ele.count > 0
                    ? { ...ele, count: ele.count - 1 }
                    : ele
            )
        )
    }


    function handlecart(item) {

        if (item.count >= 1) {

            getcart(item)

            setproducts(prev =>
                prev.map(ele =>
                    item.id === ele.id
                        ? { ...ele, count: 0 }
                        : ele
                )
            )

        } else {

            alert("Please add quantity")

        }
    }



    if (isloading) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border" role="status"></div>
            </div>
        )
    }

    if (error) {
        return <h2 className="text-danger text-center">{error}</h2>
    }

    if (!filteredProducts[0]) {
        return (
            <div className="text-center mt-5">
                <h3>{search} Not Found</h3>
            </div>
        )
    }


    return (
        <>
            {filteredProducts.map((ele) => (

                <div
                    className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2"
                    key={ele.id}
                >

                    <div className="card shadow-sm h-100 text-center p-2">

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


                        <div className="text-center">

                            <button
                                className="btn"
                                onClick={() => handleinc(ele.id)}
                            >
                                <i className="bi bi-plus-circle text-success"></i>
                            </button>

                            <span className="fw-bold fs-5 mx-2">
                                {ele.count}
                            </span>

                            <button
                                className="btn"
                                onClick={() => handledec(ele.id)}
                            >
                                <i className="bi bi-dash-circle text-danger"></i>
                            </button>

                        </div>


                        <button
                            className="bt w-75 m-auto mb-2 rounded"
                            onClick={() => handlecart(ele)}
                        >
                            ADD CART
                        </button>

                    </div>

                </div>

            ))}
        </>
    )
}

export default Product_list