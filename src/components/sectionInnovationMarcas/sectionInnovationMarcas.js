import React from 'react'
import { Link } from 'gatsby'
import './sectionInnovationMarcas.css'

const SectionInnovationMarcas = props => (
    <div className='sectionGroupMarcas'>
        <h2 className="sectionTitleMarcas">{props.title}</h2>
        <div className='containerSectionMarcas'>
            <div className='imageCardMarcas'/>
            <h3 className='titleCard'>{props.subTitle}</h3>
            <p className='textCard'>{props.text}</p>
            <div className="buttonContainerMarcas">
                <button className="footerButton">
                    <Link to="/laBodeguita" style={{color: 'white' }}>Ver</Link>
                </button>
            </div>
        </div>
    </div>
)

export default SectionInnovationMarcas