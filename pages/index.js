import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import bannerImage from '../public/bannerImage.jpeg';
import bannerImage2 from '../public/bannerImage2.jpeg';
import Chris from '../public/image6.jpeg';
import Lesson from '../public/lesson.jpeg';
import Image from 'next/image';
import Typed from 'react-typed';
import CallEndIcon from '@mui/icons-material/CallEnd';



const ROLES = [
  'Bluerock Springs: 70',
  'HiddenBrooke: 70',
  'Eagle Vine: 70',
  'TPC Harding Park: 70',
  'Presidio Golf Course: 70',
  'Corica Park Golf Course: 70',
  'Cinnabar Hills Golf Club: 70',
  'Baylands Golf Links: 70',
  'Peacock Gap Golf Club: 70',
  'The Links at Bodega Harbour: 70',
  'Bluerock Springs: 70',
];

const BannerStyles = {
  backgroundImage: `url('${bannerImage.src}')`,
  backgroundColor: 'rgba(255, 0, 0, 0.3)',
  color: '#fff',
  textAlign: 'center',
  height: 'auto',
  backgroundSize: "100%",
  backgroundRepeat: 'no-repeat',
  postion: 'relative',
  width: '100%',
  height:'100vh',
};

const BannerStyles2 = {
  backgroundImage: `url('${bannerImage2.src}')`,
  backgroundColor: 'rgba(255, 0, 0, 0.3)',
  color: '#fff',
  textAlign: 'center',
  height: 'auto',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  postion: 'relative',
  width: '100%',
};

const ChrisPhoto = {
  backgroundImage: `url('${Chris.src}')`,
  backgroundColor: 'rgba(255, 0, 0, 0.3)',
  color: '#fff',
  textAlign: 'center',
  height: 'auto',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  postion: 'relative',
  width: '100%',
};

