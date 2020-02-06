import React from 'react'
import { Link } from 'gatsby'
import Head from './head'
import headerStyles from './header.module.scss'

const Header = () => {
  return (
    <header>
      <div className={headerStyles.logo}></div>
      <ul className={headerStyles.nav}>
        <li className={headerStyles.listItem}>
          <Link className={headerStyles.link} activeClassName={headerStyles.active} to='/'>Home</Link>
        </li>
        <li className={headerStyles.listItem}>
          <Link className={headerStyles.link} activeClassName={headerStyles.active} to='#about'>About</Link>
        </li>
        <li className={headerStyles.listItem}>
          <Link className={headerStyles.link} activeClassName={headerStyles.active} to='#services'>Services</Link>
        </li>
        <li className={headerStyles.listItem}>
          <Link className={headerStyles.link} activeClassName={headerStyles.active} to='#contact'>Contact</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
