import logo from "../../../assets/logo.svg";
import style from "./Navbar.module.sass";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar__wrapper}>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/points/cards">Пункты сбора</NavLink>
          </li>
          <li>
            <NavLink to="/market">ЭкоМаркет</NavLink>
          </li>
          <li>
            <NavLink to="/about">О сервисе</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
