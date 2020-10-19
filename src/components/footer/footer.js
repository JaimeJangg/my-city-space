import { Link } from 'gatsby'
import React from 'react'
import './footer.css'
// import styled from 'styled-components'

// const FooterGroup = styled.div`
//     background: white;
//     padding: 50px 0;
//     display: grid;
//     grid-gap: 20px;
// `

// const Text = styled.p`
//     font-weight: 600;
//     color: #486791;
//     max-width: 500px;
//     margin: 0 auto;
// `

// const Button = styled.button`
//     background: linear-gradient(209.21deg, rgb(200, 255, 222) -50%, rgb(53, 142, 239) 98.38%);
//     box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
//     border-radius: 30px;
//     color: white;
//     border: none;
//     padding: 16px 60px;
//     cursor: pointer;
//     font-weight: 600;
//     font-size: 24px;
//     justify-self: center;
//     transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

//     &:hover {
//         box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
//         transform: translateY(-3px);
//     }
// `

// const LinkGroup = styled.div`
//     width: 500px;
//     margin: 50px auto;
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     grid-gap: 10px;

//     a {
//         margin: 0 auto;
//         transition: 0.8s;
//     }

//     a:hover {
//         color: black;
//     }
// `

// const Copyright = styled.div`
//     color: #486791;
//     max-width: 500px;
//     margin: 0 auto;
//     padding: 0 20px;
// `

const Footer = ({ data, children }) => (
    <div className='footerGroup'>
        <p className='footerText'>Comunicate con nuestro equipo.</p>
        <button className="footerButton">
            <Link to="/" style={{color: 'white' }}>Contacto</Link>
        </button>
        <div className='linkGroupFooter'>
            {data.allContentfulLink.edges.map(edge => (
                <Link key={edge.node.title} to={edge.node.url} className="linkFooterStyle">{edge.node.title}</Link>
            ))}</div>
        <div className='copyRightFooter'>
            {children}
        </div>
    </div>
)

export default Footer