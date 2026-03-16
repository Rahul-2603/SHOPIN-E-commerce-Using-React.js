import React, { useState } from 'react'

import { useEffect } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'


function Product_list({ getcart }) {


    let [products, setproducts] = useState([])
    let [isloading, setloading] = useState(true)
    let [error, seterror] = useState(false)


    useEffect(() => {

        data()

    }, [])


    async function data() {


        try {
            let res = await Axios.get('https://fakestoreapi.com/products?limit=20')

            setloading(false)
            let updat = res.data.map(ele => ({
                ...ele, count: 0, stock: 100
            }))
            console.log(updat)
            setproducts(updat)


        }
        catch (err) {

            seterror(err.message)
        }
        finally {
            setloading(false)
        }
    }

    function handleinc(num) {

        setproducts(prv => prv.map(ele => (num === ele.id && ele.stock > ele.count ? { ...ele, count: ele.count + 1 } : ele)))
    }

    function handledec(num) {


        setproducts(prv => prv.map(ele => (num === ele.id && ele.count > 0 ? { ...ele, count: ele.count - 1 } : ele)))

    }




    function handlecart(item) {

        if (item.count >= 1) {
            getcart(item)
            setproducts(prv => prv.map(ele => (item.id === ele.id ? { ...ele, count: 0 } : ele)))
        }
        else {
            alert('add the count')
        }
    }





    return (
        <>

            {
                isloading && <h1 className='text-primary text-center fw-lighter'>loading please wait..........</h1>

            }

            {
                error && <h1 className='text-danger fw-lighter text-center'>{error} check the network.....??</h1>
            }

            {

                !isloading && !error && products.map((ele) => (

                    <div className="col-md-3" key={ele.id} >
                        <div style={{ minHeight: '440px' }} className="card border-none m-4 p-2">
                            <Link state={{obj:ele}}  className='nav-link' to='/Item'>
                                <img width={251} height={200} className='rounded-3 p-5' src={ele.image} alt="" />

                                <div className="card-body text-center p-0 mb-2">
                                    <h6 className='text-center fw-bold title mb-4 '>{ele.title}</h6>
                                    <h6 className='text-center fw-lighter'><i className="bi bi-tag-fill"></i>{ele.price}</h6>
                                    <div className='d-flex justify-content-around fw-lighter m-2'>
                                        <span>Stock:{ele.stock}</span>
                                        <span>RATING:⭐{ele.rating?.rate}</span>
                                    </div>
                                </div>
                            </Link>
                            <div className='text-center fw-lighter mt-2' >
                                <span onClick={() => handleinc(ele.id)} className=' btn' ><i className="bi bi-plus-circle text-success"></i></span>
                                <span className='fw-bolder fs-5'>{ele.count}</span>
                                <span onClick={() => handledec(ele.id)} className=' btn'><i className=" text-danger bi bi-dash-circle "></i></span>
                            </div>
                            <span className='btn p-1 bt w-50 m-auto  mb-3 mt-1' onClick={() => handlecart(ele)}>ADD CART</span>
                        </div>
                    </div>











                ))
            }


        </>
    )
}

export default Product_list
