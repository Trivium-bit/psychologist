import style from './Header.module.scss';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import MySocialNetworks from '../common/components/MySocialNetworks/MySocialNetworks';


function Header() {
    return (
        <div className={style.headerBlock}>
          <Logo />
          <Nav />
          <MySocialNetworks />
        </div>
    );
}

export default Header;