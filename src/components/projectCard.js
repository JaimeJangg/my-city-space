import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const SectionGroup = styled.div`
    height: 300px;
    display: flex;
    justify-content: center;
    margin-bottom: 310px;

    @media (max-width: 640px) {
        height: 320px;
        margin-bottom: 0;
    }
`

const ContainerSection = styled.div`
    width: 1000px;
    height: 500px;
    position: relative;
    border: none;
    border-radius: 0px 0px 20px 20px;

    @media (max-width: 640px) {
        border-radius: 0; 
    }
`
const ImageCard = styled.div`
    background: url(${props => props.image});
    background-size: cover;
    background-position: 50% 100%;
    width: 100%;
    height: 100%;
    border-radius: 20px 20px;
    border: none;
    display: flex;

    @media (max-width: 640px) {
        height: 300px;
        border-radius: 0;
    }
`

const ContainerLink = styled.div`
    height: 100px;
    width: 100%;
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(209.21deg, rgb(200, 255, 222) -50%, rgb(53, 142, 239) 98.38%);
    border-radius: 0px 0px 20px 20px;

    @media (max-width: 640px) {
        border-radius: 0;
    }
`

const LinkCard = styled.h3`
    background: white;
    margin: 50px 20px;
    font-size: 30px;
    font-weight: 600;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const ProjectCard = props => (
    <SectionGroup>
        <ContainerSection>
            <ImageCard image={props.image}>
                <ContainerLink>
                    <LinkCard><Link to="/">{props.linkCard}</Link></LinkCard>
                </ContainerLink>
            </ImageCard>
        </ContainerSection>
    </SectionGroup>
)

export default ProjectCard