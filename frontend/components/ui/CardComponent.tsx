import { CardComponentProps } from "@/types/props";
import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";

export default function CardComponent ( props: CardComponentProps )
{

    return (
        <Card variant="elevation" sx={ { maxWidth: 300, maxHeight: 350 } } className={ `p-2 ${ !props.pointer && 'cursor-pointer' }` } >
            <CardActionArea onClick={ props.onClick }>
                <Box padding={ 5 } margin={ 2 } borderRadius={ 2 } bgcolor={ props.bgColor } className='transition-all duration-300 hover:scale-110'  >
                    <Box justifySelf="center" className='p-3 bg-[#f9fafb47] bg-opacity-30 rounded-xl transition-all duration-300 hover:scale-125' >
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
            </CardActionArea>
        </Card>
    );
}