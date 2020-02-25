import React from "react"
import servicesStyles from './services.module.scss'

const Services = () => {

  return (
    <div className={servicesStyles.container}>
      <div id='services' className={servicesStyles.header}>
        <h2 className={servicesStyles.title}>Monthly services</h2>
        <p className={servicesStyles.subtext}>Whether you only need one thing or are ready to relinquish it all, our build your own plans means there is something for everyone.</p>
        <hr className={servicesStyles.detail}/>
      </div>
      <div className={servicesStyles.illustration}>
        <div className={servicesStyles.object}></div>
      </div>
    </div>
  )
}

export default Services
