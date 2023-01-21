import React from 'react';
import style from './Logo.module.scss';
import logo from '../../common/assets/icons/logo3.png';

function Logo() {
  return (
    <div>
      <img className={style.logo} src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
