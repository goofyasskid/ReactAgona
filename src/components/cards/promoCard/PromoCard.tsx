import money from "../../../assets/moneyCard.svg";
import style from "./PromoCard.module.sass";

const PromoCard = () => {
  return (
    <div className={style.promo}>
      <div className={style.promo__wrapper}>
        <div className={style.promo__image}>
          <img src={money} alt="money" />
        </div>
        <div className={style.promo__info}>
          <div className={style.promo__info__block}>
            <label>Дата создания:</label>
            <p>25.09.2021</p>
          </div>
          <div className={style.promo__info__block}>
            <label>Ссылка на товар:</label>
            <a href="https://www.adidas.com/clothes/WddfJfsf7dt6fsHFIuj5%D0%BFdfsZFu">
              https://www.adidas.com/clothes/WddfJfsf7dt6fsHFIuj5%D0%BFdfsZFu
            </a>
          </div>
        </div>
        <div className={style.promo__button}>
          <button>Показать qr-код</button>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
