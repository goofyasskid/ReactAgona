import qrImg from "../../../assets/qrmodal.svg";
import mainStore from "../../../stores/mainStore";
import style from "./ModalContent.module.sass";

const QRModal = () => {
  return (
    <div className={style.qr_form}>
      <h3>QR-код на покупку создан</h3>
      <p>При оплате покажите его сотруднику на кассе</p>
      <div className={style.qr_form__image}>
        <img src={qrImg} alt="qr-code" />
        <h3>E25GHR0P</h3>
      </div>
      <p>
        Если не получается отсканировать QR-код, введите код вручную или
        продиктуйте сотриднику на кассе
      </p>
      <div className={style.qr_form__button}>
        <button onClick={() => mainStore.modalStore.clearCurrentModal()}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default QRModal;
