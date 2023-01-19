import React from 'react';
import style from './Main.module.scss';
import photo from '../common/assets/image/photo.png';

function Main() {
  
  return (
    <div className={style.mainBlock}>
        <div className={style.background}>
{/* <img className={style.background} src={background} alt={"background"} /> */}
      <div className={style.mainContainer}>

        <div className={style.greetings}>
          <span>Привет всем</span>
          <h1>Моё имя Юлия,<br/>
             и я психолог</h1>
        </div>
        <div className={style.photo}>
        <img className={style.photo} src={photo} alt={"mainPhoto"} />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Main;