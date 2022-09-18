import Navbar from '../ui/navbar/Navbar';
import UserPanel from '../ui/userPanel/UserPanel';
import style from './Header.module.sass';

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