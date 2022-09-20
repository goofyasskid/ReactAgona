import avatar from "../../../assets/avatar.svg";
import money from "../../../assets/money.svg";
import point from "../../../assets/point.svg";
import Navbar from "../navbar/Navbar";
import style from "./UserPanel.module.sass";
import { NavLink } from "react-router-dom";

const UserPanel = () => {
  return (
    <div className={style.user_panel}>
      <ul>
        <li className={style.user_panel__point}>
          <img src={point} alt="point" />
          <p>Казань</p>
        </li>
        <li>
          <img src={money} alt="money" />
          <p>1000</p>
        </li>
        <li>
          <NavLink to="/user" className={style.user_panel__link}>
            <img src={avatar} alt="avatar" />
            <p>Алексей</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserPanel;
