import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import About from '../components/about'
import Services from '../components/services'
import Grabber from '../components/grabber'
import Contact  from '../components/contact'
import indexStyles from './index.module.scss'


const IndexPage = () => {

  return (
    <Layout>
      <About />
      <Services />
      <Grabber />
      <Contact />
    </Layout>
  )
}

export default IndexPage
