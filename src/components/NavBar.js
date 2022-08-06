import React from "react";
import logo from '../images/logo-mif.png';
import CartWidget from "./CartWidget";
import {Link, Outlet} from "react-router-dom";


const NavBar = () => {
    return (
      <div>
        <nav className="navbar bg-base-100">
            <div class="flex-1">
                <Link to="/">
                    <img className="logo btn btn-ghost normal-case" src={logo} alt=""/>
                </Link>
            </div>
            <div class="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li className="menu-li">
                        <Link className="menu-li-link navIcon" to="/">Inicio</Link>
                    </li>
                    <li className="menu-li">
                        <Link className="menu-li-link navIcon" to="/Ropa">Ropa</Link>
                    </li>
                    <li className="menu-li">
                        <Link className="menu-li-link navIcon" to="/Joyeria">Joyeria</Link>
                    </li>
                    <li className="menu-li">
                        <Link className="menu-li-link navIcon" to="/Electronica">Electronica</Link>
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search mx-2 my-4 navIcon" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person mx-2 my-4 navIcon" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    </svg>
                    <div>
                        <CartWidget/>
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



