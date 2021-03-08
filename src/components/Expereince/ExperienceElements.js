import styled from 'styled-components'

export const ExperienceContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F6F8FF;
`
export const ExperienceWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    height: 60%;
    width: 100%;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 20px;
}
`
export const ExperienceTitle = styled.h1`
    font-size: 2.5rem;
    color: black;
    margin-bottom: 64px;
    margin-top: -84px;
`

export const ExperienceCard = styled.div`
    border: #011627 solid 5px;
    border-radius: 30px;
    text-align: center;
    background-color: #FFF;
    box-sizing: border-box;
    height: 100%;
    flex-direction: column;
`
export const CompanyName = styled.h1`
    font-size: 36px;
    font-weight: 400;
    margin-top: 25px;
    color: #444;
`
export const JobTitle = styled.h2`
    font-size: 24px;
    font-weight: 700;
    color: #888;
    margin-top: 5px;
`
export const Years = styled.h3`
    font-weight: 400;
    color: #888;
`
export const Subtitle = styled.h1`
    display: block;
    padding-top: 30px;
    padding-bottom: 10px;
`
export const LangTechContainer = styled.ul`
    color: black;
`
export const LangTech = styled.li`
    color: black;
    list-style-type: none;
`

export const DescriptionH1 = styled.h2`
    color: orange;
    margin: 0px;
`
export const DescriptionUl = styled.ul`
    display: block;
    align-items: center;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    list-style-type: none;
    
`
export const DescriptionLi = styled.li`
    color: orange;
    margin: 0px;
    
`