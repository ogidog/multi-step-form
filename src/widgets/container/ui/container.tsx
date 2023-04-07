import * as React from 'react';
import {FC} from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  @media (max-width: 1023px) {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: var(--sidebar-height-mobile) calc(100% - var(--footer-height-mobile) - var(--sidebar-height-mobile)) var(--footer-height-mobile);
  }

  @media (min-width: 1024px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: grid;
    grid-gap: 10px;
    grid-template-areas: 
            "side-bar main"
            "side-bar footer";
    grid-template-columns: fit-content(5px) 1fr;
    grid-template-rows: fit-content(5px) 1fr;

    width: 960px;
    max-height: 646px;

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
