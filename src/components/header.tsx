import React from "react";
import { useNavigation, NavLink } from "react-router-dom";

export default function Header() {
  let navigation = useNavigation();

  return (
    <>
      <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Articles</NavLink>
              </li>
              <li>
                <NavLink to="/result">Result</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            Articles
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Articles</NavLink>
            </li>
            <li>
              <NavLink to="/result">Result</NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/*<div className="navbar bg-base-100 shadow-lg">
        <div style={{ position: "fixed", top: 0, right: 0 }}>
          {navigation.state !== "idle" && <p>Navigation in progress...</p>}
        </div>
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost text-xl">
            Articles
          </NavLink>
        </div>

        <nav className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Articles</NavLink>
            </li>
            <li>
              <NavLink to="/result">Result</NavLink>
            </li>
          </ul>
        </nav>

        <nav className="flex-none">
          <FaHamburger />
        </nav>

        <hr />
      </div>*/}
    </>
  );
}
