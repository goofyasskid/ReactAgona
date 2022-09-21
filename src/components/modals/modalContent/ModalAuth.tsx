import { IModalsContent } from "../../../interface/IModal.interface";
import style from "./ModalContent.module.sass";
import { FC } from "react";

const ModalAuth: FC<IModalsContent> = ({modal}) => {
  return (
    <form className={style.form}>
      <h1>{modal.title}</h1>
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
        <button>{modal.mainButton}</button>
      </div>
      <div className={style.form__links}>
        {modal.links.map((item: string) => (
          <a>{item}</a>
        ))}
      </div>
      <div className={style.form__extra_button}>
        <button>{modal.extrButton}</button>
      </div>
    </form>
  );
};

export default ModalAuth;
