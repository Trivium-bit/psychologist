import React from 'react';
import style from './Nav.module.scss';
import { Link } from 'react-scroll';

function Nav() {
  return (
    <div className={style.nav}>
      <Link
        activeClass={style.active}
        to="main"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={500}
        isDynamic={true}
        ignoreCancelEvents={false}
        spyThrottle={500}
      > MAIN
       </Link>
       <Link
        activeClass={style.active}
        to="skills"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-67}
        duration={500}
        isDynamic={true}
        ignoreCancelEvents={false}
        spyThrottle={500}
      > SKILLS
       </Link>
      <Link
        activeClass={style.active}
        to="projects"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-67}
        duration={500}
        isDynamic={true}
        ignoreCancelEvents={false}
        spyThrottle={500}
      > PROJECTS
       </Link>
       <Link
        activeClass={style.active}
        to="contacts"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={500}
        isDynamic={true}
        ignoreCancelEvents={false}
        spyThrottle={500}
      > CONTACTS
       </Link>
    </div>
  );
}

export default Nav;
