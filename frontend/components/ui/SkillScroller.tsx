"use client"

import colors from "@/lib/colors";
import { ScrollItems } from "@/lib/constants";
import { Box, Typography } from "@mui/material";

export default function SkillScroller ()
{
    return <Box bgcolor={ colors.LiberatorGold } alignContent="center" width="100%" whiteSpace="nowrap" overflow="hidden" position="relative" height={ 50 }>
        <Box
            sx={ {
                display: 'inline-block',
                animation: 'scroll 25s linear infinite',
            } }
        >
            { [ ...ScrollItems, ...ScrollItems ].map( ( skill, i ) => (
                <Typography key={ i } component="span" sx={ { mx: 4, fontWeight: 600 } }>
                    { skill }
                </Typography>
            ) ) }
        </Box>

        <style jsx global>{ `
    @keyframes scroll {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
  `}</style>
    </Box>
}