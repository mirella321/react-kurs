import { NavLink } from "react-router-dom";
import "./nav.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function Nav() {
  const { theme, toogleTheme } = useContext(ThemeContext);
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
      <nav className={theme}>
        <span>
          <i class="fa-brands fa-bitcoin"></i>
        </span>
        <ul>
          <li>{theme}
            <button className="theme-btn" onClick={toogleTheme}>
                {theme === "light" ? (
                    <i className="fa-solid fa-moon"></i>
                ) : (
                        <i className="fa-solid fa-sun"></i>
                    )
                }
            </button>
          </li>

          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "active" : "non-active"
                }
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
