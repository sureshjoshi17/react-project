import React from 'react';
import {
    SidebarContainer, 
    Icon,
    CloseIcon, 
    SidebarWraper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
   
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWraper>
                <SidebarMenu>
                    <SidebarLink to='/home' onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to='/about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='/discover' onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='/services' onClick={toggle}>
                        Services
                    </SidebarLink>

                    {/* <SidebarLink to='/services' onClick={toggle}>
                        Sign Up
                    </SidebarLink> */}
                    
                    <SidebarLink to='/register'  onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                    <SidebarLink>
                        <SideBtnWrap>
                            <SidebarRoute to='/login' onClick={toggle}>
                                Sign In
                            </SidebarRoute>
                        </SideBtnWrap>
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWraper>
        </SidebarContainer>
    )
}

export default Sidebar
