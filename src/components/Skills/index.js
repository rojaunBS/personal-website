import React from 'react'
import nodeIcon from '../../images/nodejs.svg'
import pythonIcon from '../../images/python.svg'
import reactIcon from '../../images/react.svg'
import springIcon from '../../images/spring.svg'
import mongoDBIcon from '../../images/mongodb.svg'
import javaIcon from '../../images/java.svg'
import {SkillsContainer, SkillsH1, SkillsWrapper,SkillsCard,SkillsIcon,SkillsH2,SkillsP} from './SkillsElements'
import Scroll from './scroll'


const Skills = () => {

    return (

        <SkillsContainer id="skills">
            <SkillsH1>My Skills</SkillsH1>
            {/* <Scroll> */}
                <SkillsWrapper>
                    <SkillsCard>
                        <SkillsIcon src={nodeIcon}/>
                        {/* <SkillsH2>Node.js</SkillsH2> */}
                        {/* <SkillsP>more words </SkillsP> */}
                    </SkillsCard>
                    <SkillsCard>
                        <SkillsIcon src={pythonIcon}/>
                        {/* <SkillsH2>Description of skill</SkillsH2>
                        <SkillsP>more words </SkillsP> */}
                    </SkillsCard>
                    <SkillsCard>
                        <SkillsIcon src={reactIcon}/>
                        {/* <SkillsH2>Description of skill</SkillsH2>
                        <SkillsP>more words </SkillsP> */}
                    </SkillsCard>
                    <SkillsCard>
                        <SkillsIcon src={springIcon}/>
                        {/* <SkillsH2>Description of skill</SkillsH2>
                        <SkillsP>more words </SkillsP> */}
                    </SkillsCard>
                    <SkillsCard>
                        <SkillsIcon src={mongoDBIcon}/>
                        {/* <SkillsH2>Description of skill</SkillsH2>
                        <SkillsP>more words </SkillsP> */}
                    </SkillsCard>
                    <SkillsCard>
                        <SkillsIcon src={javaIcon}/>
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
            {/* </Scroll> */}
        </SkillsContainer>
    )
}

export default Skills
