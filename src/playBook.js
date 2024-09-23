import React, { useState, useEffect } from 'react';
import { 
  AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CardActions, 
  Button, Chip, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, 
  DialogActions, Slide, IconButton, Box, Tooltip
} from '@mui/material';
import Masonry from 'react-masonry-css';
import { 
  SearchRounded, ThumbUpAlt, LocalFireDepartment, EmojiEvents, 
  SentimentVeryDissatisfied, Close
} from '@mui/icons-material';
import { motion } from 'framer-motion'; // Mock data for plays


const plays = [
{
id: 1,
title: "The Lorenzo Von Matterhorn",
description: "Create a fake online identity and wait for your target to Google you.",
category: "Dating",
rating: 4.7,
executionGuide: "1. Create a social media profile with a glamorous photo.\n2. Post intriguing updates.\n3. Drop hints about your mysterious life in conversation.",
potentialRisks: "She might find out the truth and question your trustworthiness."
},
{
id: 2,
title: "The Ted Mosby",
description: "Tell her you love her on the first date. What could go wrong?",
category: "Dating",
rating: 2.1,
executionGuide: "1. Look deep into her eyes.\n2. Declare your love dramatically.\n3. Brace for awkward silence.",
potentialRisks: "She might run for the hills or think you're joking."
},
{
id: 3,
title: "The SNASA",
description: "Claim you work for a secret branch of NASA. Secret NASA.",
category: "Career",
rating: 3.9,
executionGuide: "1. Wear a NASA t-shirt.\n2. Use technical jargon about space.\n3. Mention classified missions casually.",
potentialRisks: "She may ask questions you can't answer or report you to real NASA."
},
{
id: 4,
title: "The Time Traveler",
description: "Convince everyone you're from the future. Bonus points for predicting obvious events.",
category: "Social",
rating: 4.2,
executionGuide: "1. Dress in futuristic clothing.\n2. Make vague predictions.\n3. Act shocked when modern technology fails.",
potentialRisks: "You might get labeled as weird or delusional."
},
{
id: 5,
title: "The Phantom of the Opera",
description: "Wear a mask and haunt an opera house. Singing skills optional.",
category: "Dating",
rating: 3.5,
executionGuide: "1. Purchase a dramatic mask.\n2. Show up at a local opera.\n3. Serenade her from the shadows.",
potentialRisks: "You may scare her away or get kicked out for being too theatrical."
},
{
id: 6,
title: "The Invisible Man",
description: "Disappear from all social events, then claim no one saw you because you're invisible.",
category: "Social",
rating: 3.8,
executionGuide: "1. Ghost all your friends for a week.\n2. When confronted, say you've perfected invisibility.",
potentialRisks: "You could lose friends who think you're ignoring them."
},
{
id: 7,
title: "The Batman",
description: "Tell her your tragic backstory. When she asks what happened, whisper 'I am the night.'",
category: "Dating",
rating: 4.5,
executionGuide: "1. Create a dramatic backstory.\n2. Share it in a deep, serious tone.\n3. Deliver the final line with flair.",
potentialRisks: "She may find your obsession with Batman concerning."
},
{
id: 8,
title: "The Reverse Psychology",
description: "Tell her NOT to fall for you. It'll work. Maybe.",
category: "Dating",
rating: 3.2,
executionGuide: "1. Compliment her.\n2. Say, 'But seriously, don't fall for me.'\n3. Watch her reaction closely.",
potentialRisks: "She might take your advice literally and back off."
},
{
id: 9,
title: "The Fake Proposal",
description: "Stage a fake proposal to get her attention. Just kidding, don't do this.",
category: "Dating",
rating: 1.5,
executionGuide: "1. Get a ring.\n2. Get friends to help.\n3. Propose in a public place for maximum effect.",
potentialRisks: "This can backfire spectacularly and lead to heartbreak."
},
{
id: 10,
title: "The Celebrity Encounter",
description: "Claim you know a celebrity personally and drop their name casually.",
category: "Social",
rating: 3.3,
executionGuide: "1. Find a celebrity with a loose connection to you.\n2. Share stories of your encounters.\n3. Keep a straight face.",
potentialRisks: "She may ask for proof and call you out on a lie."
},
{
id: 11,
title: "The Secret Agent",
description: "Pretend to be a secret agent on a mission. Use spy lingo.",
category: "Social",
rating: 4.0,
executionGuide: "1. Dress in a sleek outfit.\n2. Use code names.\n3. Act mysterious and evasive.",
potentialRisks: "She might think you're weird and not want to talk to you."
},
{
id: 12,
title: "The Awkward Silence",
description: "Use the power of silence to create tension. The longer, the better.",
category: "Dating",
rating: 2.9,
executionGuide: "1. Start a conversation.\n2. Then just stop talking.\n3. Maintain eye contact for maximum awkwardness.",
potentialRisks: "She might feel uncomfortable and leave."
},
{
id: 13,
title: "The Mysterious Stranger",
description: "Show up at her favorite spot, but never talk to her. Be the enigma.",
category: "Dating",
rating: 2.7,
executionGuide: "1. Choose a location she frequents.\n2. Sit nearby and observe.\n3. Maintain a cool demeanor.",
potentialRisks: "You might come off as a creep instead of intriguing."
},
{
id: 14,
title: "The Emotional Support Rock",
description: "Carry around a rock and claim it provides emotional support.",
category: "Social",
rating: 3.0,
executionGuide: "1. Name your rock.\n2. Share its backstory.\n3. Introduce it to people.",
potentialRisks: "People might not take you seriously and laugh."
},
{
id: 15,
title: "The 'I'm Not Like Other Girls' Strategy",
description: "Act like you're different from all the other guys she's met.",
category: "Dating",
rating: 3.1,
executionGuide: "1. Share how unique you are.\n2. Compare yourself to typical guys.\n3. Flatter her with praise.",
potentialRisks: "You might come off as disingenuous."
},
{
id: 16,
title: "The Unpredictable Artist",
description: "Create random art in public places. Claim it's a social experiment.",
category: "Social",
rating: 3.6,
executionGuide: "1. Bring art supplies.\n2. Create something strange in a public area.\n3. Invite reactions from passersby.",
potentialRisks: "You might be seen as a nuisance or get in trouble with authorities."
},
{
id: 17,
title: "The Constantly Confused",
description: "Pretend to be confused about everything. Make her clarify mundane things.",
category: "Social",
rating: 3.4,
executionGuide: "1. Ask lots of questions about simple topics.\n2. Act bewildered by the answers.\n3. Repeat the process.",
potentialRisks: "She may lose patience with you quickly."
},
{
id: 18,
title: "The Food Critic",
description: "Give ridiculous critiques on every dish you eat together. Bonus points for pretentiousness.",
category: "Dating",
rating: 3.0,
executionGuide: "1. Taste the food dramatically.\n2. Make grand statements about flavors.\n3. Reference obscure culinary terms.",
potentialRisks: "She may think you're pretentious or a food snob."
},
{
id: 19,
title: "The Master of Disguise",
description: "Wear a costume and pretend to be someone else for the whole day.",
category: "Social",
rating: 4.3,
executionGuide: "1. Choose a character.\n2. Dress up completely.\n3. Act like the character in all interactions.",
potentialRisks: "You may get strange looks or cause confusion."
},
{
id: 20,
title: "The Overly Honest",
description: "Be brutally honest about everything, even if it's uncomfortable.",
category: "Dating",
rating: 3.2,
executionGuide: "1. Share your thoughts openly.\n2. Encourage her to do the same.\n3. Emphasize your honesty.",
potentialRisks: "She might be put off by your lack of tact."
},
{
id: 21,
title: "The Nostalgic Narrator",
description: "Describe mundane activities like they're epic adventures.",
category: "Social",
rating: 3.8,
executionGuide: "1. Use dramatic language.\n2. Build tension for simple tasks (e.g., grocery shopping).\n3. Emphasize the stakes.",
potentialRisks: "She may find it amusing or irritating."
},
{
id: 22,
title: "The Pet Psychic",
description: "Claim you can communicate with her pets. Make wild predictions based on them.",
category: "Social",
rating: 3.1,
executionGuide: "1. Observe her pets.\n2. Make outrageous claims about their thoughts.\n3. Offer to give them a reading.",
potentialRisks: "She might think you're a fraud or weird."
},
{
id: 23,
title: "The Historical Reenactor",
description: "Act like a character from a different time period during your conversations.",
category: "Dating",
rating: 3.5,
executionGuide: "1. Choose a historical figure.\n2. Dress appropriately.\n3. Speak and act like them during your date.",
potentialRisks: "She may find it amusing or just plain odd."
},
{
id: 24,
title: "The Fashion Faux Pas",
description: "Wear mismatched clothing intentionally and claim it's a new trend.",
category: "Social",
rating: 2.9,
executionGuide: "1. Choose odd combinations of clothing.\n2. Act confident.\n3. Defend your choices vigorously.",
potentialRisks: "You may get mocked instead of admired."
},
{
id: 25,
title: "The Surprise Guest",
description: "Crash her plans with surprise visits, but make them fun.",
category: "Dating",
rating: 4.0,
executionGuide: "1. Show up unannounced with a fun activity planned.\n2. Keep the mood light.\n3. Make it a memorable experience.",
potentialRisks: "She might find it intrusive and not appreciate the surprise."
},
{
id: 26,
title: "The Dream Interpreter",
description: "Analyze her dreams and give absurd interpretations.",
category: "Dating",
rating: 3.6,
executionGuide: "1. Ask her about her dreams.\n2. Provide ridiculous interpretations.\n3. Act serious while doing it.",
potentialRisks: "She might find it amusing or think you're a bit crazy."
},
{
id: 27,
title: "The Overzealous Complimenter",
description: "Compliment her every move dramatically, even mundane actions.",
category: "Dating",
rating: 4.1,
executionGuide: "1. Notice every small thing she does.\n2. Compliment her enthusiastically.\n3. Overdo it for comedic effect.",
potentialRisks: "She may feel overwhelmed or think you're being sarcastic."
},
{
id: 28,
title: "The Invisible Dinner",
description: "Pretend to eat an invisible meal in front of her.",
category: "Social",
rating: 3.0,
executionGuide: "1. Set a table for two.\n2. Serve an imaginary meal.\n3. Discuss the flavors and textures.",
potentialRisks: "She might think you're out of your mind."
},
{
id: 29,
title: "The Conspiracy Theorist",
description: "Develop ridiculous conspiracy theories on the spot.",
category: "Social",
rating: 3.5,
executionGuide: "1. Start with a believable premise.\n2. Add outrageous twists.\n3. Connect it to her interests.",
potentialRisks: "She may find you annoying or overly eccentric."
},
{
id: 30,
title: "The Misunderstood Genius",
description: "Claim you're a misunderstood genius and share your 'revolutionary' ideas.",
category: "Social",
rating: 2.8,
executionGuide: "1. Develop a convoluted idea.\n2. Share it with confidence.\n3. Defend it passionately.",
potentialRisks: "She may not take you seriously."
},
 { 
    id: 31, 
    title: "The Nonchalant Breakup", 
    description: "Pretend you've broken up casually during a date.", 
    category: "Dating", 
    rating: 1.9,
    executionGuide: "1. Bring it up casually.\n2. Act indifferent.\n3. See how she reacts.", 
    potentialRisks: "This could lead to confusion and hurt feelings." 
  },
  { 
    id: 32, 
    title: "The Cliché Machine", 
    description: "Use every dating cliché in the book, one after the other.", 
    category: "Dating", 
    rating: 3.3,
    executionGuide: "1. Prepare a list of clichés.\n2. Incorporate them into your conversation.\n3. Deliver them with enthusiasm.", 
    potentialRisks: "She might find it cheesy and lose interest." 
  },
  { 
    id: 33, 
    title: "The Historical Debate", 
    description: "Engage her in a debate about a fictional historical event.", 
    category: "Social", 
    rating: 3.2,
    executionGuide: "1. Create a fictional event.\n2. Present it as fact.\n3. Invite her to debate its implications.", 
    potentialRisks: "She may find it confusing and disengage." 
  },
  { 
    id: 34, 
    title: "The Overly Dramatic", 
    description: "React to everything with extreme emotions. Bring the drama!", 
    category: "Social", 
    rating: 4.1,
    executionGuide: "1. Use exaggerated facial expressions.\n2. Make grand gestures.\n3. Emphasize every emotion.", 
    potentialRisks: "She might find it entertaining or overly dramatic." 
  },
  { 
    id: 35, 
    title: "The Invisible Friend", 
    description: "Talk about your imaginary friend like they're real.", 
    category: "Social", 
    rating: 3.4,
    executionGuide: "1. Mention your friend in conversation.\n2. Describe their personality.\n3. Involve them in your stories.", 
    potentialRisks: "She may think you're odd or unstable." 
  },
  { 
    id: 36, 
    title: "The Intense Eye Contact", 
    description: "Maintain eye contact for too long. It's a power move.", 
    category: "Dating", 
    rating: 2.6,
    executionGuide: "1. Lock eyes with her during conversations.\n2. Avoid blinking.\n3. Keep a serious expression.", 
    potentialRisks: "She might feel uncomfortable and look away." 
  },
  { 
    id: 37, 
    title: "The Unsung Hero", 
    description: "Claim to be a hero in mundane situations (e.g., saving a dog from a puddle).", 
    category: "Social", 
    rating: 3.0,
    executionGuide: "1. Share your 'heroic' stories.\n2. Make them sound dramatic.\n3. Act humble about your feats.", 
    potentialRisks: "She may find your stories amusing or ridiculous." 
  },
  { 
    id: 38, 
    title: "The Overanalyzer", 
    description: "Overanalyze every little thing she does or says.", 
    category: "Dating", 
    rating: 3.5,
    executionGuide: "1. Break down her comments.\n2. Ask for explanations.\n3. Keep it light and humorous.", 
    potentialRisks: "She may find you annoying or overly critical." 
  },
  { 
    id: 39, 
    title: "The Hyperbolic Storyteller", 
    description: "Tell exaggerated stories about your life. Make them epic!", 
    category: "Social", 
    rating: 3.7,
    executionGuide: "1. Choose a mundane event.\n2. Turn it into an epic tale.\n3. Use dramatic flair.", 
    potentialRisks: "She may call you out for embellishing." 
  },
  { 
    id: 40, 
    title: "The Dramatic Entrance", 
    description: "Make an overly dramatic entrance at her favorite place.", 
    category: "Social", 
    rating: 4.0,
    executionGuide: "1. Arrive with flair.\n2. Announce your arrival loudly.\n3. Strike a pose.", 
    potentialRisks: "You may embarrass her or get attention for the wrong reasons." 
  },
  { 
    id: 41, 
    title: "The Wild Card", 
    description: "Be unpredictable in every interaction. Keep her guessing.", 
    category: "Dating", 
    rating: 3.8,
    executionGuide: "1. Switch up your conversation topics randomly.\n2. Change your plans last minute.\n3. Surprise her with spontaneous activities.", 
    potentialRisks: "She may find it exhausting or disorienting." 
  },
  { 
    id: 42, 
    title: "The Mystery Box", 
    description: "Bring a mystery box to your date. Don't open it until the end.", 
    category: "Dating", 
    rating: 4.1,
    executionGuide: "1. Present the box without revealing its contents.\n2. Build anticipation.\n3. Open it dramatically at the end.", 
    potentialRisks: "The contents may not meet her expectations." 
  },
  { 
    id: 43, 
    title: "The Synchronized Swimmer", 
    description: "Pretend you're a synchronized swimmer while having a conversation.", 
    category: "Social", 
    rating: 2.9,
    executionGuide: "1. Make synchronized gestures.\n2. Talk about your 'training'.\n3. Stay serious throughout.", 
    potentialRisks: "She may think you're a little too quirky." 
  },
  { 
    id: 44, 
    title: "The Accidental Philosopher", 
    description: "Stumble into deep philosophical discussions accidentally.", 
    category: "Social", 
    rating: 3.6,
    executionGuide: "1. Start with a light topic.\n2. Let it spiral into deep questions.\n3. Pretend it was unintentional.", 
    potentialRisks: "She might find it refreshing or overly complicated." 
  },
  { 
    id: 45, 
    title: "The Connoisseur of Bad Jokes", 
    description: "Only tell terrible jokes during your date. Make them cringe-worthy.", 
    category: "Dating", 
    rating: 3.4,
    executionGuide: "1. Prepare a list of bad jokes.\n2. Share them relentlessly.\n3. Laugh at your own jokes.", 
    potentialRisks: "She may not appreciate your humor." 
  },
  { 
    id: 46, 
    title: "The Eccentric Collector", 
    description: "Claim to collect bizarre items. Show them off proudly.", 
    category: "Social", 
    rating: 3.0,
    executionGuide: "1. Bring a strange item to your meeting.\n2. Share its backstory.\n3. Encourage her to appreciate your collection.", 
    potentialRisks: "She may think you're just plain odd." 
  },
  { 
    id: 47, 
    title: "The Sarcastic Encourager", 
    description: "Encourage her with extreme sarcasm. Make it obvious.", 
    category: "Dating", 
    rating: 3.2,
    executionGuide: "1. Use exaggerated praise.\n2. Laugh while doing it.\n3. Maintain a playful tone.", 
    potentialRisks: "She may take it the wrong way and be offended." 
  },
  { 
    id: 48, 
    title: "The Nostalgic Techie", 
    description: "Talk about how much you miss old technology as if it were the best.", 
    category: "Social", 
    rating: 3.1,
    executionGuide: "1. Bring up outdated tech (e.g., flip phones).\n2. Discuss its 'superiority' over new gadgets.\n3. Get passionate about it.", 
    potentialRisks: "She might think you're stuck in the past." 
  },
  { 
    id: 49, 
    title: "The Movie Character", 
    description: "Act like a character from her favorite movie throughout your date.", 
    category: "Dating", 
    rating: 4.0,
    executionGuide: "1. Choose a character she loves.\n2. Immerse yourself in the role.\n3. Reference their quotes and quirks.", 
    potentialRisks: "She may find it cute or annoying." 
  },
  { 
    id: 50, 
    title: "The Artistic Foodie", 
    description: "Create food art during dinner. Draw on your plate with sauces.", 
    category: "Dating", 
    rating: 3.3,
    executionGuide: "1. Bring sauces and condiments.\n2. Arrange your food artistically.\n3. Describe your art in detail.", 
    potentialRisks: "She may find it strange or messy." 
  },
  { 
    id: 51, 
    title: "The Old Soul", 
    description: "Claim to be from an older generation with outdated views.", 
    category: "Social", 
    rating: 2.8,
    executionGuide: "1. Use outdated phrases.\n2. Share your 'wisdom' on relationships.\n3. Act like you know best.", 
    potentialRisks: "She may find you condescending." 
  },
  { 
    id: 52, 
    title: "The Outdated Pickup Artist", 
    description: "Use cheesy pickup lines from decades past.", 
    category: "Dating", 
    rating: 2.5,
    executionGuide: "1. Prepare a list of old pickup lines.\n2. Deliver them earnestly.\n3. Gauge her reaction.", 
    potentialRisks: "She might find them cringeworthy." 
  },
  { 
    id: 53, 
    title: "The Overly Enthusiastic Fan", 
    description: "Be overly excited about her hobbies. Join in a little too much.", 
    category: "Dating", 
    rating: 3.6,
    executionGuide: "1. Show extreme interest in her hobbies.\n2. Ask tons of questions.\n3. Make enthusiastic comments.", 
    potentialRisks: "She may find it insincere." 
  },
  { 
    id: 54, 
    title: "The Time Traveler's Assistant", 
    description: "Claim to be an assistant from the future, explaining your purpose.", 
    category: "Social", 
    rating: 3.9,
    executionGuide: "1. Create a futuristic backstory.\n2. Explain your mission dramatically.\n3. Use tech jargon.", 
    potentialRisks: "She may find it hard to follow or amusing." 
  },
  { 
    id: 55, 
    title: "The Collector of Awkward Moments", 
    description: "Embrace and share your most awkward moments with pride.", 
    category: "Social", 
    rating: 3.0,
    executionGuide: "1. Prepare a list of your awkward stories.\n2. Share them openly.\n3. Laugh at yourself.", 
    potentialRisks: "She may find it endearing or just cringe." 
  },
  { 
    id: 56, 
    title: "The Monologue Master", 
    description: "Deliver dramatic monologues during your conversation.", 
    category: "Dating", 
    rating: 2.6,
    executionGuide: "1. Prepare monologues from plays or movies.\n2. Insert them at random times.\n3. Make them dramatic.", 
    potentialRisks: "She may find it tedious or confusing." 
  },
  { 
    id: 57, 
    title: "The Absurd Theorist", 
    description: "Present outrageous theories about life and love.", 
    category: "Social", 
    rating: 3.4,
    executionGuide: "1. Develop ridiculous theories.\n2. Present them seriously.\n3. Encourage debate.", 
    potentialRisks: "She might find you eccentric." 
  },
  { 
    id: 58, 
    title: "The Clumsy Romantic", 
    description: "Constantly trip and fall in front of her, but make it charming.", 
    category: "Dating", 
    rating: 3.8,
    executionGuide: "1. Act clumsy throughout the date.\n2. Laugh it off.\n3. Make it seem endearing.", 
    potentialRisks: "She may find it amusing or distracting." 
  },
  { 
    id: 59, 
    title: "The Fashion Disaster", 
    description: "Intentionally dress in the worst fashion combination you can think of.", 
    category: "Social", 
    rating: 2.2,
    executionGuide: "1. Pick the most mismatched outfits.\n2. Walk around confidently.\n3. Discuss fashion with a straight face.", 
    potentialRisks: "She may think you lack self-awareness." 
  },
  { 
    id: 60, 
    title: "The Super Sleuth", 
    description: "Make overly dramatic deductions about her based on her appearance.", 
    category: "Dating", 
    rating: 3.5,
    executionGuide: "1. Analyze her outfit.\n2. Make wild assumptions about her personality.\n3. Keep a serious demeanor.", 
    potentialRisks: "She may find it amusing or invasive." 
  },
  { 
    id: 61, 
    title: "The Nature Observer", 
    description: "React to nature as if you're discovering it for the first time.", 
    category: "Social", 
    rating: 3.3,
    executionGuide: "1. Point out common nature elements.\n2. Be overly dramatic about them.\n3. Create an air of wonder.", 
    potentialRisks: "She may find it cute or weird." 
  },
  { 
    id: 62, 
    title: "The Awkward Silence Filler", 
    description: "Fill awkward silences with bizarre comments or stories.", 
    category: "Social", 
    rating: 3.2,
    executionGuide: "1. Prepare bizarre anecdotes.\n2. Insert them during lulls in conversation.\n3. Keep a straight face.", 
    potentialRisks: "She might find you quirky or annoying." 
  },
  { 
    id: 63, 
    title: "The Obscure Reference Enthusiast", 
    description: "Make obscure pop culture references and explain them.", 
    category: "Social", 
    rating: 3.1,
    executionGuide: "1. Drop obscure references during conversation.\n2. Explain their context.\n3. Gauge her reaction.", 
    potentialRisks: "She may find you pretentious." 
  },
  { 
    id: 64, 
    title: "The Dramatic Interpreter", 
    description: "Interpret ordinary conversations in an overly dramatic fashion.", 
    category: "Social", 
    rating: 3.4,
    executionGuide: "1. Use dramatic tones for normal statements.\n2. Exaggerate facial expressions.\n3. Add flair to your gestures.", 
    potentialRisks: "She may find it amusing or over-the-top." 
  },
  { 
    id: 65, 
    title: "The Monotone Voice Actor", 
    description: "Only speak in a monotone voice throughout the interaction.", 
    category: "Social", 
    rating: 2.7,
    executionGuide: "1. Maintain a straight face.\n2. Avoid any inflection in your voice.\n3. Keep the conversation going.", 
    potentialRisks: "She might think you're being rude or disinterested." 
  },
  { 
    id: 66, 
    title: "The Trendsetter", 
    description: "Introduce bizarre trends and act like they're the next big thing.", 
    category: "Social", 
    rating: 3.6,
    executionGuide: "1. Make outrageous claims about your 'trends'.\n2. Show enthusiasm.\n3. Encourage her to join in.", 
    potentialRisks: "She may find you ridiculous or insincere." 
  },
  { 
    id: 67, 
    title: "The Overly Dramatic Text", 
    description: "Send her texts that are way too dramatic for mundane situations.", 
    category: "Dating", 
    rating: 3.9,
    executionGuide: "1. Compose exaggerated texts.\n2. Use dramatic language.\n3. Gauge her reaction.", 
    potentialRisks: "She may find it amusing or annoying." 
  },
  { 
    id: 68, 
    title: "The Animated Storyteller", 
    description: "Tell stories with exaggerated movements and expressions.", 
    category: "Social", 
    rating: 4.1,
    executionGuide: "1. Use big gestures.\n2. Change your voice for different characters.\n3. Engage her with your enthusiasm.", 
    potentialRisks: "She may find it entertaining or over-the-top." 
  },
  { 
    id: 69, 
    title: "The Unintentional Comedian", 
    description: "Make jokes without realizing you're being funny.", 
    category: "Social", 
    rating: 3.5,
    executionGuide: "1. Share your thoughts candidly.\n2. Don't realize when something is funny.\n3. Maintain a serious demeanor.", 
    potentialRisks: "She may find it charming or confusing." 
  },
  { 
    id: 70, 
    title: "The Pop Culture Time Capsule", 
    description: "Speak in references from a specific decade.", 
    category: "Social", 
    rating: 3.0,
    executionGuide: "1. Choose a decade.\n2. Use slang and references from that time.\n3. Explain them if needed.", 
    potentialRisks: "She may find it amusing or annoying." 
  },
  { 
    id: 71, 
    title: "The Faux Philosopher", 
    description: "Offer overly complicated philosophical insights on simple matters.", 
    category: "Social", 
    rating: 2.9,
    executionGuide: "1. Pick a simple topic.\n2. Use complex language.\n3. Sound very serious about it.", 
    potentialRisks: "She may find you pretentious." 
  },
  { 
    id: 72, 
    title: "The Compulsive Smiler", 
    description: "Smile excessively, even during serious discussions.", 
    category: "Social", 
    rating: 3.8,
    executionGuide: "1. Smile at every moment.\n2. Keep it sincere.\n3. Emphasize positivity.", 
    potentialRisks: "She might find it creepy or insincere." 
  },
  { 
    id: 73, 
    title: "The Live Action Meme", 
    description: "Act out popular memes in real life.", 
    category: "Social", 
    rating: 3.6,
    executionGuide: "1. Choose a meme.\n2. Act it out dramatically.\n3. Explain its significance.", 
    potentialRisks: "She may find it amusing or cringeworthy." 
  },
  { 
    id: 74, 
    title: "The Comedic Critic", 
    description: "Critique movies or shows using only funny terms.", 
    category: "Social", 
    rating: 3.2,
    executionGuide: "1. Prepare funny terms.\n2. Use them in critiques.\n3. Keep it lighthearted.", 
    potentialRisks: "She may find it entertaining or annoying." 
  },
  { 
    id: 75, 
    title: "The Over-the-Top Apologizer", 
    description: "Apologize excessively for minor inconveniences.", 
    category: "Social", 
    rating: 3.7,
    executionGuide: "1. Make a big deal out of small apologies.\n2. Use dramatic language.\n3. Keep a serious tone.", 
    potentialRisks: "She might find it charming or annoying." 
  },
  { 
    id: 76, 
    title: "The Self-Proclaimed Expert", 
    description: "Claim to be an expert in something absurd and explain it confidently.", 
    category: "Social", 
    rating: 3.3,
    executionGuide: "1. Choose a ridiculous topic.\n2. Share your 'expertise'.\n3. Use jargon.", 
    potentialRisks: "She may find you eccentric or amusing." 
  },
  { 
    id: 77, 
    title: "The Social Media Analyst", 
    description: "Critique social media trends dramatically.", 
    category: "Social", 
    rating: 3.2,
    executionGuide: "1. Choose a trend to analyze.\n2. Use exaggerated language.\n3. Get her involved in the critique.", 
    potentialRisks: "She may find it entertaining or over-the-top." 
  },
  { 
    id: 78, 
    title: "The Fashion Historian", 
    description: "Discuss fashion trends from past decades as if they're current.", 
    category: "Social", 
    rating: 3.4,
    executionGuide: "1. Research past trends.\n2. Bring them up enthusiastically.\n3. Make comparisons to current styles.", 
    potentialRisks: "She may find you nostalgic or silly." 
  },
  { 
    id: 79, 
    title: "The Mystery Dinner Host", 
    description: "Host a dinner with an undisclosed theme and let her guess.", 
    category: "Dating", 
    rating: 4.2,
    executionGuide: "1. Plan a dinner without revealing the theme.\n2. Give hints.\n3. Let her guess throughout the meal.", 
    potentialRisks: "She may find it frustrating or fun." 
  },
  { 
    id: 80, 
    title: "The Compliment Sandwich", 
    description: "Give compliments in a weird format, like a sandwich.", 
    category: "Dating", 
    rating: 3.0,
    executionGuide: "1. Prepare compliments.\n2. Use them in an unusual order.\n3. Explain your method.", 
    potentialRisks: "She may find it odd or endearing." 
  }
]

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const playCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.5 }
  })
};

