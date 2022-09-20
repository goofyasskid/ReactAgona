import style from "./UserNav.module.sass";
import { Link, NavLink } from "react-router-dom";

const UserNav = () => {
  return (
    <nav className={style.navbar}>
      <ul>
        <li>
          <Link to="promo">Промокоды</Link>
        </li>
        <li>
          <Link to="history">История</Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
