import { StyledButton } from './styles'
import {useContext, useState} from "react";

export default function Button({ title, step, getChange}) {
    const handleClick = () => {
        if(typeof getChange === "function") {
            getChange(step);
        }
    }

    return (
        <StyledButton onClick={() => handleClick()}>
            {title}
        </StyledButton>
    )
}


