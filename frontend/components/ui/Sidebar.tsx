"use client"

import colors from "@/lib/colors";
import { CardContent } from "@/lib/constants";
import { AutoStoriesOutlined, BugReportOutlined, DoubleArrowOutlined, ImportantDevicesOutlined, LibraryBooksOutlined, SubjectOutlined, WorkHistoryOutlined } from "@mui/icons-material";
import { Box, Tooltip, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar ()
{
    const router = useRouter()
    const [ isSidebarOpen, setIsSidebarOpen ] = useState( false )
    const [ selectedType, setSelectedType ] = useState( '1' )

    const iconMap = {
        LibraryBooksOutlined: <LibraryBooksOutlined />,
        ImportantDevicesOutlined: <ImportantDevicesOutlined />,
        SubjectOutlined: <SubjectOutlined />,
        BugReportOutlined: <BugReportOutlined />,
        WorkHistoryOutlined: <WorkHistoryOutlined />,
        AutoStoriesOutlined: <AutoStoriesOutlined />
    }

    const onChangeType = ( key: string ) =>
    {
        setSelectedType( key )
        if ( key == "1" )
        {
            router.push( '/dsa' )
        }
        else if ( key == "2" )
        {
            router.push( '/systemdesign' )
        }
        console.log( key )
    }


    const renderSideBar = () =>
    {
        return <Box flexDirection="column" gap={ 2 } display="flex">
            { CardContent.map( ( card, index ) => <Box fontFamily="cursive" onClick={ () => onChangeType( card.key ) } color={ selectedType === card.key ? colors.WhiteSmoke : colors.BlackForestBlue } bgcolor={ selectedType === card.key ? colors.BlackForestBlue : colors.WhiteSmoke } className='cursor-pointer' padding={ 1 } borderRadius={ 2 } key={ index } display="flex" >
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