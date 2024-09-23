import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Container,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { FaStar, FaComments, FaHeart, FaUserPlus } from 'react-icons/fa';
import Masonry from 'react-masonry-css';

const commandments = [
  "Bro Code Rule #1: A bro shall always take a bro’s side, even when he’s wrong.",
  "Bro Code Rule #2: Bros before hoes.",
  "Bro Code Rule #3: A bro never lets his bro drink alone.",
  "Bro Code Rule #4: If a bro gets a girlfriend, the girlfriend is not allowed to change the bro's plans.",
  "Bro Code Rule #5: A bro shall not reveal another bro’s secrets.",
  "Bro Code Rule #6: When in doubt, leave it out. (Don’t text while drunk.)",
  "Bro Code Rule #7: A bro never breaks the bro handshake.",
  "Bro Code Rule #8: A bro must never date a bro's ex.",
  "Bro Code Rule #9: If a bro calls for help, the bro must come, no questions asked.",
  "Bro Code Rule #10: A bro is allowed to make fun of his bro's hairstyle.",
  "Bro Code Rule #11: A bro shall never be caught crying over a girl.",
  "Bro Code Rule #12: If a bro is in a relationship, he must take care of his bro’s needs too.",
  "Bro Code Rule #13: A bro's mother is off-limits.",
  "Bro Code Rule #14: If a bro gets married, his bros must always be at the bachelor party.",
  "Bro Code Rule #15: Bros support each other in all sports, especially during playoffs.",
  "Bro Code Rule #16: A bro shall always give a high-five, never a low-five.",
  "Bro Code Rule #17: A bro shall not touch another bro’s food without permission.",
  "Bro Code Rule #18: A bro never wears another bro’s hat without permission.",
  "Bro Code Rule #19: A bro must never hog the remote.",
  "Bro Code Rule #20: If a bro is in a bar fight, all bros must join in.",
  "Bro Code Rule #21: A bro shall always share his pizza.",
  "Bro Code Rule #22: A bro shall never bail on a bro's plans.",
  "Bro Code Rule #23: A bro should always have a backup plan for getting home after a night out.",
  "Bro Code Rule #24: A bro shall always ask, 'Are you okay?' after a breakup.",
  "Bro Code Rule #25: A bro is not allowed to date his best friend's sister without prior approval.",
  "Bro Code Rule #26: If a bro’s ex is at a party, the bro must leave.",
  "Bro Code Rule #27: A bro never lets another bro walk home alone.",
  "Bro Code Rule #28: A bro must never speak ill of another bro's car.",
  "Bro Code Rule #29: A bro shall never wear sandals without socks.",
  "Bro Code Rule #30: A bro must always give a bro a ride if he’s stranded.",
  "Bro Code Rule #31: If a bro’s phone dies, he can borrow another bro’s phone without asking.",
  "Bro Code Rule #32: A bro must always have his bro's back in a fight.",
  "Bro Code Rule #33: A bro shall not wear matching outfits with another bro.",
  "Bro Code Rule #34: If a bro has a bad date, the other bros must provide moral support.",
  "Bro Code Rule #35: A bro shall always be honest about a bad haircut.",
  "Bro Code Rule #36: A bro must never let another bro pay for a round of drinks alone.",
  "Bro Code Rule #37: A bro is not allowed to complain about the amount of food a bro eats.",
  "Bro Code Rule #38: A bro shall always remember a bro's birthday, but forget his own.",
  "Bro Code Rule #39: If a bro has a crush, the bros must help him win her over.",
  "Bro Code Rule #40: A bro never lets another bro go home with a sketchy person.",
  "Bro Code Rule #41: A bro shall never be a wingman for a bro who’s already taken.",
  "Bro Code Rule #42: A bro must never discuss another bro's personal life in public.",
  "Bro Code Rule #43: If a bro texts you for help, you must respond immediately.",
  "Bro Code Rule #44: A bro should never throw another bro under the bus.",
  "Bro Code Rule #45: A bro must always buy a round if he wins a bet.",
  "Bro Code Rule #46: A bro shall always keep a secret stash of snacks.",
  "Bro Code Rule #47: A bro never shares a bed with another bro unless absolutely necessary.",
  "Bro Code Rule #48: A bro must always toast to friendship before drinking.",
  "Bro Code Rule #49: A bro is allowed to vent about life but must not wallow in self-pity.",
  "Bro Code Rule #50: A bro shall never date a friend's mother.",
  "Bro Code Rule #51: A bro must always respond with 'what's up' when greeted.",
  "Bro Code Rule #52: A bro shall always help another bro move, but only once.",
  "Bro Code Rule #53: A bro never lets another bro skip leg day.",
  "Bro Code Rule #54: A bro must always protect another bro from awkward situations.",
  "Bro Code Rule #55: A bro shall always support his bro’s weird hobbies.",
  "Bro Code Rule #56: A bro should never hit on another bro’s date.",
  "Bro Code Rule #57: A bro is required to share his Netflix password.",
  "Bro Code Rule #58: A bro must always be the designated driver when needed.",
  "Bro Code Rule #59: A bro shall never make fun of another bro’s favorite band.",
  "Bro Code Rule #60: A bro must always warn another bro about a bad haircut before it’s too late.",
  "Bro Code Rule #61: A bro shall always take pictures during important events.",
  "Bro Code Rule #62: A bro must always ask for the bro handshake before leaving.",
  "Bro Code Rule #63: A bro is not allowed to cry during movies unless it's a Pixar film.",
  "Bro Code Rule #64: A bro should never go to the bathroom alone at a party.",
  "Bro Code Rule #65: A bro must always cheer for his bros at karaoke.",
  "Bro Code Rule #66: A bro never lets another bro date a known backstabber.",
  "Bro Code Rule #67: A bro must always keep the group chat alive.",
  "Bro Code Rule #68: A bro shall never leave another bro hanging.",
  "Bro Code Rule #69: A bro is required to plan epic road trips.",
  "Bro Code Rule #70: A bro must always bring the snacks when visiting another bro.",
  "Bro Code Rule #71: A bro shall never judge another bro’s taste in music.",
  "Bro Code Rule #72: A bro must always have a backup plan for a night out.",
  "Bro Code Rule #73: A bro shall always be there for the post-breakup binge-watch.",
  "Bro Code Rule #74: A bro must respect the sanctity of another bro’s gaming time.",
  "Bro Code Rule #75: A bro shall always know how to change a tire.",
  "Bro Code Rule #76: A bro never leaves a party without saying goodbye.",
  "Bro Code Rule #77: A bro must always pick up the phone when a bro calls.",
  "Bro Code Rule #78: A bro is required to celebrate each other’s victories, no matter how small.",
  "Bro Code Rule #79: A bro shall always have a funny story ready to share.",
  "Bro Code Rule #80: A bro must never talk to another bro's crush.",
  "Bro Code Rule #81: A bro should never let another bro drink and drive.",
  "Bro Code Rule #82: A bro must always have each other's backs in the gym.",
  "Bro Code Rule #83: A bro is not allowed to be too serious about anything.",
  "Bro Code Rule #84: A bro shall never let another bro go out in an embarrassing outfit.",
  "Bro Code Rule #85: A bro must never speak ill of another bro's favorite movie.",
  "Bro Code Rule #86: A bro is required to support another bro's business ventures.",
  "Bro Code Rule #87: A bro shall never complain about doing the dishes after a party.",
  "Bro Code Rule #88: A bro must always have a stash of emergency cash for his bros.",
  "Bro Code Rule #89: A bro should never let another bro walk away from an argument.",
  "Bro Code Rule #90: A bro shall always help another bro with his dating profile.",
  "Bro Code Rule #91: A bro must never forget to follow up on another bro's life events.",
  "Bro Code Rule #92: A bro should always be ready for spontaneous adventures.",
  "Bro Code Rule #93: A bro shall never ghost another bro without a proper explanation.",
  "Bro Code Rule #94: A bro must always maintain a sense of humor, especially during tough times.",
  "Bro Code Rule #95: A bro shall always keep the spirit of fun alive.",
  "Bro Code Rule #96: A bro must never bail on a scheduled bro night.",
  "Bro Code Rule #97: A bro is required to help another bro get ready for dates.",
  "Bro Code Rule #98: A bro shall never forget the little things that matter to his bros.",
  "Bro Code Rule #99: A bro must always show gratitude for the little things.",
  "Bro Code Rule #100: A bro shall never underestimate the power of a good hug."
];


