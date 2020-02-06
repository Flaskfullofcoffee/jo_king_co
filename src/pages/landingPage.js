import React from "react"
import landingPage from './landingPage.module.scss'

const LandingPage = () => {

  return (
    <div className={landingPage.container}>
      <div className={landingPage.grabber}>
        <h2 className={landingPage.title}>Social Media <br />Managment</h2>
        <p className={landingPage.subtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className={landingPage.link}>See More</button>
      </div>
    </div>
  )
}

export default LandingPage
