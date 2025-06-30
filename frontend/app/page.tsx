import CardComponent from "@/components/ui/CardComponent";
import { CardContent } from "@/lib/constants";
import { LibraryBooksOutlined, ImportantDevicesOutlined, SubjectOutlined, AutoStoriesOutlined, BugReportOutlined, WorkHistoryOutlined } from "@mui/icons-material";
import { Box, Container, Grid } from "@mui/material";
export default function Home ()
{

  const iconMap = {
    LibraryBooksOutlined: <LibraryBooksOutlined />,
    ImportantDevicesOutlined: <ImportantDevicesOutlined />,
    SubjectOutlined: <SubjectOutlined />,
    BugReportOutlined: <BugReportOutlined />,
    WorkHistoryOutlined: <WorkHistoryOutlined />,
    AutoStoriesOutlined: <AutoStoriesOutlined />
  }

  const renderCardComponent = () =>
  {
    return (
      <Box sx={ { flexGrow: 1 } }>
        <Grid container spacing={ { xs: 2, md: 3 } } columns={ { xs: 4, sm: 8, lg: 12 } } >
          { CardContent.map( ( card, index ) => (
            <Grid key={ index } size={ { xs: 2, sm: 4, md: 4 } }>
              <CardComponent pointer={ card.isLocked } key={ index } bgColor={ card.color } title={ card.title } icon={ iconMap[ card.icon as keyof typeof iconMap ] } description={ card.description } />
            </Grid>
          ) ) }
        </Grid>
      </Box>
    )
  }

  return (
    <Container maxWidth="lg" className="p-10">
      { renderCardComponent() }
    </Container>
  );
}
