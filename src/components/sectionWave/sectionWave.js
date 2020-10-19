import React from 'react'
import './sectionWave.css'
// import styled from 'styled-components'
import Wave from '../wave'

// const SectionGroup = styled.div`
//     background: url(${props => props.image});
//     height: 800px;
//     background-size: cover;
//     background-position: 50% 70%;
//     display: grid;
//     grid-template-rows: 300px auto;
//     grid-gap: 20px;
//     position: relative;

//     @media (max-width: 640px) {
//         height: 820px;
//         grid-gap: 20px;
//     }
// `

// const SectionLogo = styled.img`
//     align-self: end;
//     width: 128px;
//     margin: 0 auto;
// `

// const SectionTitleGroup = styled.div`
//     display: grid;
//     grid-template-columns: 400px auto;
//     margin: 0 100px;
//     grid-gap: 00px;
//     grid-template-rows: auto 100%;
    
//     @media (max-width: 720px) {
//         grid-template-columns: 1fr;
//         grid-gap: 20px;
//     }
// `

// const WaveTop = styled.div`
//     position: absolute;
//     width: 100%;
//     top: -6px;
//     transform: rotate(180deg);
// `

// const WaveBottom = styled.div`
//     position: absolute;
//     width: 100%;
//     bottom: -6px;
// `
// const SectionTitle = styled.h3`
//     color: white;
//     backdrop-filter: blur(40px) saturate(120%) brightness(120%);
//     border-radius: 20px;
//     font-size: 60px;
//     margin: 0;
//     line-height: 1.2;
//     padding: 20px;

//     @media (max-width: 720px) {
//         font-size: 40px;
//     }
// `
// const SectionText = styled.p`
//     color: white;
// `

const SectionWave = props => (
    <div className='sectionGroupWave'>
    <h3 className='sectionTitleWave'>{props.title}</h3>
        <div className='waveTop'>
            <Wave />
        </div>
        <div className='waveBottom'>
            <Wave />
        </div>
        {/* <SectionLogo src={props.logo} /> */}
        {/* <div className='sectionTitleGroupWave'> */}
            {/* <h3 className='sectionTitleWave'>{props.title}</h3> */}
            {/* <SectionText>{props.text}</SectionText> */}
        {/* </div> */}
    </div>
)

export default SectionWave