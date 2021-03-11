import React, {useState, useEffect} from 'react'
import {Nav, Bars, NavMenu, NavLogo, NavBtnLink, NavBtn, MobileIcon, NavBarContainer, NavItem, NavLinks, Img } from "./NavbarElements";
import {animateScroll as scroll} from 'react-scroll';
import {SocialIconLink} from '../Footer/FooterElements'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import logo from '../../images/LogoRSWhite.png'
const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = ()=>{
        scroll.scrollToTop();
    }

    return (
        <>
                <Nav scrollNav={scrollNav}>
                    <NavBarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            <Img src={logo}/>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <Bars/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                    About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="experience" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                    Experience
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                    Skills
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <SocialIconLink href="//www.linkedin.com/in/rojaunsamuda/" target="_blank" aria-label="LinkedIn">
                                    <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href="//github.com/rojaunBS/" target="_blank" aria-label="GitHub">
                                    <FaGithub/>
                            </SocialIconLink>
                            <SocialIconLink href="mailto:rojaun.samuda@uconn.edu" aria-label="Email">
                                    <FiMail/>
                            </SocialIconLink>
                        </NavBtn>
                    </NavBarContainer>
                </Nav>
        </>
    )
}

export default Navbar
