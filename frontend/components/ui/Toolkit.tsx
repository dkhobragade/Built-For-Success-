import colors from "@/lib/colors";
import { ArrowOutward } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { WhiteButton } from "./ColorButton";
import Image from "next/image";

export default function Toolkit ()
{
    return <Box bgcolor={ colors.Black } height="h-screen" padding={ 5 } borderRadius={ 5 } margin={ 5 } >
        <Grid>
            <Grid size={ 6 }>
                <Box padding={ 5 } justifyItems="center" >
                    <Box className="oliver-font">
                        <Typography fontSize={ 40 } color={ colors.SelectiveYellow } >
                            Toolkit
                        </Typography>
                    </Box>
                    <Typography letterSpacing={ 2 } color={ colors.White } fontSize={ 30 } fontWeight={ 800 } >
                        Improve your resume and crack interviews.
                    </Typography>
                    <br />
                    <Box justifyContent="center" >
                        <WhiteButton variant="outlined" text="Open Toolkit" />
                    </Box>
                </Box>
            </Grid>
            <Grid size={ 6 }>
                <Grid container spacing={ 3 }>
                    <Grid size={ 4 }>
                        <Box padding={ 2 } height={ 350 } borderRadius={ 2 } bgcolor={ colors.BlackEel }>
                            <Grid container rowSpacing={ 5 }>
                                <Box display="flex" width="100%" color={ colors.White } >
                                    <Grid size={ 6 }>
                                        Top Interview Questions
                                    </Grid>
                                    <Grid size={ 6 } display="flex" justifyContent="end" >
                                        <ArrowOutward className="cursor-pointer" />
                                    </Grid>
                                </Box>
                                <Box>
                                    <Image className="p-3" src='/que.png' alt="Question" width={ 500 } height={ 200 } />
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid size={ 4 }>
                        <Box padding={ 2 } height={ 350 } borderRadius={ 2 } bgcolor={ colors.BlackEel }>
                            <Grid container rowSpacing={ 5 } >
                                <Box display="flex" width="100%" color={ colors.White } >
                                    <Grid size={ 6 }>
                                        Common Resume Mistakes to Avoid
                                    </Grid>
                                    <Grid size={ 6 } display="flex" justifyContent="end" >
                                        <ArrowOutward className="cursor-pointer" />
                                    </Grid>
                                </Box>
                                <Box marginTop={ 4.1 }>
                                    <Image src='/res.png' alt="Question" width={ 500 } height={ 200 } />
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid size={ 4 }>
                        <Box padding={ 2 } height={ 350 } borderRadius={ 2 } bgcolor={ colors.BlackEel }>
                            <Grid container rowSpacing={ 5 } >
                                <Box display="flex" width="100%" color={ colors.White } >
                                    <Grid size={ 6 }>
                                        Crafting Job-specific Resume
                                    </Grid>
                                    <Grid size={ 6 } display="flex" justifyContent="end" >
                                        <ArrowOutward className="cursor-pointer" />
                                    </Grid>
                                </Box>
                                <Box marginTop={ 3 }>
                                    <Image src='/pro.png' alt="Question" width={ 500 } height={ 200 } />
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
}