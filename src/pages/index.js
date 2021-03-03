import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/Info Section';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Info Section/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Skills from '../components/Skills';
import Footer from '../components/Footer'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        //toggles from true to false and false to true
        setIsOpen(!isOpen);
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Skills/>
            <InfoSection {...homeObjThree}/>
            <Footer/>
            {/* <div style ={{display: 'flex', justifyContent: 'center',alignItems:'center' , height: '90vh'}}>
                <h3>
                
                    Hey, my name is <br/>
                    <h1>Rojaun Samuda</h1>
                    <Typewriter
                        options={{
                            strings: ["Developer", "Student",
                        "Entrepreneur","Speaker"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h3>
            </div> */}
        </>
    )
}

export default Home
