import React from 'react';
import style from './Footer.module.scss';
import MySocialNetworks from '../common/components/MySocialNetworks/MySocialNetworks';
import styleContainer from './../common/styles/Container.module.scss';

function Footer() {
  return (
    <div className={style.footerBlock}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <div><MySocialNetworks /></div>
        <div className={style.copyright}>© 2023 All rights reserved </div>
      </div>
    </div>
  );
}

export default Footer;
