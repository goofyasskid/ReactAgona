import style from "./Navbar.module.sass";
import logo from '../../../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar__wrapper}>
        <img src={logo} alt="logo"/>
        <ul>
          <li>Главная</li>
          <li>Пункты сбора</li>
          <li>ЭкоМаркет</li>
          <li>О сервисе</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
