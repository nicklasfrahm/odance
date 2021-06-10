import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { asset } from './utils';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    overflow: 'hidden',
  },
  danceCourses: {
    display: 'flex',
  },
  danceCourse: {
    width: '33%',
    height: '200px',
    border: '1px solid #333',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  },
  main: {
    position: 'relative',
    zIndex: '100',
    overflow: 'auto',
  },
  videoContainer: {
    position: 'absolute',
    zIndex: '10',
    overflow: 'hidden',
    height: '100vh',
    width: '100%',
  },
  section: {
    overflow: 'auto',
  },
  video: {
    minHeight: '100vh',
    minWidth: '100%',
    aspectRatio: '16/9',
    opacity: 0.25,
    display: 'block',
    marginLeft: '50%',
    transform: 'translateX(-50%)',
  },
}));

const App = () => {
  const classes = useStyles();

  // Implement autoplay manually to support Safari.
  const video = React.useCallback((videoElement) => {
    (async () => {
      if (videoElement !== null) {
        try {
          // Attempt to play the video.
          await videoElement.play();
        } catch (err) {
          // Failed to play video.
          console.log(err);
        }
      }
    })();
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.videoContainer}>
        <video ref={video} className={classes.video} loop muted>
          <source src={asset('video/guy-dancing.mp4')} type="video/mp4" />
        </video>
      </div>
      <main className={classes.main}>
        <div className={classes.title}>
          <Typography variant="h1">O!Dance</Typography>
          <Typography variant="h2">Coming soon!</Typography>
        </div>
        {/* <section className={classes.section}>
          <Typography variant="body1">
            He lets start dancing together!
          </Typography>
        </section>
        <div className={classes.danceCourses}>
          <div className={classes.danceCourse}></div>
          <div className={classes.danceCourse}></div>
          <div className={classes.danceCourse}></div>
        </div> */}
      </main>
    </div>
  );
};

export default App;