const LessonPhoto = {
  backgroundImage: `url('${Lesson.src}')`,
  backgroundColor: 'rgba(255, 0, 0, 0.3)',
  color: '#fff',
  textAlign: 'center',
  height: 'auto',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  postion: 'relative',
  width: '100%',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="relative"
        style={{
          backgroundColor: '#eb4034',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <Toolbar>
          <Grid container spacing={0}>
            <Grid xs={12} md={8}>
              <Typography
                variant="h5"
                color="black"
                fontFamily="avenir"
              >
                <b>Chris Curnett</b> Golf
              </Typography>
            </Grid>
            <Grid xs={12} md={4}>

              <Typography
                variant="h5"
                color="black"
                fontFamily="avenir"
              >
                
                Book a Session: 918-373-4999
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 1,
            pb: 70,
          }}
          style={BannerStyles}
        >
          {/* <div style={{ paddingTop: '200px' }}>
            <Typed
              style={{ fontSize: '3rem', backgroundColor: '#353535' }}
              loop
              strings={ROLES}
              typeSpeed={50}
              backSpeed={80}
              backDelay={3000}
              loopCout={0}
              showCursor
              className="self-typed"
              cursorChar="|"
            ></Typed>{' '}
          </div> */}
        </Box>
        {/* End hero unit */}

        <Container component="main" sx={{ mt: 2, mb: 4 }} maxWidth="lg">
          <Typography
            variant="h4"
            color="black"
            component="div"
            sx={{ flexGrow: 1 }}
            fontFamily="avenir"

          >
            About Chris
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <Card sx={{ maxWidth: 345 }} style={ChrisPhoto}>
                <CardMedia sx={{ height: 300 }} />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <item>
                {/* <Typography variant="h2" component="h1" gutterBottom>
              About Chris Curnett
            </Typography> */}
                <Typography variant="h6" component="h6" gutterBottom
                fontFamily="avenir"
                >
                  Chris Curnutt is originally from Oklahoma and began his golf
                  journey at 5 years old in a suburb of Tulsa. He grew up
                  playing multiple sports, including soccer and baseball, but
                  decided at the age of 15 to focus on golf. In high school,
                  Chris was a member of his High School team which amassed over
                  25 wins, including 3 consecutive Oklahoma State Championships.
                  After attending the University of Arkansas with a major in
                  Education, Chris began his career in golf at Shadow Valley CC
                  in Bentonville, AR. Here, he was involved in the instruction
                  program as well as day to day operations. He continued his
                  career at Emerald Falls GC in Broken Arrow, OK, as an
                  Assistant Professional. After moving to the Oklahoma City
                  area, Chris instructed on a part time basis while pursuing a
                  career in restaurant management. 10 years later, Chris and his
                  girlfriend Samantha moved to Northern California and the
                  decision was made that he would return to teaching full time.
                  Chris is currently an instructor at Blue Rock Springs GC in
                  Vallejo, CA
                </Typography>
              </item>
            </Grid>
          </Grid>
          <Container>
          </Container>
          <Grid container spacing={2} sx={{ mt: 1, mb: 4 }}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <item>
                <Card sx={{ maxWidth: 345 }} style={LessonPhoto}>
                  <CardMedia sx={{ height: 300 }} />
                </Card>
              </item>
            </Grid>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <item>
                <Typography variant="h6" component="h6" gutterBottom
                  fontFamily="avenir"
                >
                  Chris Curnutt's teaching style is characterized by a deep
                  passion for golf and a commitment to holistic development.
                  Drawing from a wealth of experience, he focuses on cultivating
                  a strong foundation in his students, emphasizing not only
                  technical skills but also core values. As an instructor, Chris
                  leverages a diverse set of tools and techniques to enhance
                  learning. He utilizes Operation 36, V1 video analysis, and
                  Hackmotion technology to provide structured and goal-oriented
                  lessons. This combination of tools allows him to offer precise
                  feedback and tailored guidance to his students.
                </Typography>
              </item>
            </Grid>
          </Grid>
        </Container>

        <Toolbar style={{ backgroundColor: '#353535' }}>
          <Container>
            <Grid container spacing={2} sx={{ mt: 2, mb: 4 }}>
              <Grid item lg={3} md={3} sm={6} xs={6}>
                <item>
                  <Typography variant="h5" gutterBottom color="#fff" 
                    fontFamily="avenir"
                  >
                    3256 <br />
                    lessons since 2020
                  </Typography>
                </item>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={6}>
                <item>
                  <Typography
                    variant="h5"
                    component="h6"
                    gutterBottom
                    color="#fff"
                    fontFamily="avenir"
                  >
                    8K+ <br />
                    lessons career
                  </Typography>
                </item>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={6}>
                <item>
                  <Typography
                    variant="h5"
                    component="h6"
                    gutterBottom
                    color="#fff"
                    fontFamily="avenir"
                  >
                    650+ <br />
                    golfers helped
                  </Typography>
                </item>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={6}>
                <item>
                  <Typography
                    variant="h5"
                    component="h6"
                    gutterBottom
                    color="#fff"
                    fontFamily="avenir"
                  >
                    95% <br />
                    goals reached
                  </Typography>
                </item>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>

        <Toolbar>
          <Grid container>
            <Grid item lg="8" md="8" sm="12" xs="12">
              <item
                style={{
                  fontFamily: 'source-sans-pro',
                  fontWeight: '700',
                  fontStyle: 'normal',
                  fontSize: '40px',
                  fontFamily:'avenir'
                }}
              >
                Contact:
              </item>
            </Grid>
            <Grid item lg="4" md="8" sm="12" xs="12">
              <item>
                <Typography
                  style={{
                    fontFamily: 'source-sans-pro',
                    fontWeight: '700',
                    fontStyle: 'normal',
                    fontSize: '20px',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    fontFamily:'avenir'
                  }}
                >
                  714 Contra Costa Blvd. Pleasant Hill, CA 94523 Email:
                  chris.curnutt59@gmail.com
                  <br /> Instagram: @chriscurnuttgolf
                </Typography>
              </item>
            </Grid>
          </Grid>
        </Toolbar>
      </main>
    </ThemeProvider>
  );
}
