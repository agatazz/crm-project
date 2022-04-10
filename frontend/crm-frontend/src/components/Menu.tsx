import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import '../styles/sidebar.css'

const Menu=()=>{
  
    return(
      
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
            <NavLink to={'/'} exact className="nav-link" href="#" >
                
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/departments'}className="nav-link" href="#">
                
                Departments
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/employees'}className="nav-link" href="#">
                
                Employees
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/roles'}className="nav-link" href="#">
                
                Roles
              </NavLink>
            </li>
          </ul>
  
        </div>
      </nav>
      
    )
}

export default Menu