const PlayCard = ({ play, onOpen, index }) => (
  <motion.div
    custom={index}
    initial="hidden"
    animate="visible"
    variants={playCardVariants}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Card 
      sx={{ 
        height: '100%', display: 'flex', flexDirection: 'column', 
        bgcolor: '#1A1A1A', color: '#FFD700', border: '1px solid #FFD700',
        boxShadow: '0 0 15px #FFD700', borderRadius: '12px'
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
          {play.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'grey.400', fontStyle: 'italic' }}>
          {play.description}
        </Typography>
        <Box mt={2}>
          <Chip label={play.category} color="primary" size="small" sx={{ bgcolor: '#FFD700', color: '#121212', fontWeight: 'bold' }} />
          <Chip 
            icon={<LocalFireDepartment />} 
            label={`${play.rating}/5`} 
            color="secondary" 
            size="small" 
            sx={{ ml: 1, bgcolor: 'black', color: 'orange' }}
          />
        </Box>
      </CardContent>
      <CardActions>
        <Tooltip title="Become Legendary!" arrow>
          <Button size="small" onClick={() => onOpen(play)} sx={{ color: 'yellow', fontWeight: 'bold', fontSize: '0.85rem' }}>
            Study This Masterpiece
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  </motion.div>
);

const PlayDetail = ({ play, open, onClose }) => (
  <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={onClose}
    aria-describedby="play-description"
  >
    <DialogTitle sx={{ bgcolor: '#1A1A1A', color: '#FFD700' }}>
      {play.title}
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: '#FFD700',
        }}
      >
        <Close />
      </IconButton>
    </DialogTitle>
    <DialogContent sx={{ bgcolor: '#1A1A1A', color: 'white' }}>
      <DialogContentText id="play-description" sx={{ color: 'grey.400' }}>
        {play.description}
      </DialogContentText>
      <Typography variant="h6" sx={{ mt: 2, color: '#FFD700' }}>Execution Guide:</Typography>
      <Typography variant="body2" sx={{ color: 'grey.400', whiteSpace: 'pre-wrap' }}>
        {play.executionGuide}
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, color: '#FFD700' }}>Potential Risks:</Typography>
      <Typography variant="body2" sx={{ color: 'grey.400' }}>
        {play.potentialRisks}
      </Typography>
    </DialogContent>
    <DialogActions sx={{ bgcolor: '#1A1A1A' }}>
      <Button onClick={onClose} sx={{ color: '#FFD700', fontWeight: 'bold' }}>Close</Button>
      <Button onClick={onClose} startIcon={<ThumbUpAlt />} sx={{ color: '#FFD700', fontWeight: 'bold' }}>
        This Is Legendary
      </Button>
    </DialogActions>
  </Dialog>
);

const PlaybookPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlay, setSelectedPlay] = useState(null);
  const [filteredPlays, setFilteredPlays] = useState([]);
  const [tag, setTag] = useState('');

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  useEffect(() => {
    const filtered = plays.filter(play => {
      const matchesSearch = play.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            play.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = tag ? play.category === tag : true;

      return matchesSearch && matchesTag;
    });

    setFilteredPlays(filtered);
  }, [searchTerm, tag, plays]);

  const handleChipClick = (tag) => {
    setTag((prev) => (prev === tag ? '' : tag));
  };

  return (
    <Container maxWidth="xl" sx={{  bgcolor: '#121212', borderRadius: '8px', p: 2 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <EmojiEvents sx={{ mr: 2, color: '#FFD700' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#FFD700', fontWeight: 'bold', fontSize: '1.5rem' }}>
            The Legendary Playbook
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search legendary plays..."
            className='text-yellow-600'
            InputProps={{
              startAdornment: <SearchRounded className='text-yellow-600' sx={{ color: '#FFD700', mr: 1 }} />,
            }}
            sx={{ 
              input: { color: '#FFD700' }, 
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#FFD700' },
                '&:hover fieldset': { borderColor: '#FFD700' },
                '&.Mui-focused fieldset': { borderColor: '#FFD700' },
              }
            }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Toolbar>
      </AppBar>

      <div className="mb-4 flex gap-2">
        <Chip
          label='Dating'
          clickable
          onClick={() => handleChipClick('Dating')}
          color={tag === 'Dating' ? 'success' : 'warning'}
        />
        <Chip
          label='Social'
          clickable
          onClick={() => handleChipClick('Social')}
          color={tag === 'Social' ?  'success' : 'warning'}
        />
      </div>

      <span className="mt-2">
        {filteredPlays.length > 0 ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto -ml-4"
            columnClassName="pl-4 bg-clip-padding"
          >
            {filteredPlays.map((play, index) => (
              <div key={play.id} className="mb-4">
                <PlayCard play={play} onOpen={setSelectedPlay} index={index} />
              </div>
            ))}
          </Masonry>
        ) : (
          <Typography variant="h5" sx={{ textAlign: 'center', color: '#FFD700', mt: 4 }}>
            <SentimentVeryDissatisfied sx={{ fontSize: 60, color: '#FFD700' }} />
            <br />
            No legendary plays found. Time to invent a new one!
          </Typography>
        )}
      </span>

      {selectedPlay && (
        <PlayDetail play={selectedPlay} open={Boolean(selectedPlay)} onClose={() => setSelectedPlay(null)} />
      )}
    </Container>
  );
};

export default PlaybookPage;
