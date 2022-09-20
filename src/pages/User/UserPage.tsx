import UserCard from "../../components/cards/userCard/UserCard";
import style from "./UserPage.module.sass";

const UserPage = () => {
  return (
    <div className={style.user}>
      <div className={style.user__wrapper}>
        <div className={style.user__content}>
          <h1>Личный кабинет</h1>
          <div className={style.user__blocks}>
            <div  className={style.user__blocks__info}>
              <UserCard />
            </div>
            <div  className={style.user__blocks__cards}>xsxs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
