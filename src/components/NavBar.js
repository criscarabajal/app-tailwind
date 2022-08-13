import React from "react";
import logo from '../images/logo-mif.png';
import CartWidget from "./CartWidget";
import {Link, Outlet} from "react-router-dom";


const NavBar = () => {
    return (
      <div>
        <nav className="navbar bg-base-300 py-4">
          <div class="flex-1">
            <Link to="/">
              <img
                className="logo btn btn-ghost normal-case"
                src={logo}
                alt=""
              />
            </Link>
          </div>
          <div class="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li className="menu-li">
                <Link className="menu-li-link navIcon" to="/">
                  Inicio
                </Link>
              </li>
              <li className="menu-li">
                <Link className="menu-li-link navIcon" to="/Ropa">
                  Ropa
                </Link>
              </li>
              <li className="menu-li">
                <Link className="menu-li-link navIcon" to="/Joyeria">
                  Joyeria
                </Link>
              </li>
              <li className="menu-li">
                <Link className="menu-li-link navIcon" to="/Electronica">
                  Electronica
                </Link>
              </li>
              <div>
                <CartWidget />
              </div>
            </ul>
          </div>
        </nav>

        <section>
          <Outlet />
        </section>
      </div>
    );
}


export default NavBar;



