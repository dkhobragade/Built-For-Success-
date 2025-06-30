"use client"

import { useState } from "react";
import colors from "@/lib/colors";
import { TabContext, TabPanel } from "@mui/lab";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";

export default function SkillToJobJourney ()
{

    const [ value, setValue ] = useState( '1' )

    const handleChange = ( event: React.SyntheticEvent, newValue: string ) =>
    {
        setValue( newValue );
    };

    return <Box bgcolor={ colors.LiberatorGold } className='h-screen' padding={ 2 } margin={ 5 } borderRadius={ 5 } >
        <Box bgcolor="white" marginBottom={ 5 } padding={ 2 } justifySelf="center" borderRadius={ 2 } width="fit-content" >
            <Typography fontWeight={ 600 } fontSize={ 25 } fontFamily="cursive" >
                From Skills to Offers – We’ve Got You Covered
            </Typography>
        </Box>
        <TabContext value={ value }>
            <Tabs value={ value } textColor="secondary" indicatorColor="secondary" variant="fullWidth" onChange={ handleChange }  >
                <Tab label="UpSkill" value="1" />
                <Tab label="Practice" value="2" />
                <Tab label="Apply" value="3" />
            </Tabs>
            <TabPanel value="1">
                <Grid container spacing={ 2 } >
                    <Grid size={ 6 }>
                        <Typography fontSize={ 20 } fontWeight={ 600 } fontFamily="cursive" >
                            Master the Core Skills That Matter
                        </Typography>
                    </Grid>
                    <Grid size={ 6 }>
                        2
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value="2">
                <Grid container spacing={ 2 }>
                    <Grid size={ 6 }>
                        <Typography fontSize={ 20 } fontWeight={ 600 } fontFamily="cursive" >
                            Sharpen Your Skills with Real Practice
                        </Typography>
                    </Grid>
                    <Grid size={ 6 }>
                        2
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value="3">
                <Grid container spacing={ 2 }>
                    <Grid size={ 6 }>
                        <Typography fontSize={ 20 } fontWeight={ 600 } fontFamily="cursive" >
                            Take the Leap – Land Your Dream Role
                        </Typography>
                    </Grid>
                    <Grid size={ 6 }>
                        2
                    </Grid>
                </Grid>
            </TabPanel>
        </TabContext>
    </Box>
}