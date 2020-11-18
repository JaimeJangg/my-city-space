import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Wave from '../components/wave'
import SectionInnovationMarcas from "../components/sectionInnovationMarcas/sectionInnovationMarcas.js"
import './marcas.css'

import logo from '../images/mcs014.png'

const marcas = () => (
  <Layout>
    <SEO title="Marcas" />
    <div className="heroMarcas">
      <div className="missionMarcas">
        <img src={logo} className="logoImage" alt="logo" />
      </div>
      <Wave />
    </div>
    <SectionInnovationMarcas
        title="Conoce Nuestras Marcas"
        subTitle="La Bodeguita"
        text="Nuestro objetivo en La Bodeguita es sumistrar los mejores alimentos basicos en las poblaciones
            con estrategias de paridad de compra desde el productor hasta el consumidor final logramos que
            a todos nos benefice una compra de los basicos en nuestros hogares."
    />
  </Layout>
)

export default marcas