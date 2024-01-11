import React from "react";
import { useNavigation, NavLink } from "react-router-dom";

export default function Header() {
  let navigation = useNavigation();

  return (
    <div className="navbar bg-base-100 shadow-lg">
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
      <hr />
    </div>
  );
}
