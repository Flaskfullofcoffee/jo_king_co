import React from 'react';
import Header from "./header"
import LandingPage from './landingPage'
import Footer from "./footer"
import layoutStyles from './layout.module.scss'

const Layout = (props) => {

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.introContent}>
        <Header />
        <LandingPage />
      </div>
          {props.children}
      <Footer />
    </div>
  )
}

export default Layout
