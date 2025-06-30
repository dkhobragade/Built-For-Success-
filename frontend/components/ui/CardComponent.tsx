import { CardComponentProps } from "@/types/props";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function CardComponent ( props: CardComponentProps )
{

    return (
        <Card variant="elevation" sx={ { maxWidth: 300 } } className={ `p-2 ${ !props.pointer && 'cursor-pointer' }` } >
            <Box padding={ 5 } margin={ 2 } borderRadius={ 2 } bgcolor={ props.bgColor } >
                <Box justifySelf="center" className='p-3 bg-[#f9fafb47] bg-opacity-30 rounded-xl group-hover:scale-125 transition-all duration-300 group-hover:p-4' >
                    { props.icon }
                </Box>
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h5" fontWeight="600" >
                    { props.title }
                </Typography>
                <Typography textAlign="justify" variant="body2" sx={ { color: 'text.secondary' } }>
                    { props.description }
                </Typography>
            </CardContent>
        </Card>
    );
}