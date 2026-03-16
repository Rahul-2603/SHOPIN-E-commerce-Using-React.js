import React, { useState } from "react"

function Profile() {

  const [editing, setEditing] = useState(false)

  const [user, setUser] = useState({
    name: "Rahul",
    email: "rahul@email.com",
    phone: "+91 9876543210",
    location: "India"
  })

  function handleChange(e){
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  return (

    <div className="card p-4 text-center  " style={{maxWidth:"500px"}}>

      <i className="bi bi-person-circle fs-1 mb-3"></i>

      <h3 className="fw-bold mb-3">{user.name}</h3>

      {!editing && (
        <>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Location:</strong> {user.location}</p>

          <button
            className="btn btn-dark mt-3"
            onClick={()=>setEditing(true)}
          >
            Edit Profile
          </button>
        </>
      )}

      {editing && (
        <>
          <input
            className="form-control mb-2"
            name="name"
            value={user.name}
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            name="location"
            value={user.location}
            onChange={handleChange}
          />

          <button
            className="btn btn-success mb-3 me-2"
            onClick={()=>setEditing(false)}
          >
            Save
          </button>

          <button
            className="btn btn-secondary"
            onClick={()=>setEditing(false)}
          >
            Cancel
          </button>
        </>
      )}

    </div>

  )
}

export default Profile