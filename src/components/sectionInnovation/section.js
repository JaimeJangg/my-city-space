import React from 'react'
// import styled from 'styled-components'
import './section.css'
import Circles from '../circles'

// const ImageCard = styled.div`
//     background: url(${props => props.image});
//     background-size: cover;
//     background-position: 50% 100%;
//     width: 100%;
//     height: 450px;
//     border-top-left-radius: 20px;
//     border-top-right-radius: 20px;

//     @media (max-width: 640px) {
//         height: 300px;
//         border-radius: 0;
//     }
// `

// const TextCard = styled.p`
//     color: white;
//     font-weight: 500;
//     font-size: 22px;
//     text-align: left;
//     margin: 0 0 20px 20px;
// `

// const TitleCard = styled.h3`
//     background: white;
//     margin: 50px 20px;
//     font-size: 30px;
//     text-align: center;
//     font-weight: 600;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
// `
// const CirclesContainer = styled.div`
//     position: absolute;
//     width: 100%;
// `

const Section = props => (
    <div className='sectionGroup'>
        <div className='circlesContainer'>
            <Circles />
        </div>
        <div className='containerSection'>
            <div className='imageCard'/>
            <h3 className='titleCard'>{props.title}</h3>
            <p className='textCard'>{props.text}</p>
        </div>
    </div>
)

export default Section