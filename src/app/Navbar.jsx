import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false)

  return (
    <header>
      <nav className="nav container direction">
        <div className="nav__firstline row">
          <img className="logo" src="./LOGO.svg" alt="company-logo" />
          <div className="nav__icons row">
            <img
              className="nav__icon"
              src="./nav-icons/calendar.png"
              alt="calendar-icon"
            />
            <img
              className="nav__icon"
              src="./nav-icons/search.svg"
              alt="search-icon"
            />
            <img
              className="nav__icon"
              src="./nav-icons/add.svg"
              alt="add-icon"
            />
            <img
              className="nav__icon hamburger"
              src="./nav-icons/hamburger.svg"
              alt="hamburger-icon"
              onClick={() => setMenuToggle(!menuToggle)}
            />
          </div>
        </div>
        <div className={`nav__secondline ${menuToggle ? 'shown' : 'toggle'}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <p>Площадки</p>
            </li>
            <li className="nav__item">Концерты</li>
            <li className="nav__item">Театр</li>
            <li className="nav__item">Детям</li>
          </ul>
          <input
            type="search"
            placeholder="What are you looking for?"
            className="nav__search"
          />
        </div>
      </nav>
    </header>
  );
};
