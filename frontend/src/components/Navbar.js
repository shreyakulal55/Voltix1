import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="https://www.voltixsolution.com/assets/img/voltix_logo.png"
            alt="loading"
            width="170"
            height="42.2"
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/AboutUs">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-auto"> {/* Add this div to align "Contact Us" to the right */}
          <a className="btn btn-info" href="/ContactUs">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



// const Navbar = () => {
//   return (
//     <nav
//       className="navbar navbar-expand-lg bg-body-primary"
//
//     >
//       <div className="container-fluid">
//         <img
//           src="https://www.voltixsolution.com/assets/img/voltix_logo.png"
//           alt="loading"
//           height="42.2"
//           width="170"
//         ></img>
//         <Link className="navbar-brand" to="#"></Link>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link " aria-current="page" href="/">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/Services">
//                 Services
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/Projects">
//                 Projects
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/AboutUs">
//                 About Us
//               </a>
//             </li>
//           </ul>
//           <ul className="navbar-nav">
//           <li className="btn btn-secondary" > <a className="nav-link" href="/ContactUs"> Contact Us </a> </li>
//           </ul>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;
