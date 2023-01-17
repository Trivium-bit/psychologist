import React from 'react';
import style from './MySocialNetworks.module.scss'
import {Icon} from '@iconify/react';

function MySocialNetworks() {
  return (
    <div className={style.social}>
    <li><a href=" "><Icon icon="akar-icons:telegram-fill" className={style.icon} width="24" height="24" /></a> </li>
    <li><a href=" "><Icon icon="akar-icons:instagram-fill" className={style.icon} width="24" height="24" /></a> </li>
    <li><a href="https://www.codewars.com/users/Trivium"><Icon icon="cib:codewars" className={style.icon} width="24" height="24" /></a> </li>
    </div>
  );
}

export default MySocialNetworks;
