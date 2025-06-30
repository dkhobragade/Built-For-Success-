import ColorButton from "@/components/ui/ColorButton";
import colors from "@/lib/colors";
import { Box, Grid, Typography } from "@mui/material";


export default function LandingHero ()
{
    return <Box bgcolor={ colors.WhiteSmoke } className='h-screen' alignContent="center" padding={ 2 } margin={ 5 } borderRadius={ 5 } >
        <Grid container spacing={ 2 }>
            <Grid size={ 6 } display="grid" justifyContent="end" >
                <Box>
                    <Box bgcolor="white" padding={ 1 } className="-rotate-3" borderRadius={ 2 } width={ 300 } >
                        <Typography fontWeight={ 600 } fontSize={ 50 } fontFamily="cursive" >
                            LEARN
                        </Typography>
                    </Box>
                    <Typography fontWeight={ 600 } fontSize={ 50 } >
                        CODE
                    </Typography>
                    <Box bgcolor={ colors.LiberatorGold } padding={ 1 } borderRadius={ 2 } width={ 300 } >
                        <Typography fontWeight={ 600 } fontSize={ 50 } fontFamily="cursive" >
                            GROW
                        </Typography>
                    </Box>
                    <Typography fontWeight={ 600 } fontSize={ 50 } >
                        SUCCEED.
                    </Typography>
                </Box>
                <Typography fontWeight={ 400 } fontSize={ 20 }  >
                    Skill up, stand out, and get hired with confidence.
                </Typography>
                <Box width={ 250 } paddingTop={ 2 } >
                    <ColorButton fullWidth size="large" variant="contained" text="Sign In" />
                </Box>
            </Grid>
            <Grid size={ 6 }  >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque temporibus alias in et inventore beatae veritatis officiis harum mollitia quasi, aliquam expedita assumenda quo aliquid animi odio impedit doloremque recusandae?
            </Grid>
        </Grid>
    </Box>
}