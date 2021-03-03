import React, {useState, useEffect} from 'react'
import {Nav, Bars, NavMenu, NavLogo, NavBtnLink, NavBtn, MobileIcon, NavBarContainer, NavItem, NavLinks } from "./NavbarElements";
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
import {SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from '../Footer/FooterElements'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
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
                            <h1>Logo</h1>
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
                            <NavItem>
                                <NavLinks to="contactMe" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                    Contact Me
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <SocialIconLink href="//www.linkedin.com/in/rojaunsamuda/" target="_blank" aria-label="LinkedIn">
                                    <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/in/rojaunsamuda/" target="_blank" aria-label="LinkedIn">
                                    <FaGithub/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/in/rojaunsamuda/" target="_blank" aria-label="LinkedIn">
                                    <FiMail/>
                            </SocialIconLink>
                        </NavBtn>
                    </NavBarContainer>
                </Nav>
        </>
    )
}

export default Navbar
