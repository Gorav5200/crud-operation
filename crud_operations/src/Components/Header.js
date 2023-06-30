import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
function Header() {
  return (
    <div className="px-3 py-2 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            className="d-flex fw-bold fs-4 align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
          >
          Admin Panel
          </Link>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            
            <li>
              <Link to="/" className="nav-link text-white">
                {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:to="/speedometer2"></use></svg> */}
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/addUser" className="nav-link text-white">
                {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#table"></use></svg> */}
                Add users
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-link text-white">
                {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"></use></svg> */}
                Products
              </Link>
            </li>
            <li>
              <Link to="/discount" className="nav-link text-white">
                {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#people-circle"></use></svg> */}
               Discount Coupons
              </Link>
            </li>
            <li>
            <Cart/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
