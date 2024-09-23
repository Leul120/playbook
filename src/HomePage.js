import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button, Card, CardHeader, CardContent, Typography, Grid, Container, Modal } from '@mui/material';
import { FaBook, FaUsers, FaTshirt, FaArrowRight, FaPlay } from "react-icons/fa";
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
  const [open] = useState(true);  // Set to true to always show the modal

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlay(prev => {
        const currentIndex = PlayOfTheDay.indexOf(prev);
        return PlayOfTheDay[(currentIndex + 1) % PlayOfTheDay.length];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  

  return (
    <div className='p-5 bg-slate-900 min-h-screen'>
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
        className='flex flex-wrap justify-center gap-2 mb-3'
      >
        {/* Navigation Buttons */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to='/play'><Button variant="outlined" sx={{ color: '#fff', borderColor: '#fdd835' }}>
            The Playbook
          </Button></Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to='/bro'><Button variant="outlined" sx={{ color: '#fff', borderColor: '#fdd835' }}>
            The Bro Code
          </Button></Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to='/suit'><Button variant="outlined" sx={{ color: '#fff', borderColor: '#fdd835' }}>
            Suit Up Tips
          </Button></Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to='/story'><Button variant="outlined" sx={{ color: '#fff', borderColor: '#fdd835' }}>
            Legendary Stories
          </Button></Link>
        </motion.div>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{ marginBottom: '3rem', maxWidth: '800px', margin: '0 auto' }}
      >
        <Card sx={{ backgroundColor: '#333', borderColor: '#fdd835', borderWidth: '2px', borderStyle: 'solid', marginBottom: '3rem' }}>
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
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to='/legendary'>
            <Button variant="outlined" sx={{ borderColor: '#fdd835', color: '#fdd835' }}>
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
              <Card sx={{ backgroundColor: '#333', borderColor: '#fdd835', borderWidth: '2px', borderStyle: 'solid' }}>
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

      {/* Modal for YouTube Video */}
      <Modal
        open={open}
        sx={{
          position: 'fixed',
          top: 20,
          right: 20,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          zIndex: 9999
        }}
      >
        <div style={{ backgroundColor: '#000', padding: '20px', borderRadius: '8px' }}>
          <iframe
            width="300"  // Adjust width for a smaller pop-up
            height="169" // Adjust height for a smaller pop-up
            src="https://www.youtube.com/embed/mpDk-BqcSYo" // Replace with your YouTube video ID
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default HomePage;
