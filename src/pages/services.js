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
      <div className={servicesStyles.listWrapper}>
        <ul className={servicesStyles.list_1}>
          <li className={servicesStyles.listItem}>Insta stories</li>
          <li className={servicesStyles.listItem}>Site loads</li>
          <li className={servicesStyles.listItem}>Site management</li>
          <li className={servicesStyles.listItem}>Graphics for sales</li>
          <li className={servicesStyles.listItem}>Wholesale management</li>
          <li className={servicesStyles.listItem}>Rep. management</li>
        </ul>
        <ul className={servicesStyles.list_2}>
          <li className={servicesStyles.listItem}>Instagram & Facebook<br/>posts w/ engagement</li>
          <li className={servicesStyles.listItem}>Email marketing</li>
          <li className={servicesStyles.listItem}>Customer service</li>
          <li className={servicesStyles.listItem}>Collab management</li>
          <li className={servicesStyles.listItem}>Text marketing</li>
        </ul>
      </div>
    </div>
  )
}

export default Services
