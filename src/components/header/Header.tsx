import style from './Header.module.sass';
import Navbar from './navbar/Navbar';
import UserPanel from './userPanel/UserPanel';

const Header = () => {
  return (
    <header className={style.header}>
        <div className={style.header__wrapper}>
            <Navbar/>
            <UserPanel/>
        </div>
    </header>
  )
}

export default Header