const BroCodePage = () => {
  const [newRule, setNewRule] = useState("");
  const [submittedRules, setSubmittedRules] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogAction, setDialogAction] = useState(""); // New state for dialog action
  const [comment, setComment] = useState(""); // State for comment input

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newRule) {
      setSubmittedRules([...submittedRules, newRule]);
      setNewRule("");
    }
  };

  const handleDialogOpen = (content, action) => {
    setDialogContent(content);
    setDialogAction(action);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setDialogContent("");
    setComment(""); // Clear comment input on close
  };

  const handleCommentSubmit = () => {
    // Handle comment submission logic here
    alert(`Comment submitted: ${comment}`);
    setComment("");
    handleDialogClose();
  };

   const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

  return (
    <div className='p-5 bg-slate-900 min-h-screen'>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <Typography variant="h1" sx={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }} className='text-yellow-700'>
          The Bro Code
        </Typography>
        <Typography variant="h5" sx={{ color: '#fdd835', fontWeight: 'bold' }}>
          Your guide to legendary bro behavior!
        </Typography>
      </motion.header>
<span>
     <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto -ml-4"
      columnClassName="pl-4 bg-clip-padding"
      >
        {commandments.map((rule, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            key={index}
          >
            <Card sx={{ backgroundColor: '#333', borderColor: '#fdd835', borderWidth: '2px', borderStyle: 'solid', marginBottom: '1rem' }}>
              <CardHeader
                title={<Typography variant="h6" sx={{ color: '#fdd835' }}>{rule}</Typography>}
              />
              <CardContent>
                <Typography className='text-slate-400'>
                  A rule to live by! How important is this to you?
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                  
                  
                  <FaHeart style={{ cursor: 'pointer', color: '#FFD700' }}  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
        {submittedRules.map((rule, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (commandments.length + index) * 0.1, duration: 0.5 }}
            key={`submitted-${index}`}
          >
            <Card sx={{ backgroundColor: '#444', borderColor: '#fdd835', borderWidth: '2px', borderStyle: 'solid', marginBottom: '1rem' }}>
              <CardHeader
                title={<Typography variant="h6" sx={{ color: '#fdd835' }}>{rule}</Typography>}
              />
              <CardContent>
                <Typography className='text-slate-400'>
                  A new rule added by a fellow bro!
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Masonry>
</span>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{ marginTop: '3rem', textAlign: 'center' }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            placeholder="Add your own bro code rule..."
            value={newRule}
            onChange={(e) => setNewRule(e.target.value)}
            sx={{ width: '300px', marginRight: '1rem' }}
          />
          <Button type="submit" variant="contained" sx={{ backgroundColor: '#fdd835', color: '#1a1a1a', '&:hover': { backgroundColor: '#fbc02d' } }}>
            Submit Rule <FaUserPlus style={{ marginLeft: '0.5rem' }} />
          </Button>
        </form>
      </motion.div>

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Share Your Thoughts</DialogTitle>
        <DialogContent>
          {dialogAction === "comment" ? (
            <TextField
              autoFocus
              margin="dense"
              label="Your Comment"
              type="text"
              fullWidth
              variant="outlined"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          ) : (
            <Typography>{dialogContent}</Typography>
          )}
        </DialogContent>
        <DialogActions>
          {dialogAction === "comment" ? (
            <>
              <Button onClick={handleCommentSubmit} color="primary">
                Submit Comment
              </Button>
              <Button onClick={handleDialogClose} color="secondary">
                Cancel
              </Button>
            </>
          ) : (
            <Button onClick={handleDialogClose} color="primary">
              Close
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BroCodePage;
