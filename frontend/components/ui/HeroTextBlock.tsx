"use client"

import { Box, Grid, Typography } from "@mui/material";
import { LibraryBooksOutlined, ImportantDevicesOutlined, SubjectOutlined, AutoStoriesOutlined, BugReportOutlined, WorkHistoryOutlined } from "@mui/icons-material";
import { CardContent } from "@/lib/constants";
import CardComponent from "./CardComponent";
import { useRouter } from "next/navigation";

export default function HeroTextBlock ()
{
    const router = useRouter()

    const iconMap = {
        LibraryBooksOutlined: <LibraryBooksOutlined />,
        ImportantDevicesOutlined: <ImportantDevicesOutlined />,
        SubjectOutlined: <SubjectOutlined />,
        BugReportOutlined: <BugReportOutlined />,
        WorkHistoryOutlined: <WorkHistoryOutlined />,
        AutoStoriesOutlined: <AutoStoriesOutlined />
    }

    const onClickCard = ( index: number ) =>
    {
        console.log( index )
        if ( index == 0 )
        {
            router.push( '/dsa' )
        }
    }

    const renderCardComponent = () =>
    {
        return (
            <Box sx={ { flexGrow: 1 } }>
                <Grid container padding={ 2 } spacing={ { xs: 2, md: 3 } } columns={ { xs: 4, sm: 8, lg: 12 } } >
                    { CardContent.map( ( card, index ) => (
                        <Grid key={ index } className="flex justify-center" size={ { xs: 2, sm: 4, md: 4 } }>
                            <CardComponent pointer={ card.isLocked } key={ index } bgColor={ card.color } title={ card.title } icon={ iconMap[ card.icon as keyof typeof iconMap ] } description={ card.description } onClick={ () => onClickCard( index ) } />
                        </Grid>
                    ) ) }
                </Grid>
            </Box>
        )
    }
    return <>
        <Typography padding={ 5 } justifySelf="center" fontWeight={ 700 } fontSize={ 40 } fontFamily="cursive" >
            Start Learning. Stay Ahead. Get Hired.
        </Typography>
        { renderCardComponent() }
    </>
}