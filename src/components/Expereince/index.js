import React from 'react'
import {ExperienceContainer, ExperienceWrapper,ExperienceTitle, ExperienceCard, CompanyName, JobTitle, Years, Subtitle, LangTechContainer, LangTech, DescriptionH1, DescriptionUl, DescriptionLi} from './ExperienceElements'



const Experience = () => {
    return (
        <ExperienceContainer id="experience">
            <ExperienceTitle>Experience and Projects</ExperienceTitle>
            <ExperienceWrapper>
                <ExperienceCard>
                    <CompanyName>Cigna</CompanyName>
                    <JobTitle>Application Developer</JobTitle>
                    <Years>May 2020-Present</Years>
                    <Subtitle>Languages</Subtitle>
                    <LangTechContainer>
                        <LangTech>Java</LangTech>
                        <LangTech>Spring</LangTech>
                        <LangTech>VS Code</LangTech>
                        <LangTech>MongoDB</LangTech>
                    </LangTechContainer>
                    <DescriptionH1>Tasks:</DescriptionH1>
                    <DescriptionUl>
                        <DescriptionLi><span>Worked with people</span></DescriptionLi>
                        <DescriptionLi>worked with people</DescriptionLi>
                    </DescriptionUl>
                </ExperienceCard>
                <ExperienceCard>
                    <CompanyName>Cigna</CompanyName>
                    <JobTitle>Application Developer</JobTitle>
                    <Years>May 2020-Present</Years>
                    <Subtitle>Languages</Subtitle>
                    <LangTechContainer>
                        <LangTech>Java</LangTech>
                        <LangTech>Spring</LangTech>
                        <LangTech>VS Code</LangTech>
                        <LangTech>MongoDB</LangTech>
                    </LangTechContainer>
                    <DescriptionH1>Tasks</DescriptionH1>
                    <DescriptionUl>
                        <DescriptionLi>worked with peopleeeeeeeeeeeeeeeeeeeeeeee</DescriptionLi>
                        
                        <DescriptionLi>worked with people</DescriptionLi>
                    </DescriptionUl>
                </ExperienceCard>
                
            </ExperienceWrapper>
        </ExperienceContainer>
    )
}

export default Experience
