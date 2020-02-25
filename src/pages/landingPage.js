import React from "react"
import landingPage from './landingPage.module.scss'

const LandingPage = () => {

  return (
    <div className={landingPage.container}>
      <div className={landingPage.grabber}>
        <h2 className={landingPage.title}>Social Media <br />Managment</h2>
        <p className={landingPage.subtext}>Simple solutions for complex problems.</p>
        <button className={landingPage.link}>See More</button>
      </div>
    </div>
  )
}

export default LandingPage
