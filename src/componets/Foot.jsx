import React from 'react'
import { Link } from 'react-router-dom'

// function Foot() {


//   return (
//     <>
//       <footer className='bg-dark p-3 text-light text-center'>
//         <span>
//           <Link to='/contact' className='text-light h4 nav-link fw-bolder'>FEEDBACK</Link>
//         </span>
//         <span>shopin@gmail.com</span>
//         </footer>
//     </>
//   )
// }



function Foot() {
  return (
    <footer className="bg-dark text-light text-center p-4">
      <h5>SHOPIN</h5>

      <Link to="/contact" className="text-light nav-link fw-bold">
        FEEDBACK
      </Link>

      <p>Email: shopin@gmail.com</p>
      <p>© 2026 SHOPIN. All Rights Reserved</p>
    </footer>
  );
}


export default Foot