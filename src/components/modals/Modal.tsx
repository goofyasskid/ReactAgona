import style from "./Modal.module.sass";
import { FC, PropsWithChildren } from "react";

export const Modal: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <div className={style.modal}>
      <div className={style.modal__overlay}>
        <div className={style.modal__wrapper}>{children}</div>
      </div>
    </div>
  );
};
export default Modal;
