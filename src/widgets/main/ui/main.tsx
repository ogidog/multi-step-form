import * as React from 'react';
import styled from "styled-components";
import {Outlet} from "react-router-dom";

const StyledContainer = styled.div`
  @media (max-width: 1024px) {
    padding: 0px 20px 0px 20px;
  }

  @media (min-width: 1025px) {
    grid-area: main
  }

  position: relative;
`

export const Main = () => {
    return (
        <StyledContainer>
            <Outlet/>
        </StyledContainer>
    );
};
