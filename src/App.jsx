
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'



import { useState } from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Nav from "./components/nav"
import Foot from "./components/foot"
import Home from "./pages/home"
import Product from "./pages/product"
import Contact from "./pages/contact"
import Service from "./pages/service"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import Cart from "./pages/Cart"
import Item from "./pages/item"




function App() {

  const [cart_item, setcart] = useState([])
  const [search, setSearch] = useState("")

  function getcart(item) {

    const existing = cart_item.find((ele) => ele.id === item.id)

    if (existing) {

      const updated = cart_item.map((ele) =>
        ele.id === item.id
          ? { ...ele, qty: ele.qty + item.count }
          : ele
      )

      setcart(updated)

    } else {

      setcart([
        ...cart_item,
        { ...item, qty: item.count }
      ])

    }

  }

  function deletecart(id) {
    const updated = cart_item.filter((ele) => ele.id !== id)
    setcart([...updated])


  }



  return (

    <BrowserRouter>

      <Nav search={search} setSearch={setSearch} cartCount={cart_item.length} />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/product"
          element={<Product getcart={getcart} search={search} />}
        />

        <Route path="/item" element={<Item />} />

        <Route
          path="/cart"
          element={<Cart cart_item={cart_item} deletecart={deletecart} setcart={setcart} />}
        />

        <Route path="/contact" element={<Contact />} />


        {/* Nested Service Routes */}
        <Route path="/service" element={<Service />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />

          <Route path="settings" element={<Settings />} />

        </Route>

      </Routes>

      <Foot />

    </BrowserRouter>

  )
}

export default App