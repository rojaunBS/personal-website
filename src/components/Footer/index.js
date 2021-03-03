import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import {FooterContainer, FooterWrap, FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'
import logo from '../../images/LogoRSWhite.png'
import {Img} from '../Navbar/NavbarElements'


const Footer = () => {
    const toggleHome = ()=>{
        scroll.scrollToTop();
    }
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <Img src={logo} to='/' onClick={toggleHome}/>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                                Rojaun Samuda
                            </SocialLogo>
                            <WebsiteRights> Rojaun Samuda &copy; {new Date().getFullYear()} All rights reserved</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="//www.linkedin.com/in/rojaunsamuda/" target="_blank" aria-label="LinkedIn">
                                    <FaLinkedin/>
                                </SocialIconLink>
                                <SocialIconLink href="//github.com/rojaunBS/" target="_blank" aria-label="LinkedIn">
                                    <FaGithub/>
                                </SocialIconLink>
                                <SocialIconLink href="mailto:rojaun.samuda@uconn.edu" aria-label="Email">
                                    <FiMail/>
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
