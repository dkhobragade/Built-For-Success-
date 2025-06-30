"use client"

import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { ButtonProps as ColorButtonProps } from '@/types/props';


export default function ColorButton ( props: ColorButtonProps )
{

    const ColorButton = styled( Button )( () => ( {
        color: "whitesmoke",
        backgroundColor: "Black"
    } ) );

    return <ColorButton fullWidth={ props.fullWidth } size={ props.size } variant={ props.variant }  >
        { props.text }
    </ColorButton>
}