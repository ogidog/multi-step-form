import * as React from 'react';
import {FC} from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 20% 1fr 10%;
    grid-template-columns: 100%;
  }
  
  @media (min-width: 1025px) {
    
    display: grid;
    grid-gap: 10px;
    grid-template-areas: 
            "side-bar main"
            "side-bar footer";
    grid-template-columns: 300px 1fr;
    grid-template-rows: 90% 1fr;

    box-sizing: border-box;

    width: 100%;
    height: 100%;
    
    max-width: 1440px;
    max-height: 1080px;

    border-radius: 15px;
    background-color: var(--white);
    padding: 20px;
  }
`;

type Props = {
    children: any
}

export const Container: FC<Props> = ({children}) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
};
