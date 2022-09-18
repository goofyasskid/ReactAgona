import { ICard } from "../../../interface/ICard.interface";
import style from "./SliderCard.module.sass";
import { FC } from "react";

const SliderCard: FC<ICard> = ({
  title,
  background,
  text,
  image,
  buttonText,
}) => {
  return (
    <div
      className={style.slider_card}
      style={{
        background: `${background}`,
      }}
    >
      <div className={style.slider_card__text}>
        <div className={style.slider_card__info}>
          <h1>{title}</h1>
          <p>{text}</p>
          <button>{buttonText}</button>
        </div>
      </div>
      <div className={style.slider_card__image}>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default SliderCard;
