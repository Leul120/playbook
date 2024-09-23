import React, { useState } from 'react';
import { Typography, Button, Radio, RadioGroup, FormControlLabel, Container, Paper, Box, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { EmojiEvents, SentimentVeryDissatisfied, SentimentSatisfied, SentimentVerySatisfied } from '@mui/icons-material';
import Confetti from 'react-confetti';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#222222',
  color: '#FFD700',
  padding: '20px',
  marginTop: '20px',
  borderRadius: '12px',
  boxShadow: '0 0 10px #FFD700',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFD700',
  color: '#222222',
  '&:hover': {
    backgroundColor: '#FFA500',
  },
  '&:disabled': {
    backgroundColor: '#665500',
    color: '#444444',
  },
}));

const StyledRadio = styled(Radio)(({ theme }) => ({
  color: '#FFD700',
  '&.Mui-checked': {
    color: '#FFA500',
  },
}));

const quizData = [
  {
    question: "The karaoke machine breaks. You:",
    options: [
      { text: "Hide under a table", points: 1 },
      { text: "Beatbox poorly", points: 2 },
      { text: "Start a cappella rendition of 'Bohemian Rhapsody'", points: 3 }
    ]
  },
  {
    question: "You're offered a mystery drink. Do you:",
    options: [
      { text: "Politely decline", points: 1 },
      { text: "Sniff it suspiciously before sipping", points: 2 },
      { text: "Chug it and yell 'YOLO!'", points: 3 }
    ]
  },
  {
    question: "Dance floor's empty. Your move?",
    options: [
      { text: "Stay glued to the wall", points: 1 },
      { text: "Awkwardly sway near the edge", points: 2 },
      { text: "Break out the Macarena and own it", points: 3 }
    ]
  },
  {
    question: "Someone tells a bad joke. Your reaction?",
    options: [
      { text: "Smile politely and excuse yourself", points: 1 },
      { text: "Offer a sympathy laugh", points: 2 },
      { text: "One-up them with an even worse joke", points: 3 }
    ]
  },
  {
    question: "The host asks for help in the kitchen. You:",
    options: [
      { text: "Pretend you didn't hear and keep mingling", points: 1 },
      { text: "Reluctantly volunteer", points: 2 },
      { text: "Turn it into a cooking show performance", points: 3 }
    ]
  },
  {
    question: "You spill wine on your shirt. What's your cover-up strategy?",
    options: [
      { text: "Hide in the bathroom for the rest of the night", points: 1 },
      { text: "Casually drape a napkin over it", points: 2 },
      { text: "Spill more to create an avant-garde pattern", points: 3 }
    ]
  },
  {
    question: "Time for party games. You choose:",
    options: [
      { text: "Solitaire in the corner", points: 1 },
      { text: "Charades, but only easy words", points: 2 },
      { text: "Strip poker (with a twister mat)", points: 3 }
    ]
  },
  {
    question: "The cops show up due to noise complaints. You:",
    options: [
      { text: "Sneak out the back door", points: 1 },
      { text: "Turn down the music and act casual", points: 2 },
      { text: "Try to recruit them for a dance-off", points: 3 }
    ]
  },
  {
    question: "It's time for a group photo. Your pose?",
    options: [
      { text: "Hide behind the tallest person", points: 1 },
      { text: "Smile awkwardly", points: 2 },
      { text: "Photobomb with a spectacular leap", points: 3 }
    ]
  },
  {
    question: "Someone suggests body shots. You:",
    options: [
      { text: "Suddenly remember you're late for something", points: 1 },
      { text: "Volunteer to be the salt-holder", points: 2 },
      { text: "Declare yourself the 'body shot champion' and challenge all comers", points: 3 }
    ]
  },
  {
    question: "The playlist switches to country music. Your reaction?",
    options: [
      { text: "Grimace and bear it", points: 1 },
      { text: "Do an awkward two-step", points: 2 },
      { text: "Go full cowboy/cowgirl with an impromptu lasso routine", points: 3 }
    ]
  },
  {
    question: "You find a lampshade. What do you do with it?",
    options: [
      { text: "Put it back where you found it", points: 1 },
      { text: "Wear it as a hat... briefly", points: 2 },
      { text: "Start a new fashion trend – 'Lampshade Chic'", points: 3 }
    ]
  },
  {
    question: "It's 3 AM and someone suggests skinny dipping. You:",
    options: [
      { text: "Claim you forgot your swimsuit... at home", points: 1 },
      { text: "Wade in up to your knees, fully clothed", points: 2 },
      { text: "Cannonball in while yelling 'GERONIMO!'", points: 3 }
    ]
  }
];

