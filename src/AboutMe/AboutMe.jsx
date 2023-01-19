import style from './AboutMe.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import aboutMe from '../common/assets/image/aboutMe.jpg'


function AboutMe() {
  return (
    <div className={`${styleContainer.container} ${style.aboutMeBlock}`}>
      <img className={style.photo} src={aboutMe} alt={"mainFoto"} />
      <div className={style.aboutMe}>
        <span>About Me</span>
        <h2>Mental Health Counseling</h2>
        <div className={style.p}>
          Donec et odio pellentesque diam volutpat. Quis vel eros donec ac odio.
          Adipiscing elit duis tristique sollicitudin nibh sit.
          Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed.
          <br />
          <br />
          Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Volutpat diam ut venenatis tellus in.
        </div>
        <button className={style.button}>Read more</button>
      </div>
    </div>
  );
}

export default AboutMe;