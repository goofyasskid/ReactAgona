import close from "../../../assets/close.svg";
import { IModalsContent } from "../../../interface/IModal.interface";
import mainStore from "../../../stores/mainStore";
import Modal from "../Modal";
import style from "./ModalContent.module.sass";
import { FC } from "react";

const ModalAuth: FC<IModalsContent> = ({ modal }) => {
  const handleClick = (modal: any) => {
    mainStore.modalStore.clearCurrentModal();
    mainStore.modalStore.setCurrentModal(
      <Modal children={<ModalAuth modal={modal} />} />
    );
  };

  const handleRedirect = () => {
    mainStore.modalStore.clearCurrentModal();
    mainStore.authenticationStore.setAuthentication(true);
  };
  return (
    <form className={style.form}>
      <div className={style.form__header}>
        <h1>{modal.title}</h1>
        <button onClick={() => mainStore.modalStore.clearCurrentModal()}>
          <img src={close} alt="close" />
        </button>
      </div>
      {modal.text && (
        <div className={style.form__message}>
          {modal.text.map((item: string) => (
            <p>{item}</p>
          ))}
        </div>
      )}
      <div className={style.form__inputs}>
        {modal.inputForms.map((item: string, idx: number) => (
          <div className={style.form__input} key={idx}>
            <input placeholder={item} />
          </div>
        ))}
      </div>
      <div className={style.form__button}>
        <button onClick={() => handleRedirect()}>{modal.mainButton}</button>
      </div>
      <div className={style.form__links}>
        {modal.links.map((item: any) =>
          item.modal ? (
            <button onClick={() => handleClick(item.modal)}>
              {item.title}
            </button>
          ) : (
            <></>
          )
        )}
      </div>
      <div className={style.form__extra_button}>
        <button>{modal.extrButton}</button>
      </div>
    </form>
  );
};

export default ModalAuth;
