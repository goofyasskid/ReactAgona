import avatar from "../../../assets/avatar.svg";
import money from "../../../assets/money.svg";
import point from "../../../assets/point.svg";
import mainStore from "../../../stores/mainStore";
import { useStore } from "../../../utils/use-stores-hook";
import style from "./UserPanel.module.sass";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "../../modals/Modal";
import ModalLogin from "../../modals/modalContent/modalLogin/ModalLogin";

const UserPanel = () => {
  const [menuActive, setMenuActive] = useState(false);
  const {
    modalStore: { setCurrentModal },
    authenticationStore: { authentication, setAuthentication },
  } = useStore();
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (mainStore.authenticationStore.auth) {
      navigate("/user/promo");
    } else setCurrentModal(<Modal children={<ModalLogin />} />);
  };
  return (
    <div className={style.user_panel}>
      {mainStore.authenticationStore.auth ? (
        <ul>
          <li className={style.user_panel__point}>
            <img src={point} alt="point" />
            <p>Казань</p>
          </li>
          <li>
            <img src={money} alt="money" />
            <span>1000</span>
          </li>
          <li>
            <NavLink to="/user/promo" className={style.user_panel__link}>
              <img src={avatar} alt="avatar" />
              <p>Алексей</p>{" "}
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul className={style.user_panel__button}>
          <li>
            <button onClick={() => handleClick()}>Вход</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserPanel;
