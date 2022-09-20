import style from "./BalanceCard.module.sass";

const BalanceCard = () => {
  return (
    <div className={style.balance_card}>
      <div className={style.balance_card__wrapper}>
        <div className={style.balance_card__info}>
          <h4>На вашем балансе 200</h4>
          <span>Вы можете обменять их на скидку 200 руб.</span>
        </div>
      </div>
      <div className={style.balance_card__button}>
      <button>Получить промокод</button>
      </div>
    </div>
  );
};

export default BalanceCard;
