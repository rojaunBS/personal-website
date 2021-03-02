import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-1.svg'
import Icon3 from '../../images/svg-1.svg'
import {SkillsContainer, SkillsH1, SkillsWrapper,SkillsCard,SkillsIcon,SkillsH2,SkillsP} from './SkillsElements'


const Skills = () => {

    return (
        <SkillsContainer id="skills">
            <SkillsH1>My Skills</SkillsH1>
            <SkillsWrapper>
                <SkillsCard>
                    <SkillsIcon src={Icon1}/>
                    {/* <SkillsH2>Description of skill</SkillsH2>
                    <SkillsP>more words </SkillsP> */}
                </SkillsCard>
                <SkillsCard>
                    <SkillsIcon src={Icon1}/>
                    {/* <SkillsH2>Description of skill</SkillsH2>
                    <SkillsP>more words </SkillsP> */}
                </SkillsCard>
                <SkillsCard>
                    <SkillsIcon src={Icon1}/>
                    {/* <SkillsH2>Description of skill</SkillsH2>
                    <SkillsP>more words </SkillsP> */}
                </SkillsCard>
                <SkillsCard>
                    <SkillsIcon src={Icon1}/>
                    {/* <SkillsH2>Description of skill</SkillsH2>
                    <SkillsP>more words </SkillsP> */}
                </SkillsCard>
                <SkillsCard>
                    <SkillsIcon src={Icon1}/>
                    {/* <SkillsH2>Description of skill</SkillsH2>
                    <SkillsP>more words </SkillsP> */}
                </SkillsCard>
                <SkillsCard>
                    <SkillsIcon src={Icon1}/>
                    {/* <SkillsH2>Description of skill</SkillsH2>
                    <SkillsP>more words </SkillsP> */}
                </SkillsCard>
                {/* <SkillsCard>
                    <SkillsIcon src={Icon1}/>
                    <SkillsH2>Description of skill</SkillsH2>
                    <SkillsP>more words </SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillsIcon src={Icon1}/>
                    <SkillsH2>Description of skill</SkillsH2>
                    <SkillsP>more words </SkillsP>
                </SkillsCard> */}
                
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default Skills
