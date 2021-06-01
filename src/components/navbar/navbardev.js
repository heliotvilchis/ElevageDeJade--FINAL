import React from "react";

// Data
import navbarItems from "../../data/nav.json";

// Components
import Link from "../link/link";

function navmap(params) {
  if (params.url === "") {
    return (
      <details>
        <summary>{params.name}</summary>
        <ul>
          {params.dropdownItems.map((item) => (
            <li>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </details>
    );
  } else {
    return <Link to={params.url}>{params.name}</Link>;
  }
}

// Markup
const NavBar = () => {
  return (
    <div>
      <h1>the nav</h1>
      {navbarItems.map((item) => (
        <li key={item.name}>{navmap(item)}</li>
      ))}
    </div>
  );
};

export default NavBar;
