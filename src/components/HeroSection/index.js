import React, {useState} from 'react'
import Typewriter from 'typewriter-effect';
import Video from '../../videos/video1.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight,HeroSpan1} from './HeroElements'
import {Button} from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
            <HeroSpan1><HeroH1>Hey, My Name is Rojaun</HeroH1></HeroSpan1>
                {/* <HeroP>Hover Above for a greeting</HeroP> */}
                <Typewriter
                        options={{
                            strings: ["Developer", "Student",
                        "Entrepreneur","Speaker"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                <HeroBtnWrapper>
                    <Button to="about" onMouseEnter = {onHover} onMouseLeave = {onHover}
                    primary = 'true' dark = 'false'smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >
                        Get to Know Me { hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        // <div style ={{display: 'flex', justifyContent: 'center',alignItems:'center' , height: '90vh'}}>
        //         <h3>
        //             Hey, my name is <br/>
        //             <h1>Rojaun Samuda</h1>
                    // <Typewriter
                    //     options={{
                    //         strings: ["Developer", "Student",
                    //     "Entrepreneur","Speaker"],
                    //         autoStart: true,
                    //         loop: true,
                    //     }}
                    // />
        //         </h3>
        //     </div>
    )
}

export default HeroSection
