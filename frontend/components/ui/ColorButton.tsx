"use client";

import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { ButtonProps as ColorButtonProps } from "@/types/props";

const BlackStyledButton = styled( Button )( () => ( {
    color: "whitesmoke",
    backgroundColor: "black",
} ) );

export function BlackButton ( props: ColorButtonProps )
{
    return (
        <BlackStyledButton
            sx={ props.sx }
            fullWidth={ props.fullWidth }
            size={ props.size }
            variant={ props.variant }
        >
            { props.text }
        </BlackStyledButton>
    );
}

const WhiteStyledButton = styled( Button )( () => ( {
    color: "black",
    backgroundColor: "whitesmoke",
    border: "1px solid gray",
} ) );

export function WhiteButton ( props: ColorButtonProps )
{
    return (
        <WhiteStyledButton
            sx={ props.sx }
            fullWidth={ props.fullWidth }
            size={ props.size }
            variant={ props.variant }
        >
            { props.text }
        </WhiteStyledButton>
    );
}
