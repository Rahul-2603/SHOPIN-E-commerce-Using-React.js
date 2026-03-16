import React, { useState } from "react"

function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        feedback: ""
    })

    const [submitted, setSubmitted] = useState(false)


    function handleChange(e) {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    function handleSubmit(e) {

        e.preventDefault()

        if (!form.name || !form.email || !form.feedback) {
            alert("Please fill all fields")
            return
        }

        setSubmitted(true)

        setForm({
            name: "",
            email: "",
            feedback: ""
        })

        setTimeout(()=>{
            setSubmitted(false)
        },2000)
    }

    


    return (

        <section className="ho container-fluid">

            <div className="container">

                <div className="row">

                    <div className="col-md-5 m-auto mt-5">

                        <div
                            className="card border border-dark bg-warning"
                            style={{ height: "480px" }}
                        >

                            <div className="card-body p-4">

                                <h1 className="fw-bolder text-center mb-4">
                                    Contact Us
                                </h1>


                                {submitted && (
                                    <p className="text-success text-center">
                                        Feedback submitted successfully!
                                    </p>
                                )}


                                <form onSubmit={handleSubmit}>

                                    {/* Name */}
                                    <div className="form-group mb-3">

                                        <label>Full Name</label>

                                        <input
                                            type="text"
                                            className="form-control mt-2"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                        />

                                    </div>


                                    {/* Email */}
                                    <div className="form-group mb-3">

                                        <label>Email</label>

                                        <input
                                            type="email"
                                            className="form-control mt-2"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                        />

                                    </div>


                                    {/* Feedback */}
                                    <div className="form-group mb-3">

                                        <label>Feedback</label>

                                        <textarea
                                            className="form-control mt-2"
                                            rows="3"
                                            name="feedback"
                                            value={form.feedback}
                                            onChange={handleChange}
                                        ></textarea>

                                    </div>


                                    <div className="text-center mt-4">

                                        <button
                                            className="btn btn-dark"
                                            type="submit"
                                        >
                                            Submit
                                        </button>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )
}

export default Contact