import * as React from 'react';
import styled from "styled-components";

const SwitcherContainer = styled.div`
  position: relative;
  width: 50px;
  height: 25px;

  border-top-left-radius: 25% 50%;
  border-bottom-left-radius: 25% 50%;
  border-bottom-right-radius: 25% 50%;
  border-top-right-radius: 25% 50%;

  background-color: var(--marine-blue);
`;

const Switcher = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;

  border-radius: 50px;

  background-color: var(--white);

  top: 3px;
  left: 5px;
  transition: left 0.5s;

`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  &:has(+input:checked) div[id="switcher"] {
    left: calc(100% - 22px);
  }
`;

type Props = {
    onChange?: (checked: boolean) => void;
    checked?: boolean;
};
export const Toggle = (props: Props) => {
    const {onChange, checked = false} = props;

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event.target.checked)
    }

    return (
        <>
            <Label htmlFor={"billing"}>
                <SwitcherContainer>
                    <Switcher id={"switcher"}/>
                </SwitcherContainer>
            </Label>
            <Input type={"checkbox"} id={"billing"} name={"billing"} onChange={changeHandler} checked={checked}/>
        </>
    );
};
