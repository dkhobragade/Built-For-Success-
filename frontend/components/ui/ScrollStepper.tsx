"use client";

import { useEffect, useRef, useState } from "react";
import
{
    Stepper,
    Step,
    StepLabel,
    Box,
    Typography,
    useTheme,
} from "@mui/material";

const steps = [ "Step One", "Step Two", "Step Three" ];

export default function ScrollStepper ()
{
    const [ activeStep, setActiveStep ] = useState( 0 );
    const sectionRefs = useRef<HTMLDivElement[]>( [] );
    const theme = useTheme();

    // Observe scroll position and update active step
    useEffect( () =>
    {
        const observer = new IntersectionObserver(
            ( entries ) =>
            {
                entries.forEach( ( entry ) =>
                {
                    const index = sectionRefs.current.findIndex(
                        ( ref ) => ref === entry.target
                    );
                    if ( entry.isIntersecting )
                    {
                        setActiveStep( index );
                    }
                } );
            },
            { threshold: 0.6 }
        );

        sectionRefs.current.forEach( ( ref ) =>
        {
            if ( ref ) observer.observe( ref );
        } );

        return () => observer.disconnect();
    }, [] );

    // Scroll to the selected section on step click
    const handleStepClick = ( index: number ) =>
    {
        sectionRefs.current[ index ]?.scrollIntoView( { behavior: "smooth" } );
    };

    return (
        <Box>
            <Box
                sx={ {
                    position: "sticky",
                    top: 0,
                    zIndex: 100,
                    pt: 2,
                } }
            >
                <Stepper activeStep={ activeStep } alternativeLabel  >
                    { steps.map( ( label, index ) => (
                        <Step key={ label } onClick={ () => handleStepClick( index ) }>
                            <StepLabel>{ label }</StepLabel>
                        </Step>
                    ) ) }
                </Stepper>
            </Box>

            {/* Sections */ }
            <Box>
                { steps.map( ( step, index ) => (
                    <div
                        key={ index }
                        ref={ ( el ) =>
                        {
                            if ( el ) sectionRefs.current[ index ] = el;
                        } }
                        style={ {
                            height: "100vh",
                            padding: "2rem",
                            borderBottom: "1px solid #ccc",
                            scrollMarginTop: "100px",
                        } }
                    >
                        <Typography variant="h3" gutterBottom>
                            { step }
                        </Typography>
                        <Typography variant="body1">
                            This is the content for { step }. Scroll or click above to navigate
                            between sections.
                        </Typography>
                    </div>
                ) ) }
            </Box>
        </Box>
    );
}
