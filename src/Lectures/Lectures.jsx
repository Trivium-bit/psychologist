import style from './Lectures.module.scss'
import styleContainer from '../common/styles/Container.module.scss'

function Lectures() {
  return (
    <div className={style.lecturesBlock}>
      <div className={`${styleContainer.container} ${style.lectures}`}>
        <span>Лекции</span>
        <h2>Видео №1</h2>
        <div className={style.p}>
          Donec et odio pellentesque diam volutpat. Quis vel eros donec ac odio.
          Adipiscing elit duis tristique sollicitudin nibh sit.
          Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed.
        </div>
        <iframe className={style.video}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vO1HUCrRbBk?fs=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="allowfullscreen"></iframe>

        <span>Лекции</span>
        <h2>Видео №2</h2>
        <div className={style.p}>
          Donec et odio pellentesque diam volutpat. Quis vel eros donec ac odio.
          Adipiscing elit duis tristique sollicitudin nibh sit.
          Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed.
        </div>
        <iframe className={style.video}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vO1HUCrRbBk?fs=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="allowfullscreen"></iframe>
      </div>
    </div>
  );
}

export default Lectures;