import { IMainCard } from "../../../interface/ICard.interface";
import style from "./MainCard.module.sass";
import { FC } from "react";

const MainCard: FC<IMainCard> = ({ title, text, image }) => {
  return (
    <div className={style.main_card}>
      <div className={style.main_card__info}>
        <h2>{title}</h2>
        <p>{text}</p>
        <button />
      </div>
      <div className={style.main_card__image}>
        <img src={image} alt="img" />
      </div>
    </div>
  );
};

export default MainCard;
