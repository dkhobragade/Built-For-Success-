import CardComponent from "@/components/ui/CardComponent";
import colors from "@/lib/colors";
import { CardContent } from "@/lib/constants";
import { LibraryBooksOutlined, ImportantDevicesOutlined, SubjectOutlined, AutoStoriesOutlined, BugReportOutlined, WorkHistoryOutlined } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";


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
        <Grid container padding={ 2 } spacing={ { xs: 2, md: 3 } } columns={ { xs: 4, sm: 8, lg: 12 } } >
          { CardContent.map( ( card, index ) => (
            <Grid key={ index } className="flex justify-center" size={ { xs: 2, sm: 4, md: 4 } }>
              <CardComponent pointer={ card.isLocked } key={ index } bgColor={ card.color } title={ card.title } icon={ iconMap[ card.icon as keyof typeof iconMap ] } description={ card.description } />
            </Grid>
          ) ) }
        </Grid>
      </Box>
    )
  }


  return (
    <Box margin={ 2 } >
      <Box bgcolor={ colors.WhiteSmoke } maxHeight={ 500 } padding={ 2 } borderRadius={ 5 } >
        <Grid container spacing={ 2 }>
          <Grid size={ 6 } display="grid" justifyContent="end" >
            <Box>
              <Box bgcolor="white" padding={ 1 } className="-rotate-3" borderRadius={ 2 } width={ 300 } >
                <Typography fontWeight={ 600 } fontSize={ 50 } fontFamily="cursive" >
                  LEARN
                </Typography>
              </Box>
              <Typography fontWeight={ 600 } fontSize={ 50 } >
                CODE
              </Typography>
              <Box bgcolor={ colors.LiberatorGold } padding={ 1 } borderRadius={ 2 } width={ 300 } >
                <Typography fontWeight={ 600 } fontSize={ 50 } fontFamily="cursive" >
                  GROW
                </Typography>
              </Box>
              <Typography fontWeight={ 600 } fontSize={ 50 } >
                SUCCEED.
              </Typography>
            </Box>
            <Typography fontWeight={ 400 } fontSize={ 20 }  >
              Skill up, stand out, and get hired with confidence.
            </Typography>
          </Grid>
          <Grid size={ 6 }  >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque temporibus alias in et inventore beatae veritatis officiis harum mollitia quasi, aliquam expedita assumenda quo aliquid animi odio impedit doloremque recusandae?
          </Grid>
        </Grid>
      </Box>
      { renderCardComponent() }
    </Box>
  );
}
