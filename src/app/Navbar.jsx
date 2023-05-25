import "./Navbar.css";

export const Navbar = () => {
  return (
    <header>
        <nav className="nav container">
        <img className="logo" src="./LOGO.svg" alt="company-logo"></img>
          <ul className="nav__list--primary">
            <li className="nav__item">Площадки</li>
            <li className="nav__item">Концерты</li>
            <li className="nav__item">Театр</li>
            <li className="nav__item">Детям</li>
          </ul>
            <input
              type="search"
              placeholder="What are you looking for?"
              className="search"
            />
            <div className="nav__date row">
            <div className="nav__item">Дата</div>
            <img
              className="nav__icon"
              src="./nav-icons/calendar.png"
              alt="calendar-icon"
            />
          </div>
          <img className="nav__icon" src="./nav-icons/add.png" alt="add-icon" />
        </nav>
    </header>
  );
};

