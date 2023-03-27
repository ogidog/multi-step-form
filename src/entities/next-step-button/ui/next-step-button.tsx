import * as React from 'react';
import styled from "styled-components";

const Button = styled.button`
  box-sizing: border-box;
  
  width: fit-content;
  height: 40px;
  padding-left: 15px;
  padding-right: 15px;

  border-width: 0px;
  border-radius: 3px;
  
  background-color: var(--marine-blue);
  
  color: var(--white);
  font-size: var(--font-small);
  font-weight: 400;
`

export const NextStepButton = () => {
    return (
        <Button type={"submit"} form={`step`}>Next Step</Button>
    );
};
