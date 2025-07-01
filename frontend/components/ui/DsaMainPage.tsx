"use client"

import colors from "@/lib/colors";
import { Box, Grid, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function DsaMainPage ()
{
    const container = useRef<HTMLDivElement | null>( null )

    const { scrollYProgress } = useScroll( {
        target: container,
        offset: [ "center end", "end end" ]
    } )

    return <Box ref={ container } className="relative h-[200vh]">
        <Section1 ref={ container } scrollYProgress={ scrollYProgress } />
        <Section2 scrollYProgress={ scrollYProgress } />
    </Box>
}


const Section1 = ( { scrollYProgress }: any ) =>
{
    const scale = useTransform( scrollYProgress, [ 0, 1 ], [ 1, 0.8 ] )
    const rotate = useTransform( scrollYProgress, [ 0, 1 ], [ 0, 5 ] )

    return <motion.div style={ { scale, rotate } } className="sticky top-0 h-screen"  >
        <Box bgcolor={ colors.WhiteSmoke } margin={ 4 } padding={ 5 } borderRadius={ 4 } >
            <Box justifySelf="end" top={ -60 } position="relative" bgcolor={ colors.LiberatorGold } padding={ 2 } width="fit-content" borderRadius={ 2 }>
                <Typography fontWeight={ 600 } fontFamily="cursive"  >
                    DSA isn't hard — it's just a puzzle waiting to be solved.
                </Typography>
            </Box>
            <Grid container>
                <Grid size={ 8 }>
                    <Box display="flex" flexDirection="column" gap={ 2 } >
                        <Typography component="div" display="flex" gap={ 1 } fontSize={ 20 } fontWeight={ 600 }>
                            DSA Pattern Mastery
                        </Typography>
                        <Typography>
                            Master essential patterns like sliding window, two pointers, and divide & conquer to solve problems efficiently.
                        </Typography>
                        <Typography color="blue" className="underline cursor-pointer" >
                            Get Started
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={ 4 }>
                    <Box>
                        <Image src='/tree.png' width={ 350 } height={ 350 } alt="Tree" />
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid size={ 4 }>
                    <Box>
                        <Image src='/mergesort.png' alt="Merge Sort" width={ 350 } height={ 0 } />
                    </Box>
                </Grid>
                <Grid size={ 8 }>
                    <Box display="flex" flexDirection="column" gap={ 4 } >
                        <Box display="flex" flexDirection="column" gap={ 2 }>
                            <Typography component="div" display="flex" gap={ 1 } fontSize={ 20 } fontWeight={ 600 }>
                                Master Trees & Graphs
                            </Typography>
                            <Typography>
                                Conquer tricky topics like trees and graphs with simplified explanations, visual guides, and hands-on practice.
                            </Typography>
                            <Typography color="blue" className="underline cursor-pointer" >
                                Get Started
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </motion.div>
}

const Section2 = ( { scrollYProgress }: any ) =>
{
    const scale = useTransform( scrollYProgress, [ 0, 1 ], [ 0.8, 1 ] );
    const rotate = useTransform( scrollYProgress, [ 0, 1 ], [ 5, 0 ] )

    return <motion.div style={ { scale, rotate } } className="relative" >
        <Box bgcolor={ colors.LiberatorGold } margin={ 4 } padding={ 5 } borderRadius={ 4 } >
            <Box justifySelf="start" top={ -60 } position="relative" bgcolor={ colors.WhiteSmoke } padding={ 2 } width="fit-content" borderRadius={ 2 }>
                <Typography fontWeight={ 600 } fontFamily="cursive"  >
                    One line of code can change everything.
                </Typography>
            </Box>
            <Grid container>
                <Grid size={ 8 }>
                    <Typography display="flex" gap={ 1 } fontSize={ 20 } fontWeight={ 600 }>
                        Practicing 200+ Problems and Still Struggling in Interviews?
                        {/* <Box bgcolor={ colors.LiberatorGold } padding={ 1 } className='rotate-5' borderRadius={ 2 } width={ 200 } height="fit-content" >
                            You're Not Alone.
                        </Box> */}
                    </Typography>
                    <Typography>
                        You've spent weeks on LeetCode, solved countless problems...
                        But when it's time to explain your thought process in an interview – you freeze.
                    </Typography>
                </Grid>
                <Grid size={ 4 }>
                    1
                </Grid>
            </Grid>
        </Box>
    </motion.div>
}