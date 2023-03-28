import * as React from 'react';
import styled from "styled-components";

const Button = styled.button`
  box-sizing: border-box;

  width: fit-content;
  height: 40px;
  padding-left: 15px;
  padding-right: 15px;

  border-width: 0px;

  background-color: transparent;

  color: var(--cool-gray);
  font-size: var(--font-small);
  font-weight: 700;
`

export const PrevStepButton = () => {
    return (
        <Button>Go Back</Button>
    );
};
