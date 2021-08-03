import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside `
    position: fixed;
    z-index: 999;
    width: 80%;
    height: 100%;
    background: #0d0d0d;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding-top: 30px; */
    /* top: 0;
    left: 0; */
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    /* top: 0; */
`

export const CloseIcon = styled(FaTimes) `
    color: #fff;
`

export const Icon = styled.div `
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWraper = styled.div `
    color: #fff;
`

export const SidebarMenu = styled.ul `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 60px);
    text-align: center;

    @media screen and (max-width:480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkS) `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    transition: 0ms.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0ms.2s ease-ease-in-out;
    }
`

export const SideBtnWrap = styled.div `
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR) `
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    margin-top: 10vh;
    padding: 12px 50px;
    color: #010606;
    font-size: 1.2rem;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: green;
        color: #010606;
    }
`