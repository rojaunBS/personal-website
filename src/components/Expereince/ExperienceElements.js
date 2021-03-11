import styled from 'styled-components'

export const ExperienceContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F6F8FF;
    text-align: center;

@media screen and (max-width: 768px){
    height: 1100px;
}

@media screen and (max-width: 480px){
    height: 1400px;
}
`
export const ExperienceWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    height: 80%;
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
`

export const ExperienceCard = styled.div`
    border: #011627 solid 5px;
    border-radius: 30px;
    text-align: center;
    background-color: #FFF;
    box-sizing: border-box;
    max-height: 492px;
    flex-direction: column;
    padding: 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

@media screen and (max-width: 768px){
    height: 100%;
}

@media screen and (max-width: 480px){
    height: 100%;
}
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
    padding-top: 20px;
    margin-bottom: 10px;
    font-size: 20px;
`

export const LangTech = styled.p`
    color: black;
    /* list-style-type: none; */
`

export const DescriptionH1 = styled.h2`
    color: black;
    font-size: 22px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 0px;
`
export const DescriptionUl = styled.ul`
    display: block;
    align-items: center;
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding-inline-start: 40px;
    padding-inline-end: 40px;
    list-style-type: none;
    
`
export const DescriptionLi = styled.li`
    color: black;
    margin: 0px;
    
`