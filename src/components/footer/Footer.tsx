import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";
import style from "./Footer.module.sass";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer__wrapper}>
        <ul>
          <li>
            <img src={mail} alt="mail" />
            <p>info@ecorus.ru</p>
          </li>
          <li>
            <img src={phone} alt="phone" />
            <p>+7 (800) 880-88-88</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
