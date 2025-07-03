import { Box, Typography } from "@mui/material";
import { WhiteButton } from "./ColorButton";
import colors from "@/lib/colors";

export default function CallToAction ()
{
    return <Box justifyItems="center" bgcolor={ colors.Black } color={ colors.White } padding={ 5 }  >
        <Typography fontSize={ 40 } fontWeight="bold" gutterBottom>
            Ready to Grow Your Skills?
        </Typography>
        <Typography variant="body1" color={ colors.White }>
            Choose us to sharpen your skills, unlock new opportunities, and become the confident professional you’re meant to be.
        </Typography>
        <Box justifyContent="center" paddingTop={ 5 }>
            <WhiteButton variant="outlined" text="Join Us Now" />
        </Box>
    </Box>
}