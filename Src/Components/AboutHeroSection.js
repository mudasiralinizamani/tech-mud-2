import React from 'react'

import css from "../Assets/CSS/AboutHeroSection.module.css"

function AboutHeroSection({title1, title2}) {
  return (
    <>
     <section className={css.HeroSection}>
        <h2>{title1}</h2>
        <h4>{title2}</h4>
      </section> 
    </>
  )
}

export default AboutHeroSection
