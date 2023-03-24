import * as React from 'react';
import {FC} from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  @media (max-width: 1024px) {
    background-color: var(--white);
  }

  @media (min-width: 1025px) {
    grid-area: footer;
  }

`
export const Footer: FC = () => {
    return (
        <StyledContainer>
            <input type={"submit"} value={"Next"}/>
        </StyledContainer>
    );
};
