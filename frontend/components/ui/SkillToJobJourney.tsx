"use client"

import colors from "@/lib/colors";
import { AutoStoriesOutlined, EmojiEmotionsOutlined, SubjectOutlined } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ColorButton from "./ColorButton";

export default function SkillToJobJourney ()
{


    return <Box className='h-full' padding={ 2 } margin={ 5 } borderRadius={ 5 } >
        <Box bgcolor={ colors.LiberatorGold } marginBottom={ 5 } padding={ 2 } justifySelf="center" borderRadius={ 2 } width="fit-content" >
            <Typography fontWeight={ 600 } fontSize={ 25 } fontFamily="cursive" >
                From Skills to Offers – We’ve Got You Covered
            </Typography>
        </Box>
        <Box padding={ 2 } >
            <Grid container spacing={ 1 }>
                <Grid size={ 4 }>
                    <Box >
                        <Box width="100%" height={ 250 } >
                            <Image src='/image1.jpg' className="transition-all duration-300 hover:scale-105 cursor-pointer" width={ 400 } height={ 300 } alt={ "" } />
                        </Box>
                        <Box padding={ 5 } display="flex" flexDirection="column" gap={ 5 } height="fit-content" bgcolor={ colors.WhiteSmoke } >
                            <AutoStoriesOutlined fontSize="large" />
                            <Typography textAlign="justify" fontFamily="sans-serif" >
                                Build your problem-solving skills and master the fundamentals of efficient code.
                                Perfect for coding interviews and real-world development.
                            </Typography>
                            <ColorButton variant="outlined" text="Start Practicing" />
                        </Box>
                    </Box>
                </Grid>
                <Grid size={ 4 }>
                    <Box >
                        <Box padding={ 5 } display="flex" flexDirection="column" gap={ 3.5 } height="fit-content" bgcolor={ colors.WhiteSmoke } >
                            <EmojiEmotionsOutlined fontSize="large" />
                            <Typography textAlign="justify" fontFamily="sans-serif" >
                                Learn to design scalable systems used by top tech companies.
                                Real-world examples, architecture diagrams, and case studies.
                            </Typography>
                            <ColorButton variant="outlined" text="Learn System Design" />
                        </Box>
                        <Box width="100%" height={ 250 } >
                            <Image src='/image5.jpg' className="transition-all duration-300 hover:scale-105 cursor-pointer" width={ 400 } height={ 300 } alt={ "" } />
                        </Box>
                    </Box>
                </Grid>
                <Grid size={ 4 }>
                    <Box >
                        <Box width="100%" height={ 250 } >
                            <Image src='/image4.jpg' className="transition-all duration-300 hover:scale-105 cursor-pointer" width={ 400 } height={ 300 } alt={ "" } />
                        </Box>
                        <Box padding={ 5 } display="flex" flexDirection="column" gap={ 5 } height="fit-content" bgcolor={ colors.WhiteSmoke } >
                            <SubjectOutlined fontSize="large" />
                            <Typography textAlign="justify" fontFamily="sans-serif" >
                                Solidify your understanding of core CS subjects: OS, DBMS, CN, and more.
                                Designed for both academic success and real-world understanding.
                            </Typography>
                            <ColorButton variant="outlined" text="Start Learning Now" />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
}