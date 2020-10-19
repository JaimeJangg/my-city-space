import React from 'react'
import styled from 'styled-components'
import Circles from './circles'

const SectionGroup = styled.div`
    height: 800px;
    display: flex;
    justify-content: center;
    margin-bottom: 310px;

    @media (max-width: 640px) {
        height: 820px;
        margin-bottom: 0;
    }
`

const ContainerSection = styled.div`
    width: 1000px;
    border-radius: 20px;
    background: linear-gradient(209.21deg, rgb(200, 255, 222) 13.57%, rgb(53, 142, 239) 98.38%);
    position: relative;

    @media (max-width: 640px) {
        height: 800px;
        border-radius: 0; 
    }
`
const ImageCard = styled.div`
    background: url(${props => props.image});
    background-size: cover;
    background-position: 50% 100%;
    width: 100%;
    height: 450px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    @media (max-width: 640px) {
        height: 300px;
        border-radius: 0;
    }
`

const TextCard = styled.p`
    color: white;
    font-weight: 500;
    font-size: 22px;
    text-align: left;
    margin: 0 0 20px 20px;
`

const TitleCard = styled.h3`
    background: white;
    margin: 50px 20px;
    font-size: 30px;
    text-align: center;
    font-weight: 600;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const CirclesContainer = styled.div`
    position: absolute;
    width: 100%;
`

const Section = props => (
    <SectionGroup>
        <CirclesContainer>
            <Circles />
        </CirclesContainer>
        <ContainerSection>
            <ImageCard image={props.image} />
            <TitleCard>{props.title}</TitleCard>
            <TextCard>{props.text}</TextCard>
        </ContainerSection>
    </SectionGroup>
)

export default Section