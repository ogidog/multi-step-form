import * as React from 'react';
import styled from "styled-components";

import bgSidebarMobileImg from "./assets/bg-sidebar-mobile.svg";
import bgSidebarDesktopImg from "./assets/bg-sidebar-desktop.svg";
import {StepNumber} from "entities/index";

const StyledContainer = styled.div`
  @media (max-width: 1023px)  {
    display: flex;
    justify-content: center;
    align-items: start;
    
    background-image: url(${bgSidebarMobileImg});
    background-size: cover;

    box-sizing: border-box;
    padding-top: 35px;
  }

  @media (min-width: 1024px) {
    box-sizing: border-box;
    grid-area: side-bar;
    
    display: grid;
    grid-template-rows: repeat(4, fit-content(50px));
    grid-row-gap: 30px;

    background-image: url(${bgSidebarDesktopImg});
    border-radius: 15px;
    padding:  15% 0px 0px 15%;

    width: var(--sidebar-width-desktop);
    height: var(--sidebar-height-desktop);
    
    background-size: cover;
  }
  
  background-repeat: no-repeat;
  
`

export const Sidebar = () => {
    return (
        <StyledContainer>
            <StepNumber stepNumber={1} stepDescription={"your info"}/>
            <StepNumber stepNumber={2} stepDescription={"select plan"}/>
            <StepNumber stepNumber={3} stepDescription={"add-ons"}/>
            <StepNumber stepNumber={4} stepDescription={"summary"}/>
        </StyledContainer>
    );
};
