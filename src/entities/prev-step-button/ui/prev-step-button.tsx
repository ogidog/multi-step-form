import * as React from 'react';
import styled from "styled-components";
import {IControlSlice, prevStep} from "shared/slices/controlSlice";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Button = styled.button<Props>`
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
  visibility: ${props => props.currentStepNumber === 1 ? 'hidden' : 'visible'};
`

type Props = Pick<IControlSlice, 'currentStepNumber'>

export const PrevStepButton: FC<Props> = (props) => {
    const dispatch = useDispatch();
    //const navigate = useNavigate();

    const clickHandler = () => {
        dispatch(prevStep());
        //navigate(`/step${props.currentStepNumber - 1}`)
    }

    return (
        <Button currentStepNumber={props.currentStepNumber} onClick={clickHandler}>Go Back</Button>
    );
};
