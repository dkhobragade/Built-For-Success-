import colors from "@/lib/colors";
import { Box, Grid, Typography } from "@mui/material";
import { BlackButton } from "./ColorButton";
import Image from "next/image";

export default function LandingHero ()
{
    return <Box bgcolor={ colors.WhiteSmoke } className='h-screen' alignContent="center" padding={ 2 } margin={ 5 } borderRadius={ 5 } >
        <Grid container spacing={ 2 }>
            <Grid size={ 6 } display="grid" justifyContent="end" >
                <Box alignSelf="center" >
                    <Box bgcolor={ colors.White } height={ 80 } padding={ 1 } className="-rotate-3" borderRadius={ 2 } width={ 300 } >
                        <Typography fontWeight={ 600 } fontSize={ 50 } fontFamily="cursive" >
                            LEARN
                        </Typography>
                    </Box>
                    <Typography fontWeight={ 600 } fontSize={ 50 } >
                        CODE
                    </Typography>
                    <Box bgcolor={ colors.LiberatorGold } height={ 80 } padding={ 1 } borderRadius={ 2 } width={ 300 } >
                        <Typography fontWeight={ 600 } fontSize={ 50 }  >
                            GROW
                        </Typography>
                    </Box>
                    <Typography fontWeight={ 600 } fontSize={ 50 } >
                        SUCCEED.
                    </Typography>
                    <Typography fontWeight={ 400 } fontSize={ 20 }  >
                        Skill up, stand out, and get hired with confidence.
                    </Typography>
                    <Box width={ 250 } >
                        <BlackButton fullWidth size="large" variant="contained" text="Sign In" />
                    </Box>
                </Box>
            </Grid>
            <Grid size={ 6 }  >
                <Image src='/Boy.png' alt="Boy" width={ 500 } height={ 500 } />
            </Grid>
        </Grid>
    </Box>
}