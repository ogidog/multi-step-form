import * as React from 'react';
import {FC} from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 15px;

  align-items: center;
`

const Number = styled.div`
  box-sizing: border-box;
  border: 2px solid var(--white);
  border-radius: 50%;

  width: 50px;
  height: 50px;
  line-height: 48px;

  text-align: center;
  font-weight: 500;
  color: var(--white);

  grid-row: 1 / 3;
  grid-column: 1 / 2;
`

const Name = styled.div`
  font-weight: 400;
  color: var(--light-gray);
  text-transform: uppercase;

  grid-row: 1 / 2;
  grid-column: 2 / 3;

  @media (max-width: 1024px) {
    display: none;
  }
`

const Description = styled.div`
  font-weight: 700;
  color: var(--white);
  text-transform: uppercase;

  grid-row: 2 / 3;
  grid-column: 2 / 3;

  @media (max-width: 1024px) {
    display: none;
  }
`

type Props = {
    stepNumber: number;
    stepDescription: string;
};

export const StepNumber: FC<Props> = (props) => {

    const {stepNumber, stepDescription} = props;

    return (
        <StyledContainer>
            <Number>{stepNumber}</Number>
            <Name>{`step ${stepNumber}`}</Name>
            <Description>{stepDescription}</Description>
        </StyledContainer>
    );
};
