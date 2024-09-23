import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Card, CardHeader, CardContent, Typography, Grid } from '@mui/material';
import { FaBook, FaUsers, FaTshirt, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

// Simulated "Play of the Day" array
const PlayOfTheDay = [
  "The Lorenzo Von Matterhorn",
  "The Ted Mosby",
  "The Barney Stinson",
  "The Robin Scherbatsky",
  "The Marshall Eriksen"
];

const HomePage = () => {
  const [currentPlay, setCurrentPlay] = useState(PlayOfTheDay[0]);

  useEffect(() => {
    // Cycle through "Play of the Day" every 5 seconds
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
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize YouTube player
    window.onYouTubeIframeAPIReady = function () {
      new window.YT.Player('yt-background-video', {
  videoId: 'HdcxGbX0W_U',  // Use this video ID
  playerVars: {
    autoplay: 1,
    controls: 0,
    mute: 1,
    loop: 1,
    playlist: 'HdcxGbX0W_U'  // Set playlist for looping
  },
  events: {
    onReady: function (event) {
      event.target.playVideo();
    }
  }
});
    };
  }, []);

  return (
    <div className='home-container'>
      {/* YouTube Background Video */}
      <div id="yt-background-video" className="video-iframe"></div>

      {/* Overlay Content */}
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

        {/* Navigation Buttons */}
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
          <div  className=' bg-white/5 border-2 border-yellow-400 backdrop-blur-lg mb-3 '>
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
                <div
                className=' bg-white/5 border-2 border-yellow-400 backdrop-blur-lg mb-3'>
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
                </div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;