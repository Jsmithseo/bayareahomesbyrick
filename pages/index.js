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

const BannerStyles = {
  backgroundImage: `url('${bannerImage.src}')`,
  backgroundColor: 'rgba(255, 0, 0, 0.3)',
  color: '#fff',
  textAlign: 'center',
  height: '40%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const BannerStyles2 = {
  backgroundImage: `url('${bannerImage2.src}')`,
  backgroundColor: 'rgba(255, 0, 0, 0.3)',
  color: '#fff',
  textAlign: 'center',
  height: '40%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const ChrisPhoto = {
  backgroundImage: `url('${Chris.src}')`,
  backgroundColor: 'rgba(255, 0, 0, 0.3)',
  color: '#fff',
  textAlign: 'center',
  height: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const LessonPhoto = {
  backgroundImage: `url('${Lesson.src}')`,
  backgroundColor: 'rgba(255, 0, 0, 0.3)',
  color: '#fff',
  textAlign: 'center',
  height: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="relative"
        style={{
          backgroundColor: 'white',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <Toolbar>
          <Grid container spacing={2}>
            <Grid xs={6} md={8}>
              <Typography
                variant="h4"
                color="black"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                <b>Chris Curnett</b> Golf
              </Typography>
            </Grid>
            <Grid xs={6} md={4}>
              <Typography
                variant="h4"
                color="black"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                918 -373-4999
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
            pb: 80,
          }}
          style={BannerStyles}
        ></Box>
        {/* End hero unit */}
        <Container component="main" sx={{ mt: 2, mb: 4 }} maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }} style={ChrisPhoto}>
                <CardMedia sx={{ height: 300 }} />
              </Card>
            </Grid>
            <Grid item xs={8}>
              <item>
                {/* <Typography variant="h2" component="h1" gutterBottom>
              About Chris Curnett
            </Typography> */}
                <Typography variant="h6" component="h6" gutterBottom>
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

          <Grid container spacing={2} sx={{ mt: 10, mb: 4 }}>
            <Grid item xs={8}>
              <item>
                <Typography variant="h6" component="h6" gutterBottom>
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
            <Grid item xs={4}>
              <item>
                <Card sx={{ maxWidth: 345 }} style={LessonPhoto}>
                  <CardMedia sx={{ height: 300 }} />
                </Card>
              </item>
            </Grid>
          </Grid>
        </Container>

        <Toolbar style={{ backgroundColor: '#353535' }}>
          <Container>
            <Grid container spacing={2} sx={{ mt: 2, mb: 4 }}>
              <Grid item xs={3}>
                <item>
                  <Typography variant="h5" gutterBottom color="#fff">
                    3256 <br />
                    lessons since 2020
                  </Typography>
                </item>
              </Grid>
              <Grid item xs={3}>
                <item>
                  <Typography
                    variant="h5"
                    component="h6"
                    gutterBottom
                    color="#fff"
                  >
                    8K+ <br />
                    lessons career
                  </Typography>
                </item>
              </Grid>
              <Grid item xs={3}>
                <item>
                  <Typography
                    variant="h5"
                    component="h6"
                    gutterBottom
                    color="#fff"
                  >
                    650+ <br />
                    golfers helped
                  </Typography>
                </item>
              </Grid>
              <Grid item xs={3}>
                <item>
                  <Typography
                    variant="h5"
                    component="h6"
                    gutterBottom
                    color="#fff"
                  >
                    95% <br />
                    goals reached
                  </Typography>
                </item>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pb: 70,
          }}
          style={BannerStyles2}
        ></Box>
        <Toolbar>
          <Grid container>
            <Grid item xs="8">
              <item>Contact</item>
            </Grid>
            <Grid item xs="2">
              <item>
                <Typography>
                714 Contra Costa Blvd.
                </Typography>
                
                <br />
                <Typography>
                Pleasant Hill, CA 94523
                </Typography>
                <br />
                <Typography>
                Email: chris.curnutt59@gmail.com
                </Typography>
                <br />
                <Typography>
                Instagram: @chriscurnuttgolf
                </Typography>
              </item>
            </Grid>
          </Grid>
        </Toolbar>
      </main>
    </ThemeProvider>
  );
}
