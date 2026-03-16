import React, { useState } from "react"

function Settings() {

  const [password, setPassword] = useState({
    current: "",
    newpass: "",
    confirm: ""
  })

  function handleChange(e) {
    setPassword({
      ...password,
      [e.target.name]: e.target.value
    })
  }

  function handlePassword() {

    if (!password.current || !password.newpass || !password.confirm) {
      alert("Please fill all fields")
      return
    }

    if (password.newpass !== password.confirm) {
      alert("Passwords do not match")
      return
    }

    alert("Password changed successfully")

    setPassword({
      current: "",
      newpass: "",
      confirm: ""
    })
  }

  return (

    <div className="card p-4" style={{ maxWidth: "500px" }}>

      <h3 className="mb-4 text-center">Account Settings</h3>

      {/* Change Password */}
      <div className="mb-4">

        <h5 className="mb-3">Change Password</h5>

        <input
          className="form-control mb-2"
          type="password"
          placeholder="Current Password"
          name="current"
          value={password.current}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          type="password"
          placeholder="New Password"
          name="newpass"
          value={password.newpass}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          type="password"
          placeholder="Confirm Password"
          name="confirm"
          value={password.confirm}
          onChange={handleChange}
        />

        <button
          className="btn btn-dark w-100"
          onClick={handlePassword}
        >
          Update Password
        </button>

      </div>


      {/* Danger Zone */}
      <div className="border-top pt-3">

        <h5 className="text-danger">Danger Zone</h5>

        <p className="text-muted small">
          Deleting your account will permanently remove all your data.
        </p>

        <button className="btn btn-danger w-100">
          Delete Account
        </button>

      </div>

    </div>
  )
}

export default Settings