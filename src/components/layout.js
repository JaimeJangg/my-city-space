import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./navBar"
import "./layout.css"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
      allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
        edges {
          node {
            title
            url
            createdAt
          }
        }
      }
    }
  `)

  return (
    <>
      <Header 
        siteTitle={data.site.siteMetadata?.title || `Title`} 
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords },
        ]}
      />
        <main>{children}</main>
        {/* <Footer data={data}>
          Aplicacion construida por el equipo de My City Space Mexico.
          <a href="mailto:jaime_rueda10@hotmail.com"> Nuestro Email</a> para cualquier pregunta. © 2020 - Terms of Service - Privacy Policy
        </Footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
