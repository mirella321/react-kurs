import { NavLink } from "react-router-dom";
import "./nav.css";

export function Nav() {
  const navLinks = [
    {
      path: "/",
      name: "News",
      icon: "fa-solid fa-newspaper",
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "fa-brands fa-dashcube",
    },
    {
      path: "/users",
      name: "User",
      icon: "fa-solid fa-person",
    },
  ];
  const handleInput = (e) => {
    console.log("kliknięto: ", e.target.value);
  };
  {
    return (
      <nav>
        <span>
          <i class="fa-brands fa-bitcoin"></i>
        </span>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
                <NavLink
                    to={link.path}
                    className={({isActive}) => isActive ? "active" : "non-active"}
                >
                
                <i class={link.icon}></i>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
