"use client"

import colors from "@/lib/colors";
import { Box, Grid, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function DsaMainPage ()
{
    const container = useRef<HTMLDivElement | null>( null )

    const container1 = useRef<HTMLDivElement | null>( null );
    const container2 = useRef<HTMLDivElement | null>( null );
    const container3 = useRef<HTMLDivElement | null>( null );


    const { scrollYProgress: scrollY1 } = useScroll( {
        target: container1,
        offset: [ "end end", "end end" ]
    } );

    const { scrollYProgress: scrollY2 } = useScroll( {
        target: container2,
        offset: [ "start end", "end end" ]
    } );

    const { scrollYProgress: scrollY3 } = useScroll( {
        target: container3,
        offset: [ "center end", "end end" ]
    } );


    const { scrollYProgress } = useScroll( {
        target: container,
        offset: [ "center end", "end end" ]
    } )

    // return <Box ref={ container } className="relative h-[200vh]">
    //     <Section1 ref={ container } scrollYProgress={ scrollYProgress } />
    //     <Section2 scrollYProgress={ scrollYProgress } />
    //     <Section3 scrollYProgress={ scrollYProgress } />
    // </Box>
    return <Box className="relative">
        <Section1 ref={ container1 } scrollYProgress={ scrollY1 } />
        <Section2 ref={ container2 } scrollYProgress={ scrollY2 } />
        <Section3 ref={ container3 } scrollYProgress={ scrollY3 } />
    </Box>
}


const Section1 = ( { scrollYProgress }: any ) =>
{
    const scale = useTransform( scrollYProgress, [ 0, 1 ], [ 1, 0.8 ] )

    return <motion.div style={ { scale, } } className="sticky top-0 h-screen"  >
        <Box bgcolor={ colors.WhiteSmoke } margin={ 4 } padding={ 5 } borderRadius={ 4 } >
            <Box justifySelf="end" top={ -60 } position="relative" bgcolor={ colors.LiberatorGold } padding={ 2 } width="fit-content" borderRadius={ 2 }>
                <Typography fontWeight={ 600 } fontFamily="cursive"  >
                    DSA isn't hard — it's just a puzzle waiting to be solved.
                </Typography>
            </Box>
            <Grid container>
                <Grid size={ 8 }>
                    <Box display="flex" flexDirection="column" gap={ 2 } >
                        <Typography fontFamily="cursive" component="div" display="flex" gap={ 1 } fontSize={ 20 } fontWeight={ 600 }>
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
                            <Typography fontFamily="cursive" component="div" display="flex" gap={ 1 } fontSize={ 20 } fontWeight={ 600 }>
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

    return <motion.div style={ { scale, } } className="sticky top-0 h-screen" >
        <Box bgcolor={ colors.LiberatorGold } margin={ 4 } padding={ 5 } borderRadius={ 4 } >
            <Box justifySelf="start" top={ -60 } position="relative" bgcolor={ colors.WhiteSmoke } padding={ 2 } width="fit-content" borderRadius={ 2 }>
                <Typography fontWeight={ 600 } fontFamily="cursive"  >
                    One line of code can change everything.
                </Typography>
            </Box>
            <Grid container>
                <Grid size={ 8 }>
                    <Box display="flex" flexDirection="column" gap={ 2 } >
                        <Typography fontFamily="cursive" component="div" display="flex" gap={ 1 } fontSize={ 20 } fontWeight={ 600 }>
                            Recursion & Backtracking Lab
                        </Typography>
                        <Typography>
                            From basic recursion to solving hard-level problems with smart backtracking.
                        </Typography>
                        <Typography color="blue" className="underline cursor-pointer" >
                            Get Started
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={ 4 }>
                    <Box>
                        <Image src='/DP.png' width={ 350 } height={ 350 } alt="DP" />
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid size={ 4 }>
                    <Box>
                        <Image src='/RB.png' alt="RB" width={ 350 } height={ 200 } />
                    </Box>
                </Grid>
                <Grid size={ 8 }>
                    <Box display="flex" flexDirection="column" gap={ 4 } >
                        <Box display="flex" flexDirection="column" gap={ 2 }>
                            <Typography fontFamily="cursive" component="div" display="flex" gap={ 1 } fontSize={ 20 } fontWeight={ 600 }>
                                Dynamic Programming
                            </Typography>
                            <Typography>
                                Understand overlapping subproblems and optimal substructure through 1D/2D DP, memoization, tabulation.
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

const Section3 = ( { scrollYProgress }: any ) =>
{
    const scale = useTransform( scrollYProgress, [ 0, 1 ], [ 0.8, 1 ] );

    return <motion.div style={ { scale, } } className="relative" >
        <Box bgcolor={ colors.WhiteSmoke } margin={ 4 } padding={ 5 } borderRadius={ 4 } >
            <Box justifySelf="end" top={ -60 } position="relative" bgcolor={ colors.LiberatorGold } padding={ 2 } width="fit-content" borderRadius={ 2 }>
                <Typography fontWeight={ 600 } fontFamily="cursive"  >
                    Confidence in your approach is just as important as correctness in your code.
                </Typography>
            </Box>
            <Grid container>
                <Grid size={ 8 }>
                    <Box display="flex" flexDirection="column" gap={ 2 } >
                        <Typography fontFamily="cursive" component="div" display="flex" gap={ 1 } fontSize={ 20 } fontWeight={ 600 }>
                            Top Interview Questions
                        </Typography>
                        <Typography>
                            Curated handpicked problems asked at Google, Amazon, Meta, etc.
                        </Typography>
                        <Typography color="blue" className="underline cursor-pointer" >
                            Get Started
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={ 4 }>
                    <Box>
                        <Image src='/SD.png' width={ 350 } height={ 350 } alt="Tree" />
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid size={ 4 }>
                    <Box>
                        <Image src='/G.png' alt="Merge Sort" width={ 350 } height={ 0 } />
                    </Box>
                </Grid>
                <Grid size={ 8 }>
                    <Box display="flex" flexDirection="column" gap={ 4 } >
                        <Box display="flex" flexDirection="column" gap={ 2 }>
                            <Typography fontFamily="cursive" component="div" display="flex" gap={ 1 } fontSize={ 20 } fontWeight={ 600 }>
                                System Design Patterns
                            </Typography>
                            <Typography>
                                Visual guides and simplified breakdown of real-world scalable systems.
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