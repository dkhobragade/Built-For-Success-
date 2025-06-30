import ColorButton from "@/components/ui/ColorButton";
import { LibraryBooksOutlined, PlayCircleOutline, NoteAltOutlined, CodeOutlined } from "@mui/icons-material";
import { Box, Grid, Paper, Typography } from "@mui/material";

export default function Page ()
{


    const highlights = [
        {
            title: "450+ Structured Modules",
            description: "Carefully crafted to help you crack top tech interviews.",
            icon: <LibraryBooksOutlined fontSize="large" color="primary" />,
        },
        {
            title: "Video Solutions for All Levels",
            description: "Covers brute, better, and optimal approaches with clarity.",
            icon: <PlayCircleOutline fontSize="large" color="primary" />,
        },
        {
            title: "Quick Notes & Articles",
            description: "Summarized content for faster revision and retention.",
            icon: <NoteAltOutlined fontSize="large" color="primary" />,
        },
        {
            title: "Code in 4 Languages",
            description: "Solutions in C++, Java, Python, and JavaScript.",
            icon: <CodeOutlined fontSize="large" color="primary" />,
        },
    ];

    return <Box px={ 4 } py={ 10 } textAlign="center" bgcolor="#f9fafb">
        <Typography variant="h4" fontWeight={ 700 } mb={ 3 }>
            📘 Master DSA the Smart Way — Free, Structured & Beginner-Friendly.
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" mb={ 6 }>
            Everything you need to go from zero to hero in DSA.
        </Typography>

        <Grid container spacing={ 4 } justifyContent="center">
            { highlights.map( ( item, index ) => (
                <Grid key={ index } >
                    <Paper
                        elevation={ 4 }
                        sx={ {
                            p: 3,
                            borderRadius: 4,
                            height: "100%",
                            transition: "transform 0.3s",
                            "&:hover": { transform: "scale(1.05)" },
                        } }
                    >
                        <Box display="flex" justifyContent="center" mb={ 2 }>
                            { item.icon }
                        </Box>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            { item.title }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            { item.description }
                        </Typography>
                    </Paper>
                </Grid>
            ) ) }
        </Grid>
        <ColorButton
            sx={ { marginTop: 8, paddingLeft: 5, paddingRight: 5, paddingTop: 1.5, paddingBottom: 1.5, borderRadius: "999px", fontWeight: "600" } }
            size="large" variant="contained" text="Start Practicing Now" />
    </Box>
}


// 🧾 Notes
// This course is built with a problem-solving-first approach, guiding you through every pattern and logic with clarity.

// Many questions include in-depth explanations and solution codes with variations.

// For practice, we’ve embedded direct links where available. If certain problems are unavailable on platforms like LeetCode due to copyright, we’ll provide detailed in-site content or TUF+ free trial links where needed.

// No third-party distractions. Our focus is on delivering a consistent, high-quality experience directly through our platform.

// ✨ Note: You chose our platform because of the clarity, structure, and value we offer — not just for external practice links. Stay focused, stay consistent. Everything you need is right here.