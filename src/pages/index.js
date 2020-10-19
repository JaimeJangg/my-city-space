import React from 'react'
import SEO from '../components/seo'
// import SectionWave from '../components/sectionWave'
import Wave from '../components/wave'
import SectionInnovation from '../components/sectionInnovation/sectionInnovation'
import SideBar from '../components/sideBar'
import Layout from '../components/layout'
// import ProjectCard from '../components/projectCard'

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
    {/* <div className="cards"> */}
      {/* <h2 className="interceptionCards">Inovacion tecnologica para mejorar la vida de las sociedades.</h2> */}
      <SectionInnovation
        title="Buscamos construir las estructuras del futuro."
        text="Sabemos que el rezago de las tecnologias del momento
          sorprende de manera inadecuada a los negocios y a las sociedades si no son utilizadas apropiadamente,
          en ocaciones sin siquiera percatarse, nosotros queremos ayudarte a que poco a poco todos podamos darnos cuenta
          de lo que implica esto y como meta lograr que las sociedades y negocios sean exitosos y utilicen las tecnologias
          de forma correcta."
      />
    {/* </div> */}
    {/* <SectionWave 
      image={require('../images/projects.jpeg')}
      title="Nuestros Proyectos..."
    />
    <div className="cards">
      <h2 className="interceptionCards">
        Estan hechos para que tus negocios, tu gente y nuestra gente crezca.
      </h2>
      <ProjectCard
        image={require('../images/crece1.jpeg')}
        linkCard="Ver Proyectos"
      />
    </div>
    <SectionWave 
      image={require('../images/services.jpeg')}
      title="Nuestros Servicios..."
      text="Estan hechos para que tus negocios, proyectos y tu gente sean un exito, siempre con
        el toque mas humano posible, nuestro equipo es tu equipo."
    />
    <div className="cards">
      <h2 className="interceptionCards">
        <div className="servicesBackground" />
        <div>
          Proximamente podras encontrar nuestro listado de servicios segun tu localilad.
        </div>
      </h2>
    </div> */}
  </Layout>
)

export default IndexPage
