import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer ()
{
    return <Box bgcolor="#1a1a1a" color="white">
        <Box padding={ 6 }  >
            <Grid container spacing={ 4 }>
                <Grid size={ 4 }>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        LOGO
                    </Typography>
                    <Typography variant="body2" color="gray">
                        Empowering learners to grow, upskill, and succeed in the modern tech world.
                    </Typography>
                </Grid>
                <Grid size={ 4 } padding={ 2 }>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Quick Links
                    </Typography>
                    <Box display="flex" flexDirection="column" gap={ 1 }>
                        <Link href="/dsa" color="gray">DSA</Link>
                        <Link href="/systemdesign" color="gray">System Design</Link>
                        <Link href="/blog" color="gray">Blog</Link>
                        <Link href="/subjects" color="gray">Subjects</Link>
                    </Box>
                </Grid>
                <Grid size={ 4 } padding={ 2 } alignItems="center" display="flex" flexDirection="column" >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Connect with Us
                    </Typography>
                    <Typography variant="body2" color="gray">Email: hello@yourbrand.com</Typography>
                    <Box mt={ 2 }>
                        <IconButton href="#" sx={ { color: "white" } }><Facebook /></IconButton>
                        <IconButton href="#" sx={ { color: "white" } }><Twitter /></IconButton>
                        <IconButton href="#" sx={ { color: "white" } }><LinkedIn /></IconButton>
                        <IconButton href="#" sx={ { color: "white" } }><Instagram /></IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Box textAlign="center" mt={ 5 } borderTop="1px solid #444" pt={ 3 }>
            <Typography variant="body2" color="gray">
                © { new Date().getFullYear() } YourBrand. All rights reserved.
            </Typography>
        </Box>
    </Box>
}