// ... rest of the component code ...

const PartyPersonalityQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    const points = parseInt(selectedOption);
    setScore(score + points);
    setSelectedOption('');

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      if (score + points >= 7) setShowConfetti(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption('');
    setShowConfetti(false);
  };

  const getResult = () => {
    if (score <= 5) return { title: "Wallflower Extraordinaire", icon: SentimentVeryDissatisfied, description: "You're so low-key, people might mistake you for furniture!" };
    if (score <= 7) return { title: "Social Butterfly in Training", icon: SentimentSatisfied, description: "You're halfway between a hermit crab and a peacock. Keep spreading those wings!" };
    return { title: "Life of the Party!", icon: SentimentVerySatisfied, description: "You don't just attend parties, you ARE the party! Celebrities call YOU for advice." };
  };

  const result = getResult();

  return (
    <Container maxWidth="2xl" sx={{ bgcolor: '#181818', minHeight: '100vh', paddingY: 4 }}>
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}
      <StyledPaper elevation={3}>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <EmojiEvents sx={{ color: '#FFD700', marginRight: 2, fontSize: 40 }} />
          <Typography variant="h4" gutterBottom>
            Party Personality Quiz
          </Typography>
        </Box>
        
        {!showResult ? (
          <>
            <Typography variant="h6" gutterBottom>
              {quizData[currentQuestion].question}
            </Typography>
            
            <RadioGroup value={selectedOption} onChange={handleOptionChange}>
              {quizData[currentQuestion].options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option.points.toString()}
                  control={<StyledRadio />}
                  label={option.text}
                />
              ))}
            </RadioGroup>
            
            <StyledButton
              variant="contained"
              onClick={handleNextQuestion}
              disabled={!selectedOption}
              sx={{ marginTop: 2 }}
            >
              {currentQuestion === quizData.length - 1 ? 'Reveal My Party Persona!' : 'Next Hilarious Scenario'}
            </StyledButton>

            <Box sx={{ marginTop: 2 }}>
              <LinearProgress 
                variant="determinate" 
                value={(currentQuestion + 1) / quizData.length * 100} 
                sx={{ 
                  backgroundColor: '#665500',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#FFD700'
                  }
                }}
              />
              <Typography variant="caption" sx={{ color: '#FFD700' }}>
                Question {currentQuestion + 1} / {quizData.length}
              </Typography>
            </Box>
          </>
        ) : (
          <Box textAlign="center">
            <Typography variant="h5" gutterBottom>
              Your Party Persona: {result.title}
            </Typography>
            {React.createElement(result.icon, { sx: { fontSize: 60, color: '#FFD700' } })}
            <Typography variant="body1" gutterBottom sx={{ marginTop: 2 }}>
              {result.description}
            </Typography>
            <Typography variant="body2" gutterBottom>
              You scored {score} out of {quizData.length * 3} points!
            </Typography>
            <StyledButton
              variant="contained"
              onClick={restartQuiz}
              sx={{ marginTop: 2 }}
            >
              Retake Quiz (After You Recover From This Party)
            </StyledButton>
          </Box>
        )}
      </StyledPaper>
    </Container>
  );
};

export default PartyPersonalityQuiz;