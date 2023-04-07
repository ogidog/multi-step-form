import * as React from 'react';
import styled from "styled-components";

import iconThankYou from "../assets/icon-thank-you.svg";

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, fit-content(5px));
  grid-row-gap: 25px;
  align-items: center;

  box-sizing: border-box;
  border-radius: 10px;
  background-color: var(--white);

  @media (max-width: 1023px) {
    position: relative;
    top: -25px;
    padding: 30px 15px 30px 15px;
  }

  @media(min-width: 1024px){
    width: var(--form-width-desktop);
  }
  
  justify-items: center;
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
  font-weight: 400;
  color: var(--cool-gray);
  font-size: var(--font-normal);
  white-space: break-spaces;
  text-align: center;
  line-height: 25px;
`

export const ThanksForm = () => {
    return (
        <StyledContainer>
            <Img/>
            <Title>Thank you!</Title>
            <Appreciation>
                Thanks for confirming your subscription! We hope you have fun using our platform.
                If you ever need support, please feel free to email us at support@loremgaming.com.
            </Appreciation>
        </StyledContainer>
    );
};
