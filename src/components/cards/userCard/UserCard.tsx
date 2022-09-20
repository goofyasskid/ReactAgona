import avatar from "../../../assets/lg-avatar.svg";
import style from "./UserCard.module.sass";

const UserCard = () => {
  return (
    <div className={style.user_card}>
      <div className={style.user_card__wrapper}>
        <div className={style.user_card__avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <h2>Алексей Петрович</h2>
        <p>+7 (917) 888 88 88</p>
        <span>ivanov@gmail.com</span>
        <div className={style.user_card__button}>
            <button>Редактировать</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
