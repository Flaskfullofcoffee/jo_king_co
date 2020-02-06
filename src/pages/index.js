import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import About from './about'
import Services from './services'
import Grabber from './grabber'
import Contact  from './contact'
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
