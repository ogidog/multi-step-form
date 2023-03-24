import * as React from 'react';
import {FC} from "react";
import styled from "styled-components";
import {InputName} from "entities/index";

const StyledContainer = styled.div`
  @media (max-width: 1024px) {
    display: grid;
    grid-template-rows: 50px 60px  fit-content(50px) 1fr;

    box-sizing: border-box;
    border-radius: 10px;
    background-color: var(--white);

    position: relative;
    top: -25px;

    width: 100%;
    height: 100%;

    padding: 30px 15px 30px 15px;
  }
  @media (min-width: 1025px) {

  }
`;

const Title = styled.div`
  font-weight: 700;
  color: var(--marine-blue);
  font-size: var(--font-large);
`;

const Hint = styled.div`
  font-weight: 400;
  color: var(--cool-gray);
  font-size: var(--font-medium);
  height: 50px;
`;

export const Step1Content: FC = () => {
    return (
        <StyledContainer>
            <Title>Personnel info</Title>
            <Hint>Please provide your name, email address, and phone number.</Hint>
            <InputName/>
        </StyledContainer>
    );
};
