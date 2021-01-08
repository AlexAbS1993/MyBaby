import { Link, NavLink } from 'react-router-dom'
import {Card} from 'react-bootstrap'
import styled from 'styled-components'


export const LinkStyled = styled(NavLink)`
    text-decoration: none;
    underline: none;
    color: ${props => props.authstate.isAuth ? `white` : `#545454`};
    font-size: 1.1rem;
    transform: scale(2);
    padding: 10px;
    &:hover {
        color: ${props => props.authstate.isAuth ? `white` : `#545454`};
        text-decoration: none;
        underline: none;
        background-color: rgba(255, 99, 71, 0.5);
        border-radius: 10px;
        padding: 10px;
        box-sizing: border-box;
    };
`


export const ReglogStyled = styled(NavLink)`
text-decoration: none;
underline: none;
color: white;
font-size: 1.1rem;
&:hover {
    color: white;
    text-decoration: none;
    underline: none;
};
`

export const TitleStyled = styled(Link)`
    text-decoration: none;
    color: primary;
    font-size: 1.4rem;
    &:hover {
        color: primary;
        text-decoration: none;
        underline: none;
    }
`

export const CardStyled = styled(Card)`
    width: 400px;
    padding: 25px;
`
export const PaginatorAct = styled.div`
    border: ${props => props.element === props.currentPage ? `blue 2px solid` : `black 1px solid`};
    color: ${props => props.element === props.currentPage ? `green` : `black`};
    width: 45px;
    height: 45px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
`

export const BigPhoto = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(128,128,128, 0.8);
    position: fixed;
    left: 0px;
    top: 0px;
`

export const MiniPhoto = styled.img`
    width: 100%;
`