import React from 'react';
import style from './Main.module.scss';
import foto from '../common/assets/image/foto.png';

function Main() {
  
  return (
    <div className={style.mainBlock}>
      <div className={style.mainContainer}>
        <div className={style.greetings}>
          <span>Привет всем</span>
          <h1>I am Baliankova Yulia</h1>
        </div>
        <div className={style.foto}>
        <img className={style.foto} src={foto} alt={"mainFoto"} />
        </div>
      </div>
    </div>
  );
}

export default Main;