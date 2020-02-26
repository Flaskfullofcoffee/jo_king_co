import React from "react"
import { Link } from 'gatsby'
import landingPage from './landingPage.module.scss'

const LandingPage = () => {

  return (
    <div className={landingPage.container}>
      <div className={landingPage.logo}></div>
      <div className={landingPage.navigation}>
        <Link className={landingPage.link} activeClassName={landingPage.active} to='/'>Home</Link>
        <Link className={landingPage.link} activeClassName={landingPage.active} to='#about'>About</Link>
        <Link className={landingPage.link} activeClassName={landingPage.active} to='#services'>Services</Link>
        <Link className={landingPage.link} activeClassName={landingPage.active} to='#contact'>Contact</Link>
      </div>
      <div className={landingPage.grabber}>
        <h2 className={landingPage.title}>Social Media <br />Managment</h2>
        <p className={landingPage.subtext}>Simple solutions for complex problems.</p>
        <button className={landingPage.link}>See More</button>
      </div>
    </div>
  )
}

export default LandingPage
