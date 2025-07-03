import colors from "@/lib/colors";
import { bitManipulationAndMathTopic, coreFoundationTopics, dynamicProgrammingCoreTopics, hashingAndFrequencyTopics, recursionAndBacktrackingTopics, systemDesignTopics, treesAndGraphsTopics } from "@/lib/constants";
import { Box, Typography, } from "@mui/material";

export default function Page ()
{

    const renderCoreFoundation = ( title: string, topics: { key: string, ques: string }[], className: string, bgColor: string ) =>
    {
        return <Box padding={ 2 } height="fit-content" borderRadius={ 2 } bgcolor={ bgColor } className={ `${ className } transition-all duration-300 hover:scale-105 cursor-pointer` }>
            <Typography fontFamily="cursive" marginBottom={ 2 } fontWeight={ 600 }  >
                { title }
            </Typography>
            { topics.map( ( type ) => <Box key={ type.key }>
                <Typography color={ colors.WhiteSmoke } fontSize={ 15 } >
                    { type.ques }
                </Typography>
            </Box> ) }
        </Box>
    }

    return <Box padding={ 2 } >
        <Typography fontFamily="cursive" justifySelf="center" marginBottom={ 5 } fontWeight={ 600 } fontSize={ 30 } >
            Data Structure and Algorithm
        </Typography>
        <div className="grid grid-cols-5 grid-rows-12 gap-4">
            <div className="col-span-2 row-span-8">
                { renderCoreFoundation( "Pattern Mastery – Core Foundations", coreFoundationTopics, 'col-span-2 row-span-4', '#f26b21' ) }
            </div>
            <div className="col-span-2 row-span-4 col-start-1 row-start-9">
                { renderCoreFoundation( 'Hashing & Frequency', hashingAndFrequencyTopics, 'row-span-2 col-start-4 row-start-4', '#fcec52' ) }
            </div>
            <div className=" row-span-7 col-start-3 row-start-1">
                { renderCoreFoundation( 'Recursion & Backtracking', recursionAndBacktrackingTopics, 'row-span-5 col-start-3 row-start-1', '#f78e31' ) }
            </div>
            <div className="col-span-2 row-span-5 col-start-4 row-start-1">
                { renderCoreFoundation( 'Dynamic Programming', dynamicProgrammingCoreTopics, 'row-span-3 col-start-5 row-start-1', '#fbb040' ) }
            </div>
            <div className="col-span-2 row-span-5 col-start-4 row-start-6">
                { renderCoreFoundation( 'Trees & Graphs', treesAndGraphsTopics, 'row-span-3 col-start-4 row-start-1', '#cbdb47' ) }
            </div>
            <div className="row-span-5 col-start-3 row-start-8">
                { renderCoreFoundation( 'Bit Manipulation', bitManipulationAndMathTopic, 'row-span-2 col-start-5 row-start-4', '#99ca3c' ) }
            </div>
            <div className="col-span-2 row-span-2 col-start-4 row-start-11">
                { renderCoreFoundation( 'Practice & System Design Prep', systemDesignTopics, 'col-span-2 col-start-1 row-start-5', '#208b3a' ) }
            </div>
        </div>
    </Box>
}
// This course is built with a problem-solving-first approach, guiding you through every pattern and logic with clarity.

// Many questions include in-depth explanations and solution codes with variations.

// For practice, we’ve embedded direct links where available. If certain problems are unavailable on platforms like LeetCode due to copyright, we’ll provide detailed in-site content or TUF+ free trial links where needed.

// No third-party distractions. Our focus is on delivering a consistent, high-quality experience directly through our platform.

// ✨ Note: You chose our platform because of the clarity, structure, and value we offer — not just for external practice links. Stay focused, stay consistent. Everything you need is right here.