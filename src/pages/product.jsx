import React, { useState, useEffect } from "react"
import Product_list from "../components/product_list"
import { getcategories } from '../api/api'

function Product({ getcart, search }) {

    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('all')

    async function fetchProducts() {

        try {

            const res = await getcategories()
            setCategories(res.data)

        }
        catch (err) {

            console.log(err)

        }

    }

    useEffect(() => {

        fetchProducts()

    }, [])


    return (

        <section className="pg p-3">

            <div className="container-fluid">

                {/* CATEGORY BAR */}

                <div className=" hi card p-3 d-flex flex-row overflow-auto gap-2 mb-4 category-bar">

                    <button
                        className={`btn ${category === "all"
                                ? "btn-outline-dark"
                                : "btn-dark"
                            }`}
                        onClick={() => setCategory("all")}
                    >
                        All
                    </button>

                    {categories.map((cat) => (

                        <button
                            key={cat.slug}
                            className={`btn ${category === cat.slug
                                    ? "btn-outline-dark"
                                    : "btn-dark"
                                }`}
                            onClick={() => setCategory(cat.slug)}
                        >

                            {cat.name}

                        </button>

                    ))}

                </div>


                {/* PRODUCTS */}

                <div className="row g-3">

                    <Product_list
                        getcart={getcart}
                        search={search}
                        category={category}
                    />

                </div>

            </div>

        </section>

    )
}

export default Product