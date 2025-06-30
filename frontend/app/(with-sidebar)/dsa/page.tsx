import { DSAContent } from "@/lib/constants";
import { Box, List, ListItem, Typography } from "@mui/material";

export default function Page ()
{

    const renderList = () =>
    {
        return <>
            { DSAContent.map( ( text, idx ) => <ListItem key={ idx }>
                { text }
            </ListItem> ) }
        </>
    }
    return <Box padding={ 2 }  >
        <Typography fontSize={ 25 } fontStyle="italic" fontWeight={ 500 } >
            A complete roadmap for mastering Data Structures & Algorithms (DSA) from scratch to advanced — structured, beginner-friendly, and absolutely free.
        </Typography>
        <Typography component="div" >
            <List>
                <ListItem>
                    🔑 Key Highlights
                </ListItem>
                { renderList() }
            </List>
        </Typography>
    </Box>
}