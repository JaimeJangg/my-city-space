import React from 'react'
import SEO from '../components/seo'
import SectionWave from '../components/sectionWave/sectionWave'
import SectionWaveServices from '../components/sectionWaveServices/sectionWaveServices'
import Wave from '../components/wave'
import SectionInnovation from '../components/sectionInnovation/sectionInnovation'
import SideBar from '../components/sideBar'
import Layout from '../components/layout'
import CardsProjects from '../components/cardsProjects/cardsProjects'

//images
import logo from '../images/mcs014.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SideBar pageWrapId={"page-wrap"} />
    <div className="hero">
      <div className="mission">
        <img src={logo} className="logoImage" alt="logo" />
      </div>
      <Wave />
    </div>
      <SectionInnovation
        title="Buscamos construir las estructuras del futuro."
        text="Sabemos que el rezago de las tecnologias del momento
          sorprende de manera inadecuada a los negocios y a las sociedades si no son utilizadas apropiadamente,
          en ocaciones sin siquiera percatarse, nosotros queremos ayudarte a que poco a poco todos podamos darnos cuenta
          de lo que implica esto y como meta lograr que las sociedades y negocios sean exitosos y utilicen las tecnologias
          de forma correcta."
      />
    <SectionWave 
      title="Nuestros Proyectos..."
    />
      <CardsProjects
        linkCard="Ver Proyectos"
      />
    <SectionWaveServices
      title="Nuestros Servicios..."
      text="Estan hechos para que tus negocios, proyectos y tu gente sean un exito, siempre con
        el toque mas humano posible, nuestro equipo es tu equipo."
    />
      <div className="interceptionCards">
        <div className="servicesBackground" />
          <h2 className="sectionTitle">Proximamente podras encontrar nuestro listado de servicios segun tu localilad.</h2>
      </div>
  </Layout>
)

export default IndexPage
