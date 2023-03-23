import * as React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  @media (min-width: 1025px) {
    grid-area: main
  }
`

export const Main = () => {
    return (
        <StyledContainer>Content</StyledContainer>
    );
};
