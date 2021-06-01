import React from "react";

// Data
import navbarItems from "../../data/nav.json";

// Components
import Link from "../link/link";

var keyNames;

function navmap(params) {
  if (params.url == "") {
    return (
      <Link>
        {params.dropdownItems.map((item) => (
          <div>
            <Link>{item.name}</Link>
          </div>
        ))}
      </Link>
    );
  }
}

// Markup
const NavBar = () => {
  return (
    <div>
      <h1>the nav</h1>
      {navbarItems.map((item) => (
        <li key={item.name}>
          <Link to={item.url}>{item.name}</Link>
          {navmap(item)}
        </li>
      ))}
    </div>
  );
};

export default NavBar;
