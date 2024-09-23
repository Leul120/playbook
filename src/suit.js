import React, { useState } from 'react';
import { Grid, Card, CardHeader, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { IoIosClose } from "react-icons/io";
const fashionTips = [
  {
    title: "The Power of a Well-Fitted Suit",
    advice: "A suit that fits well can make you look like you own a Fortune 500 company!",
  },
  {
    title: "Choosing the Right Tie",
    advice: "Wearing a tie? You're instantly 200% cooler. But don’t choose a tie that clashes with your date's outfit!",
  },
  {
    title: "The Magic of Tailoring",
    advice: "Off-the-rack doesn't have to mean off-the-mark. A good tailor can turn any suit into a second skin.",
  },
  {
    title: "Shoes Make the Man",
    advice: "Scuffed shoes? No way. A polished pair of Oxfords says you mean business—fashion business.",
  },
  {
    title: "Belt and Shoes Match, Always",
    advice: "Matching your belt with your shoes is like matching your swagger with your confidence: crucial.",
  },
  {
    title: "Cufflinks: The Silent Statement",
    advice: "Cufflinks are like the cherry on top of your style sundae. Subtle, but people notice.",
  },
  {
    title: "Slim Ties for Slim Guys",
    advice: "If you're rocking a slim figure, opt for a slimmer tie. Proportion is everything.",
  },
  {
    title: "The Three-Piece Masterpiece",
    advice: "If you want to up your game, go three-piece. The vest adds class like nothing else.",
  },
  {
    title: "Dress Watches: A Gentleman’s Staple",
    advice: "A simple, elegant watch is the difference between 'nice suit' and 'whoa, who is that guy?'",
  },
  {
    title: "Avoid Overstuffing Your Pockets",
    advice: "Bulky pockets ruin the clean lines of a suit. Keep it minimal—wallet, phone, and you're good.",
  },
  {
    title: "Master the Half-Windsor Knot",
    advice: "The Half-Windsor is the sweet spot of tie knots: not too flashy, but just the right level of sophistication.",
  },
  {
    title: "Say No to Wrinkles",
    advice: "Invest in a steamer. Wrinkles can take you from 'dapper' to 'disaster' faster than you can say 'ironing board.'",
  },
  {
    title: "Pocket Squares: The Finishing Touch",
    advice: "A pocket square is like adding a little flair to your ensemble. But keep it simple—no peacocking.",
  },
  {
    title: "The Color Combo Conundrum",
    advice: "Never wear more than three colors at once. Too many shades will make you look like a paint palette.",
  },
  {
    title: "Stay Away from Novelty Ties",
    advice: "Sure, a tie with dancing penguins is fun, but not for the boardroom—or any room, really.",
  },
  {
    title: "Dark Colors Are Your Friend",
    advice: "If you're unsure, go for darker tones. They're slimming and always look sharp.",
  },
  {
    title: "Avoid Short Pants",
    advice: "Your suit pants should never be so short that your socks steal the show. You’re not trying to start a sock revolution.",
  },
  {
    title: "Monochrome Magic",
    advice: "A monochrome suit can be incredibly powerful—just make sure the textures vary so it doesn’t look like a uniform.",
  },
  {
    title: "Layer Smartly in the Cold",
    advice: "Layering isn't just practical—it's stylish. A vest or a sweater under your jacket can add both warmth and flair.",
  },
  {
    title: "Check the Shoulders",
    advice: "Your suit jacket should fit snugly at the shoulders. If it doesn't, nothing else will look right.",
  },
  {
    title: "Avoid Shiny Fabrics",
    advice: "Unless you're James Bond, skip the high-gloss suits. They're more Vegas nightclub than sophisticated style.",
  },
  {
    title: "Don’t Forget the Cologne",
    advice: "A light spritz of cologne adds that extra polish to your look, but remember: less is more.",
  },
  {
    title: "Pinstripe Perfection",
    advice: "Pinstripes elongate your frame and add a dash of power to your look. Just don't go too wide with the stripes.",
  },
  {
    title: "Mind the Button Rules",
    advice: "When wearing a two-button suit, remember: top button fastened, bottom button unbuttoned. It’s suit law.",
  },
  {
    title: "White Shirts for the Win",
    advice: "When in doubt, go with a crisp white dress shirt. It goes with everything and always looks fresh.",
  },
  {
    title: "Suit Up, Even When You Don’t Need To",
    advice: "Sometimes the best reason to wear a suit is that you don’t have to. People will wonder what you're celebrating.",
  },
  {
    title: "The Black Suit Dilemma",
    advice: "Black suits are for funerals or secret agents. Opt for navy or charcoal for everyday elegance.",
  },
  {
    title: "Keep Accessories Minimal",
    advice: "A flashy watch, pocket square, cufflinks, and tie bar can easily make you look overdone. Choose one or two, max.",
  },
  {
    title: "The Double-Breasted Look",
    advice: "The double-breasted suit is a power move. Just make sure you can pull it off without looking like a 90s mobster.",
  },
];


const SuitUpTipsPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [newTip, setNewTip] = useState({ title: '', advice: '' });

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setNewTip({ title: '', advice: '' }); // Reset input fields
  };

  const handleSubmitTip = () => {
    // Here you can handle the submission logic (e.g., updating state or sending to a backend)
    console.log("Submitted Tip:", newTip);
    handleDialogClose();
  };

  return (
    <div className='p-5 bg-gray-800 min-h-screen'>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <Typography variant="h1" sx={{ fontSize: '3rem', fontWeight: 'bold', color: '#FFD700' }}>
          Suit Up Tips
        </Typography>
        <Typography variant="h5" sx={{ color: '#fdd835' }}>
          Because looking good is the first step to being legendary!
        </Typography>
      </motion.header>

      <Grid container spacing={4} justifyContent="center">
        {fashionTips.map((tip, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card sx={{ backgroundColor: '#333', borderColor: '#fdd835', borderWidth: '2px', borderStyle: 'solid', marginBottom: '1rem' }}>
                <CardHeader
                  title={<Typography variant="h6" sx={{ color: '#fdd835' }}>{tip.title}</Typography>}
                />
                <CardContent>
                  <Typography className='text-slate-400'>{tip.advice}</Typography>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                    <FaCheckCircle style={{ cursor: 'pointer', color: '#FFD700' }} />
                    <FaTimesCircle style={{ cursor: 'pointer', color: '#FFD700' }} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Button variant="outlined" sx={{ borderColor: '#fdd835', color: '#fdd835' }} onClick={handleDialogOpen}>
          Submit Your Style Tip!
        </Button>
      </div>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle sx={{ bgcolor: '#333', color: '#FFD700' }}>
          Submit Your Style Tip
          <IconButton aria-label="close" onClick={handleDialogClose} sx={{ position: 'absolute', right: 8, top: 8, color: '#FFD700' }}>
            <IoIosClose />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ bgcolor: '#121212', color: 'white' }}>
          <TextField
            autoFocus
            margin="dense"
            label="Tip Title"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ bgcolor: '#333', color: 'white' }}
            onChange={(e) => setNewTip({ ...newTip, title: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Your Advice"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            sx={{ bgcolor: '#333', color: 'white', marginTop: '1rem' }}
            onChange={(e) => setNewTip({ ...newTip, advice: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} sx={{ color: '#FFD700' }}>
            Cancel
          </Button>
          <Button onClick={handleSubmitTip} sx={{ color: '#FFD700' }}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SuitUpTipsPage;

