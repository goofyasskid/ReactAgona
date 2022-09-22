import mainStore from "../../../stores/mainStore";
import Modal from "../../modals/Modal";
import QRModal from "../../modals/modalContent/QRModal";
import style from "./BalanceCard.module.sass";

const BalanceCard = () => {
  const handleClick = () => {
    mainStore.modalStore.setCurrentModal(<Modal children={<QRModal />} />);
  };
  return (
    <div className={style.balance_card}>
      <div className={style.balance_card__wrapper}>
        <div className={style.balance_card__info}>
          <h4>На вашем балансе 200</h4>
          <span>Вы можете обменять их на скидку 200 руб.</span>
        </div>
      </div>
      <div className={style.balance_card__button}>
        <button onClick={() => handleClick()}>Получить промокод</button>
      </div>
    </div>
  );
};

export default BalanceCard;
