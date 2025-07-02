"use client"

import { Box, Typography } from "@mui/material";

export default function SkillScroller ( { colors, scrollItems }: { colors: any, scrollItems: any } )
{
    return <Box bgcolor={ colors.LiberatorGold } alignContent="center" width="100%" whiteSpace="nowrap" overflow="hidden" position="relative" height={ 50 }>
        <Box
            sx={ {
                display: 'inline-block',
                animation: 'scroll 25s linear infinite',
            } }
        >
            { [ ...scrollItems, ...scrollItems ].map( ( skill, i ) => (
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