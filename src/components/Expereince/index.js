import React from 'react'
import {ExperienceContainer, ExperienceWrapper,ExperienceTitle, ExperienceCard, CompanyName, JobTitle, Years, Subtitle, LangTech, DescriptionH1, DescriptionUl, DescriptionLi} from './ExperienceElements'



const Experience = () => {
    return (
        <ExperienceContainer id="experience">
            <ExperienceTitle>Experience</ExperienceTitle>
            <ExperienceWrapper>
                <ExperienceCard>
                    <CompanyName>Cigna</CompanyName>
                    <JobTitle>Application Developer</JobTitle>
                    <Years>May 2020-Present</Years>
                    <Subtitle>Languages/Technologies</Subtitle>
                        <LangTech>Java, Spring, MongoDB, Git, Bootsrap</LangTech>
                    <DescriptionH1>Tasks:</DescriptionH1>
                    <DescriptionUl>
                        <DescriptionLi>Tested, created, and maintained scripts that tested functionality of web applicaitons while also performing enhancements on previous features and styling of the application</DescriptionLi>
                    </DescriptionUl>
                </ExperienceCard>
                <ExperienceCard>
                    <CompanyName>Cigna</CompanyName>
                    <JobTitle>Project Manager</JobTitle>
                    <Years>May 2020 - August 2020</Years>
                    <Subtitle>Languages/Technologies</Subtitle>
                        <LangTech>Angular, Node.js, Docker, Jenkins, OpenShift</LangTech>
                    <DescriptionH1>Tasks</DescriptionH1>
                    <DescriptionUl>
                        <DescriptionLi>Coordinated with team memebers to develop a responsive web application that predicts the likelihood a patient resumes in-person care. </DescriptionLi>
                        <DescriptionLi>worked with people</DescriptionLi>
                    </DescriptionUl>
                </ExperienceCard>
                
            </ExperienceWrapper>
        </ExperienceContainer>
    )
}

export default Experience
