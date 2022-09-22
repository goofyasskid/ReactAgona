import { observer } from 'mobx-react';
import Navbar from '../ui/navbar/Navbar';
import UserPanel from '../ui/userPanel/UserPanel';
import style from './Header.module.sass';

const Header = observer(() => {
  return (
    <header className={style.header}>
        <div className={style.header__wrapper}>
            <Navbar/>
            <UserPanel/>
        </div>
    </header>
  )
})

export default Header