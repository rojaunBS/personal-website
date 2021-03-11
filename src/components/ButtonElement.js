import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary})=> (primary? "#C41E3D" : "#010606")};
    white-space: nowrap;
    padding: ${({big})=> (big? '14px 48px' : '12px 30px')};
    color: ${({dark})=> (dark? '#fff' : 'black')};
    font-size: ${({fontBig})=> (fontBig? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary})=> (primary? "#fff" : "#01bf71")};
    color: ${({dark})=> (dark? '#C41E3D' : 'black')};
    border: solid #C41E3D 2px;
}
`
export const Button2 = styled.a`
    border-radius: 50px;
    background: ${({primary})=> (primary? "#C41E3D" : "#010606")};
    white-space: nowrap;
    padding: ${({big})=> (big? '14px 48px' : '12px 30px')};
    color: ${({dark})=> (dark? '#fff' : 'black')};
    font-size: ${({fontBig})=> (fontBig? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary})=> (primary? "#fff" : "#01bf71")};
    color: ${({dark})=> (dark? '#C41E3D' : 'black')};
    border: solid #C41E3D 2px;
}
`