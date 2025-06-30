"use client"

import colors from "@/lib/colors";
import { CardContent } from "@/lib/constants";
import { AutoStoriesOutlined, BugReportOutlined, DoubleArrowOutlined, ImportantDevicesOutlined, LibraryBooksOutlined, SubjectOutlined, WorkHistoryOutlined } from "@mui/icons-material";
import { Box, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

export default function Sidebar ()
{

    const [ isSidebarOpen, setIsSidebarOpen ] = useState( true )
    const [ selectedType, setSelectedType ] = useState( '1' )

    const iconMap = {
        LibraryBooksOutlined: <LibraryBooksOutlined />,
        ImportantDevicesOutlined: <ImportantDevicesOutlined />,
        SubjectOutlined: <SubjectOutlined />,
        BugReportOutlined: <BugReportOutlined />,
        WorkHistoryOutlined: <WorkHistoryOutlined />,
        AutoStoriesOutlined: <AutoStoriesOutlined />
    }


    const renderSideBar = () =>
    {
        return <Box flexDirection="column" gap={ 2 } display="flex">
            { CardContent.map( ( card, index ) => <Box fontFamily="cursive" onClick={ () => setSelectedType( card.key ) } color={ selectedType === card.key ? colors.WhiteSmoke : colors.BlackForestBlue } bgcolor={ selectedType === card.key ? colors.BlackForestBlue : colors.WhiteSmoke } className='cursor-pointer' padding={ 1 } borderRadius={ 2 } key={ index } display="flex" >
                <Box display="flex" alignItems="center" gap={ 1.5 }>
                    <Box>
                        { !isSidebarOpen ?
                            <Tooltip title={ card.title } >
                                { iconMap[ card.icon as keyof typeof iconMap ] }
                            </Tooltip> :
                            <>
                                { iconMap[ card.icon as keyof typeof iconMap ] }
                            </>
                        }
                    </Box>
                    { isSidebarOpen &&
                        <Typography>
                            { card.title }
                        </Typography>
                    }
                </Box>
            </Box> ) }
        </Box>
    }

    const handleNavBar = () =>
    {
        setIsSidebarOpen( !isSidebarOpen )
    }

    return <Box bgcolor={ colors.LiberatorGold } className={ `h-screen p-2 transition-all duration-800 ease-in-out flex flex-col relative ${ isSidebarOpen ? "w-[200px]" : "w-[60px]"
        }` } >
        LOGO
        <Box position="relative" >
            <Box onClick={ handleNavBar }
                position="absolute"
                right={ -25 }
                top={ 200 }
                bgcolor="red"
                borderRadius={ 2 }
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={ 30 }
                height={ 30 }
                zIndex={ 10 }
                className="cursor-pointer" >
                <DoubleArrowOutlined className={ `${ isSidebarOpen && 'rotate-180' }` } />
            </Box>
        </Box>
        { renderSideBar() }
    </Box>
}