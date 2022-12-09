import styled from "styled-components";
import { LogoFull } from '../Logo';
export const Nav = styled.nav`
    display: flex;
    width: 100vw;
    height: 4em;
    background-color: var(--dark-color);
   
`
export const Ul = styled.ul`
 margin-top: 1.5em;
 display: flex;
flex: row;   
`
export const Li = styled.li`
padding-left: 1.5em;
display: flex;
list-style: none;
    
`
export const A = styled.a`
display: flex;
height: 1.5em;
text-decoration:none;
margin: 0px;
padding: 0px;
color: var( --dark-text-color);
&&:hover{
    color: var(--secondary-color);
    border-bottom: var(--secondary-color) 5px solid;
}
`
export const LogoNav = styled(LogoFull)``