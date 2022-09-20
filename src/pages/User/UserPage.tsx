import HistoryCard from "../../components/cards/historyCard/HistoryCard";
import PromoCard from "../../components/cards/promoCard/PromoCard";
import UserCard from "../../components/cards/userCard/UserCard";
import UserNav from "../../components/ui/userNav/UserNav";
import style from "./UserPage.module.sass";
import { Routes, BrowserRouter, Route, Outlet } from "react-router-dom";

const UserPage = () => {
  return (
    <div className={style.user}>
      
        <div className={style.user__wrapper}>
          <div className={style.user__content}>
            <h1>Личный кабинет</h1>
            <div className={style.user__blocks}>
              <div className={style.user__blocks__info}>
                <UserCard />
              </div>
              <div className={style.user__blocks__cards}>
                <UserNav />
                <main>
                <Outlet />
                </main>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default UserPage;
