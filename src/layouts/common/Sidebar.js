import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../constants/routes'

const Sidebar = () => {
  return (
 <aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item">
      <Link className="nav-link collapsed" to={routes.DASHBOARD}>
        <i className="fa-solid fa-house" />
        <span>Home</span>
      </Link >
    </li>{/* End Dashboard Nav */}
    {/* End Components Nav */}
    <li className="nav-item">
      <Link className="nav-link" to={routes.MERCHANT}>
        <i className="fa-regular fa-user" />
        <span>Merchants</span>
      </Link >
    </li>{/* End Profile Page Nav */}
    <li className="nav-item">
      <Link className="nav-link" to="#">
        <i className="fa-regular fa-circle-question" />
        <span>F.A.Q</span>
      </Link >
    </li>{/* End F.A.Q Page Nav */}
    <li className="nav-item">
      <Link className="nav-link" to="#">
        <i className="fa-regular fa-envelope" />
        <span>Contact</span>
      </Link >
    </li>{/* End Contact Page Nav */}
    <li className="nav-item">
      <Link className="nav-link" to="#">
        <i className="fa-regular fa-credit-card" />
        <span>Register</span>
      </Link >
    </li>{/* End Register Page Nav */}
    <li className="nav-item">
      <Link className="nav-link" to="#">
        <i className="fa-solid fa-arrow-right-to-bracket" />
        <span>Login</span>
      </Link >
    </li>{/* End Login Page Nav */}
    <li className="nav-item">
      <Link className="nav-link" to="#">
        <i className="fa-solid fa-triangle-exclamation" />
        <span>Error 404</span>
      </Link >
    </li>{/* End Error 404 Page Nav */}
    <li className="nav-item">
      <Link className="nav-link" to="#">
        <i className="fa-solid fa-briefcase-blank" />
        <span>Blank</span>
      </Link >
    </li>{/* End Blank Page Nav */}
  </ul>
</ aside>

  )
}

export default Sidebar