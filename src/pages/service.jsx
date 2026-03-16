import { NavLink, Outlet } from "react-router-dom"

function Service() {
  return (

    <section className="d-flex pg ">

      {/* Sidebar */}
      <div
        className="d-flex flex-column bg-secondary align-items-center m-3 mt-4 rounded  p-3 gap-4 vh-100 overflow-auto"
        style={{ width: "120px" }}
      >

        <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive
              ? "btn btn-dark d-flex flex-column align-items-center w-100"
              : "btn btn-light d-flex flex-column align-items-center w-100"
          }
        >
          <i className="bi bi-person fs-4"></i>
          <small>PROFILE</small>
        </NavLink>

        <NavLink
          to="settings"
          className={({ isActive }) =>
            isActive
              ? "btn btn-dark d-flex flex-column align-items-center w-100"
              : "btn btn-light  d-flex flex-column align-items-center w-100"
          }
        >
          <i className="bi bi-gear fs-4"></i>
          <small>SETTING</small>
        </NavLink>



      </div>

      <div className="flex-grow-1 d-flex justify-content-center p-3 mt-5">

        <div className="w-100" style={{ maxWidth: "500px" }}>

          <Outlet />

        </div>

      </div>

    </section>

  )
}

export default Service