import { IMainCard } from "../../../interface/ICard.interface";
import style from "./MainCard.module.sass";
import { FC } from "react";
import arr from '../../../assets/arr.svg'
import { useNavigate } from "react-router";

const MainCard: FC<IMainCard> = ({ title, text, image, link }) => {
  const navigate = useNavigate()  
  return (
    <div className={style.main_card}>
      <div className={style.main_card__info}>
        <h2>{title}</h2>
        <p>{text}</p>
        <button onClick={() => navigate(link)}>
          <img src={arr} alt="arr"/>
        </button>
      </div>
      <div className={style.main_card__image}>
        <img src={image} alt="img" />
      </div>
    </div>
  );
};

export default MainCard;
