import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-primary"
      style={{ backgroundColor: " #ACAAD9" }}
    >
      <div className="container-fluid">
        <img
          src="https://www.voltixsolution.com/assets/img/voltix_logo.png"
          alt="loading"
          height="42.2"
          width="170"
        ></img>
        <Link className="navbar-brand" to="#"></Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/">
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/ContactUs" className="btn btn-primary" style={{ borderRadius: "30px", backgroundColor: "#182F38", color: "white" }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





// import React from "react";
// import { Link } from "react-router-dom";
// const NavBar = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">
//             Navbar
//           </Link>
//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav me-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/Menu">
//                   Menu
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about">
//                   About us
//                 </Link>
                
//               </li>  
//             </ul>
//             {/* mx->gives space */}
            
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default NavBar;