import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Wave from '../components/wave'
import './laBodeguita.css'

import logo from '../images/lbw.png'

const laBodeguita = () => (
  <Layout>
    <SEO title="LaBodeguita" />
    <div className="heroBodeguita">
      <div className="missionBodeguita">
        <img src={logo} className="logoImageBodeguita" alt="logo" />
      </div>
      <Wave />
    </div>
  </Layout>
)

export default laBodeguita