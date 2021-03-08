import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/Info Section';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Info Section/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Skills from '../components/Skills';
import Footer from '../components/Footer'
import Experience from '../components/Expereince';


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
            <Experience/>

            <Skills/>
            {/* <InfoSection {...homeObjThree}/> */}
            <Footer/>
        </>
    )
}

export default Home
