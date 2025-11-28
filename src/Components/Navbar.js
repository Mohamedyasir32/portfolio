import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbarr.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        Yasir<span> ( Developer )</span>
      </div>

      <ul className={open ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setOpen(false)}
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/skill"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setOpen(false)}
          >
            Skills
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
