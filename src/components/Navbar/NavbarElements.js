import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {FaBars} from 'react-icons/fa'


export const Nav = styled.nav`
    background-color: ${({scrollNav}) => (scrollNav ? '#011627' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    /* padding: 0.5rem calc((100vw-1000px) / 2); */
    z-index: 10;
    top: 0;
    font-size: .9rem;
    transition: 0.15s ease-in-out;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;

`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`
export const MobileIcon = styled.div`
    display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}

`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top:0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -24px;
    margin-top: 15px;
    text-decoration: none;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 90%;
    cursor: pointer;
    

&.active{
    border-bottom: 3px solid #15cdfc; 
    transition: 0.1s ease-in-out;  
}
&:hover{
    transition: all 0.2s ease-in-out;
    color: #256ce1;
}
`

export const NavBtn = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #256ce1;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-top: 9px;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`