import React from 'react'
import css from './Hero.module.css'; //css
import LogoSrc from '../images/logo-pg.png'; //logo

const Hero = () => {
  return (
    <div className={css.heroImg}>
      <header className={css.header}></header>
      <div className={css.logoSrc}>
        <img src={LogoSrc} alt="private gourmet logo"></img>
      </div>
      <div className={css.heroTagline}>
        <p>
          Book and Experience the finest dining in your home kitchen
        </p>        
      </div>
    </div>
  )
}

export default Hero