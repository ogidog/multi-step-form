import * as React from 'react';
import styled from "styled-components";

import iconThankYou from "../assets/icon-thank-you.svg";

const StyledContainer = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    box-sizing: border-box;
    border-radius: 10px;
    background-color: var(--white);

    position: relative;
    top: -25px;

    width: 100%;

    padding: 30px 15px 30px 15px;
  }
  @media (min-width: 1025px) {

  }
`;

const Img = styled.div`
  background-image: ${`url(${iconThankYou})`};
  background-repeat: no-repeat;
  padding-top: 80px;
  width: 80px;
  height: 80px;
  background-position: center;
`;

const Title = styled.div`
  box-sizing: border-box;
  padding: 0px 0px 10px 0px;
  font-weight: 700;
  color: var(--marine-blue);
  font-size: var(--font-large);
`;

const Appreciation = styled.div`
    
`

export const ThanksForm = () => {
    return (
        <StyledContainer>
            <Img/>
            <Title>Thank you!</Title>
            <Appreciation>Thanks for confirming your subscription!</Appreciation>
        </StyledContainer>
    );
};
