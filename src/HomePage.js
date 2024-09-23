import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button, Card, CardHeader, CardContent, Typography, Grid } from '@mui/material';
import { FaBook, FaUsers, FaTshirt, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PlayOfTheDay = [
  "The Lorenzo Von Matterhorn",
  "The Ted Mosby",
  "The Barney Stinson",
  "The Robin Scherbatsky",
  "The Marshall Eriksen"
];

const HomePage = () => {
  const [currentPlay, setCurrentPlay] = useState(PlayOfTheDay[0]);
  const playerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlay(prev => {
        const currentIndex = PlayOfTheDay.indexOf(prev);
        return PlayOfTheDay[(currentIndex + 1) % PlayOfTheDay.length];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Initialize or reinitialize YouTube player
    const initPlayer = () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      playerRef.current = new window.YT.Player('yt-background-video', {
        videoId: 'mpDk-BqcSYo',
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 1,
          loop: 1,
          playlist: 'mpDk-BqcSYo',
          modestbranding: 1,
          showinfo: 0,
          rel: 0
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          }
        }
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    // Cleanup function
    return () => {
      if (playerRef.current) {z
        playerRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className='home-container' style={{ position: 'relative', overflow: 'hidden', width: '100vw', height: '100vh' }}>
      <div id="yt-background-video" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100vw',
        height: '100vh',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none'
      }}></div>

      <div className='relative z-10 p-5 bg-black bg-opacity-70 min-h-screen'>
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <Typography variant="h1" sx={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }} className='text-yellow-700'>
            The Playbook
          </Typography>
          <Typography variant="h5" sx={{ color: '#fdd835', fontWeight: 'bold' }}>
            Suit Up. Score Chicks. Be Legendary.
          </Typography>
        </motion.header>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='flex justify-center gap-2 mb-3 flex-wrap'
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to='/play'>
              <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fdd835', '&:hover': { backgroundColor: '#fdd835', color: '#1a1a1a' } }}>
                The Playbook
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to='/bro'>
              <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fdd835', '&:hover': { backgroundColor: '#fdd835', color: '#1a1a1a' } }}>
                The Bro Code
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to='/suit'>
              <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fdd835', '&:hover': { backgroundColor: '#fdd835', color: '#1a1a1a' } }}>
                Suit Up Tips
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to='/story'>
              <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fdd835', '&:hover': { backgroundColor: '#fdd835', color: '#1a1a1a' } }}>
                Legendary Stories
              </Button>
            </Link>
          </motion.div>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ marginBottom: '3rem', maxWidth: '800px', margin: '0 auto' }}
        >
          <div
          className='bg-white/5 border-2 border-yellow-500 mb-3'>
            <CardHeader
              title={<Typography variant="h6" sx={{ color: '#fdd835' }}>Play of the Day</Typography>}
            />
            <CardContent>
              <motion.p
                key={currentPlay}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                style={{ fontSize: '1.25rem', fontWeight: 'bold' }}
              >
                {currentPlay}
              </motion.p>
            </CardContent>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to='/legendary'>
              <Button variant="outlined" sx={{ borderColor: '#fdd835', color: '#fdd835', '&:hover': { backgroundColor: '#fdd835', color: '#1a1a1a' } }}>
                Take the Legendary Quiz <FaArrowRight style={{ marginLeft: '0.5rem' }} />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <Grid container spacing={4} justifyContent="center">
            {[
              { title: "Master The Playbook", icon: FaBook, description: "Learn the ultimate techniques to win at the game of love." },
              { title: "Join The Brotherhood", icon: FaUsers, description: "Connect with fellow bros and share legendary stories." },
              { title: "Suit Up Guide", icon: FaTshirt, description: "Dress to impress with our comprehensive style guide." }
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className='bg-white/5 border-2 border-yellow-500 '>
                  <CardHeader
                    title={
                      <Typography variant="h6" sx={{ color: '#fdd835', display: 'flex', alignItems: 'center' }}>
                        <item.icon style={{ marginRight: '0.5rem' }} />
                        {item.title}
                      </Typography>
                    }
                  />
                  <CardContent>
                    <Typography className='text-slate-400'>{item.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;