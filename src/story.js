import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Grid, Card, CardContent, CardActions, Button, Chip, Dialog, DialogTitle, DialogContent, DialogActions, Slide, TextField } from '@mui/material';
import Masonry from 'react-masonry-css';
import { ThumbUpAlt, SentimentVeryDissatisfied, EmojiEvents } from '@mui/icons-material';
import { motion } from 'framer-motion';

const stories = [
  { 
    id: 1, 
    title: "Epic Night at the Bar", 
    content: "What started as a quiet night at the bar ended with me leading a conga line of strangers through the streets. At some point, someone handed me a goat, which I named Barry. We made it home, only to wake up and realize Barry was now in my living room. Still no idea where he came from or what happened to him after that.", 
    tags: ["Epic Nights"], 
    likes: 12 
  },
  { 
    id: 2, 
    title: "The Prank that Went Too Far", 
    content: "It all started with filling my friend's car with balloons. Harmless, right? Turns out he was rushing to a meeting and couldn’t even open his door without a sea of balloons flying out. The best part? I didn’t stop at his car. I filled his entire office with balloons. It took him two hours to find his desk. Still waiting for the revenge plot.", 
    tags: ["Pranks"], 
    likes: 8 
  },

  { 
    id: 3, 
    title: "The Elevator Escape", 
    content: "I got stuck in an elevator with a guy I had just met. We were in there for two hours, so naturally, we started making up stories about our fake lives. By the end, we had planned our entire wedding, from the venue to the cake flavor. Then, the doors opened, and we went our separate ways. I still wonder if he tells people the story of our fake marriage.", 
    tags: ["Unexpected", "Close Calls"], 
    likes: 14 
  },
  { 
    id: 4, 
    title: "The Impromptu Taxi Adventure", 
    content: "After a long night out, I jumped into a taxi and gave the driver my address. 10 minutes later, we were crossing a bridge I had never seen before. Turns out, I got in the wrong taxi heading to a completely different city! We had to stop at a gas station for directions. In the end, the driver and I got dinner together in some random town before I finally got home.", 
    tags: ["Epic Nights", "Unexpected"], 
    likes: 21 
  },
  { 
    id: 5, 
    title: "The Bar Bet Gone Wrong", 
    content: "It started with a simple bet: 'I bet you can't eat five hot wings without water.' Easy, right? I was wrong. The wings were so spicy that I ended up dunking my entire head into the bar’s ice bucket. People were cheering, and I had an audience. The bartender took a picture and put it on the wall. Now I’m a legend… and also banned from the wing challenge.", 
    tags: ["Epic Nights", "Funny"], 
    likes: 33 
  },
  { 
    id: 6, 
    title: "The Costume Party Catastrophe", 
    content: "I showed up to what I thought was a costume party dressed as a giant banana. Turns out, it was a black-tie event. Instead of leaving, I owned it. Took pictures with everyone, pretended it was intentional, and even got awarded 'Best Dressed' by the host. Somewhere out there is a photo of me in a banana suit, holding a martini next to people in tuxedos.", 
    tags: ["Pranks", "Funny"], 
    likes: 45 
  },
  { 
    id: 7, 
    title: "The Spontaneous Road Trip", 
    content: "One Friday afternoon, a friend texted, 'Wanna go on an adventure?' Within two hours, we were in a car heading 300 miles away with no destination in mind. We ended up in a tiny town, made friends with the locals, and slept in the car. We woke up to chickens surrounding the car. To this day, I still don't know the name of that town.", 
    tags: ["Epic Nights", "Adventure"], 
    likes: 29 
  },
  { 
    id: 8, 
    title: "The Accidental Proposal", 
    content: "I was at a restaurant trying to impress a date, and the waiter brought out a dessert with a ring on top. It was meant for the table next to us, but I thought it was for me. I panicked, got down on one knee, and proposed. My date said 'yes,' even though we had only been out three times. The waiter finally came over and explained the mistake... awkward silence.", 
    tags: ["Funny", "Close Calls"], 
    likes: 50 
  },
  { 
    id: 9, 
    title: "The Wrong Wedding", 
    content: "I went to a wedding and didn't know a single person. After the ceremony, I realized I was in the wrong venue the whole time! I ended up making friends with the bride’s side of the family, who thought I was a distant cousin. I danced, gave a toast, and even caught the bouquet. The next day, I crashed the 'right' wedding, and no one knew what happened.", 
    tags: ["Unexpected", "Epic Nights"], 
    likes: 67 
  },
  { 
    id: 10, 
    title: "The Ultimate Pizza Scam", 
    content: "My friend bet that I couldn’t get a free pizza from any restaurant. Challenge accepted. I went to a pizzeria and told them it was my 'anniversary.' The manager, moved by my emotional (and completely fake) story, handed me a large pizza with extra cheese on the house. My friend couldn’t believe it, and neither could I. We’ve tried it twice more... still works.", 
    tags: ["Pranks", "Funny"], 
    likes: 34 
  },
  {
    id: 11,
    title: "Lost at a Concert",
    content: "At a music festival, I lost my friends and my phone died. I ended up hanging out with a random group who adopted me for the night. We danced to music I had never heard of, and by the end of the night, they were calling me 'Steve' even though my name is Ben. I found my friends the next morning, but I’ll always wonder where Steve is now.",
    tags: ["Epic Nights", "Funny"],
    likes: 22
  },
  {
    id: 12,
    title: "The Grocery Store Flash Mob",
    content: "It started with a simple song on the grocery store speakers. Next thing I knew, people were singing along, and someone in aisle 3 was doing the moonwalk. I joined in, obviously. We had a full-blown flash mob in the produce section, and no one knew why. The store manager was confused, but no one stopped us. Legendary Tuesday night.",
    tags: ["Funny", "Unexpected"],
    likes: 27
  },
  {
    id: 13,
    title: "The Accidental Break-In",
    content: "I accidentally walked into the wrong apartment after a long day of work. The door was unlocked, and I didn’t realize it wasn’t mine until I saw a cat (I don’t have a cat). I panicked and tried to leave, but the neighbors saw me and called the cops. Had to explain to the police that I wasn’t a burglar, just an exhausted idiot. They didn’t believe me until I showed my ID.",
    tags: ["Close Calls", "Funny"],
    likes: 40
  },
  {
    id: 14,
    title: "The Taco Truck Challenge",
    content: "A friend dared me to eat from every taco truck on the street in under an hour. I accepted. Halfway through, I started regretting my life choices, but I pushed through. By the time I reached the last truck, I was in a food coma. The street vendor gave me a free drink for my 'heroic effort.' I couldn’t move for two hours after, but I’ll always be Taco King.",
    tags: ["Epic Nights", "Funny"],
    likes: 31
  },
  {
    id: 15,
    title: "The Time I Became a Tour Guide",
    content: "I was mistaken for a tour guide while visiting a museum, and instead of correcting the group, I went with it. I made up facts about every exhibit, and by the end of the tour, the group was asking me about 'future tours.' To this day, I wonder if anyone realized that everything I said was completely made up. I should start my own tour company.",
    tags: ["Pranks", "Funny"],
    likes: 35
  },{ 
    id: 16, 
    title: "The Mysterious Pool Float", 
    content: "One morning, I woke up to find a giant inflatable unicorn float in my pool. I live alone. My neighbors claim they didn’t do it, but the mystery remains. Now I just leave it there, and it’s become the neighborhood mascot. Sometimes I wake up to find snacks or notes on the unicorn, like it’s a mythical being offering wisdom.", 
    tags: ["Epic Nights", "Funny"], 
    likes: 24 
  },
  { 
    id: 17, 
    title: "The Speed Dating Debacle", 
    content: "I went to a speed dating event just for fun. Halfway through, I accidentally spilled my drink on the host, and instead of stopping the event, they made me co-host. I ended up running the whole night, announcing dates, and giving out relationship advice. People still ask me if I’m available for weddings now.", 
    tags: ["Funny", "Unexpected"], 
    likes: 37 
  },
  { 
    id: 18, 
    title: "The Bubble Wrap Office War", 
    content: "My coworker and I started a bubble wrap war. It began with a small piece under her desk, but escalated into an office-wide prank. By the end of the week, her entire cubicle was wrapped in bubble wrap, including her chair, keyboard, and phone. We couldn’t stop laughing, and the sound of popping bubbles lasted all day.", 
    tags: ["Pranks", "Funny"], 
    likes: 18 
  },
  { 
    id: 19, 
    title: "The Karaoke King", 
    content: "During a trip to Japan, I was challenged to sing karaoke. I’m terrible at singing, but after a few drinks, I went all in with 'Bohemian Rhapsody.' By the time I finished, the entire bar was cheering and calling me 'Karaoke King.' They even brought me a crown made of napkins. It’s the highlight of my musical career.", 
    tags: ["Epic Nights", "Funny"], 
    likes: 41 
  },
  { 
    id: 20, 
    title: "The Pizza Delivery Plot Twist", 
    content: "I ordered pizza during a movie marathon with friends. When the delivery guy arrived, he joined us for a slice, then stayed for the whole movie. We all agreed to invite him to our next movie night. Now, we don’t just order pizza — we invite our delivery guy to hang out. He’s practically part of the group.", 
    tags: ["Unexpected", "Funny"], 
    likes: 29 
  },
  { 
    id: 21, 
    title: "The Surprise Wedding Crasher", 
    content: "I accidentally crashed a wedding thinking it was a casual backyard BBQ. The bride invited me to stay, and by the end of the night, I was dancing with the groom's grandma and singing with the band. The next day, I got invited to their family reunion. I still send them Christmas cards, even though I never figured out whose wedding it was.", 
    tags: ["Epic Nights", "Close Calls"], 
    likes: 46 
  },
  { 
    id: 22, 
    title: "The Treadmill Triumph", 
    content: "At the gym, I was trying to impress someone by running on the treadmill. I increased the speed, but misjudged it and was flung backward into a row of yoga mats. Everyone stared, but I stood up, bowed, and said, 'That’s how you dismount in style.' Surprisingly, I got a round of applause.", 
    tags: ["Funny", "Close Calls"], 
    likes: 33 
  },
  { 
    id: 23, 
    title: "The Accidental Protest Leader", 
    content: "I joined what I thought was a parade. Turns out, it was a protest, and somehow I ended up at the front with a megaphone. I had no idea what we were protesting, but I yelled random motivational quotes like, 'Believe in yourselves!' People cheered. It took me 20 minutes to figure out I was in the wrong place, but by then, I was leading the charge.", 
    tags: ["Unexpected", "Funny"], 
    likes: 52 
  },
  { 
    id: 24, 
    title: "The Airline Upgrade Heist", 
    content: "I accidentally sat in first class on a flight, thinking it was my seat. The flight attendant didn’t say anything, so I stayed quiet and enjoyed free champagne the entire trip. By the end, I had made friends with the crew and got invited to the cockpit for a tour. I’ll never fly coach again.", 
    tags: ["Funny", "Close Calls"], 
    likes: 39 
  },
  { 
    id: 25, 
    title: "The Great Escape Room Disaster", 
    content: "I went to an escape room with friends, and we were supposed to solve puzzles to get out. Instead, I accidentally broke the door handle, trapping us inside. After 30 minutes, the staff had to come in and physically remove the door. We didn’t solve a single puzzle, but we did make it onto the ‘Wall of Shame.’", 
    tags: ["Pranks", "Funny"], 
    likes: 24 
  },
  { 
    id: 26, 
    title: "The Fake Celebrity Encounter", 
    content: "A stranger approached me at a bar, convinced I was a famous YouTuber. I tried to explain, but they insisted on buying me drinks and getting an autograph. I played along, and by the end of the night, I was giving a fake ‘motivational speech’ to the whole bar. No one questioned it, and now there’s a group of people who think I’m an internet sensation.", 
    tags: ["Unexpected", "Funny"], 
    likes: 44 
  },
  { 
    id: 27, 
    title: "The Wrong Number Adventure", 
    content: "I accidentally texted the wrong number, and instead of it being awkward, we started having the most ridiculous conversation about dinosaurs. After a few weeks, we started making up fake business plans. Now we have a running joke about opening a dinosaur-themed bakery. We still text, even though we’ve never met in person.", 
    tags: ["Funny", "Unexpected"], 
    likes: 30 
  },
  { 
    id: 28, 
    title: "The Night I Became a DJ", 
    content: "At a house party, the DJ left abruptly, and someone needed to fill in. I had no experience, but I stepped up, grabbed the laptop, and played whatever songs I could find. People actually started dancing, and by the end of the night, they were chanting my name. Now, I get asked to ‘DJ’ every party. Still have no idea what I’m doing.", 
    tags: ["Epic Nights", "Funny"], 
    likes: 42 
  },
  { 
    id: 29, 
    title: "The Beach Proposal Mix-Up", 
    content: "While on vacation, I saw a guy proposing on the beach and started clapping. Soon, a whole crowd gathered around cheering, except the proposal wasn’t happening where I thought it was. Turns out, I started the applause for two random people just sitting on a blanket. They looked very confused, but they went with it and kissed.", 
    tags: ["Close Calls", "Funny"], 
    likes: 28 
  },
  { 
    id: 30, 
    title: "The Free Ice Cream Scam", 
    content: "My friend and I created a fake 'Buy One Get One Free' ice cream coupon and used it at different ice cream shops around town. It worked at five places before we got caught. The owner of the last shop just laughed and gave us free ice cream anyway, calling us ‘creative entrepreneurs.’ I guess we’ll take that as a compliment.", 
    tags: ["Pranks", "Funny"], 
    likes: 48 
  },
  { 
    id: 31, 
    title: "The Wrong Job Interview", 
    content: "I went to a job interview only to realize halfway through that I was at the wrong company. Instead of panicking, I finished the interview, and they actually offered me a position! I politely declined, explaining the mix-up. The interviewer laughed and said if I ever wanted a change of career, I should give them a call.", 
    tags: ["Unexpected", "Close Calls"], 
    likes: 38 
  },
  { 
    id: 32, 
    title: "The Traffic Jam Dance Party", 
    content: "Stuck in a traffic jam for hours, I cranked up the music, rolled down the windows, and started dancing in the car. Soon, people in other cars joined in, and we had a full-blown dance party on the highway. By the time traffic cleared, we were all honking and waving like we’d survived some kind of road-trip apocalypse.", 
    tags: ["Funny", "Unexpected"], 
    likes: 35 
  },
  { 
    id: 33, 
    title: "The Art Heist that Wasn't", 
    content: "At an art museum, I set off the alarm by accident when I leaned too close to a sculpture. Security rushed in, and I was panicking, thinking I’d somehow become an art thief. Turns out, they just wanted me to step back a little. I left with a newfound respect for ‘look but don’t touch.’", 
    tags: ["Close Calls", "Funny"], 
    likes: 27 
  },
  { 
    id: 34, 
    title: "The Accidental Band Roadie", 
    content: "I went to a concert, but through a series of mix-ups, I was mistaken for a roadie. Instead of correcting anyone, I just rolled with it and spent the night carrying instruments and setting up equipment. By the end of the show, I was even thanked on stage. I still have no idea how this happened.", 
    tags: ["Epic Nights", "Unexpected"], 
    likes: 43 
  },
  { 
    id: 35, 
    title: "The Elevator Karaoke Star", 
    content: "I got stuck in an elevator with a group of strangers for two hours. To pass the time, someone started playing music on their phone, and we all ended up singing karaoke. By the time we were rescued, we had formed an impromptu band and were making plans to meet up again for more ‘elevator jams.’", 
    tags: ["Funny", "Unexpected"], 
    likes: 37 
  },
  { 
    id: 36, 
    title: "The Fake Restaurant Critic", 
    content: "I went to a fancy restaurant and, as a joke, pretended to be a food critic. To my surprise, the staff started bringing me free dishes to ‘review.’ I kept up the act the whole night, and even wrote a fake review on a napkin. I left with a full belly and a feeling that I might have missed my true calling.", 
    tags: ["Pranks", "Unexpected"], 
    likes: 50 
  },
  { 
    id: 37, 
    title: "The Accidental Pet Psychic", 
    content: "At a dog park, a woman asked if I could tell what her dog was thinking. I jokingly said, 'Your dog wants more treats.' She gasped and said that’s exactly what her dog does when it wants treats. Now, whenever I see her, she calls me the 'Dog Whisperer.' I still don’t know anything about dogs.", 
    tags: ["Funny", "Unexpected"], 
    likes: 34 
  },
  { 
    id: 38, 
    title: "The Ping Pong King", 
    content: "I joined a ping pong tournament as a joke, but somehow kept winning by pure luck. I don’t even know how to play, but I ended up in the finals. My opponent was super intense, and I won when he accidentally knocked the ball into his own face. I’m now the proud owner of a ‘Ping Pong Champion’ trophy.", 
    tags: ["Epic Nights", "Funny"], 
    likes: 29 
  },
  { 
    id: 39, 
    title: "The Haunted Hotel Prank", 
    content: "On a trip with friends, we stayed at an old hotel that was supposedly haunted. I snuck into their rooms at night and played ghostly sounds on my phone. By morning, everyone was convinced they’d seen a ghost. I still haven’t told them it was me. I’m waiting for the right moment to reveal my ‘paranormal’ skills.", 
    tags: ["Pranks", "Funny"], 
    likes: 44 
  },
  { 
    id: 40, 
    title: "The Ultimate Roller Coaster Challenge", 
    content: "My friend bet me I couldn’t keep a straight face on a roller coaster. I accepted the challenge and managed to stay stone-faced the entire ride. When we looked at the ride photos, everyone else was screaming while I looked bored. We laughed so hard, the park staff gave us free ride passes just for the photos.", 
    tags: ["Epic Nights", "Funny"], 
    likes: 32 
  },
  { 
    id: 41, 
    title: "The Mysterious Gift Card", 
    content: "I received a $50 gift card in the mail with no note or sender information. I spent weeks trying to figure out who sent it, but no one claimed responsibility. Eventually, I just used it for a fancy dinner. To this day, it’s still an unsolved mystery. I like to think it was from a secret admirer.", 
    tags: ["Unexpected", "Funny"], 
    likes: 26 
  },
  { 
    id: 42, 
    title: "The Late Night Taco Challenge", 
    content: "After a night out, my friends and I decided to see who could eat the most tacos. I ended up eating 12, but lost to a guy who ate 15. The next day, I found out the winner had never eaten tacos before that night. He’s now known as the ‘Taco King,’ and we have annual rematches.", 
    tags: ["Epic Nights", "Funny"], 
    likes: 39 
  },
  { 
    id: 43, 
    title: "The Halloween Costume Fail", 
    content: "I went to a Halloween party dressed as a ghost, but realized too late that it was a themed party, and everyone else was dressed as movie characters. I spent the whole night being asked if I was from ‘Casper’ or ‘Ghostbusters.’ Eventually, I just said I was a ‘generic ghost extra’ from a horror film.", 
    tags: ["Funny", "Close Calls"], 
    likes: 31 
  },
  { 
    id: 44, 
    title: "The Accidental Date Auction", 
    content: "At a charity event, I accidentally signed up for a date auction, thinking it was a raffle. By the time I realized, it was too late to back out. I ended up getting ‘bought’ by someone who turned out to be really cool. We went out for drinks and laughed about the whole mix-up. Now we’re good friends.", 
    tags: ["Unexpected", "Funny"], 
    likes: 47 
  },
  { 
    id: 45, 
    title: "The Time I Went Viral", 
    content: "I was at a football game when the camera zoomed in on me during a dance-off. I wasn’t even dancing, just flailing around like a maniac. The next day, I woke up to a thousand messages — someone had posted my ‘dance’ online, and it went viral. Now I’m known as ‘The Flailing Guy.’", 
    tags: ["Epic Nights", "Unexpected"], 
    likes: 53 
  },
  { 
    id: 46, 
    title: "The Haunted House Hero", 
    content: "I went to a haunted house with some friends and was dared to scare the actors. I didn’t think it would work, but halfway through, I managed to jump out and scare one of the ‘zombies.’ He screamed, I laughed, and the rest of the house was a blur of both actors and guests avoiding me.", 
    tags: ["Pranks", "Funny"], 
    likes: 41 
  },
  { 
    id: 47, 
    title: "The Unexpected Dog Sitter", 
    content: "I was walking through the park when a stranger handed me their dog’s leash and asked me to ‘hold it for a minute.’ They never came back. I ended up adopting the dog, and now he’s my best friend. We’ve had many adventures together, but I still wonder what happened to the original owner.", 
    tags: ["Unexpected", "Funny"], 
    likes: 55 
  },
  { 
    id: 48, 
    title: "The Great Restaurant Switcheroo", 
    content: "My friend and I went to two different restaurants by mistake. She sat in one place, and I sat in another, thinking she was running late. After 30 minutes of confused texting, we realized our mistake, but decided to stay where we were and sent each other pictures of our meals instead. It’s now our ‘thing’ to do.", 
    tags: ["Funny", "Unexpected"], 
    likes: 27 
  },
  { 
    id: 49, 
    title: "The Pool Party Slip", 
    content: "At a pool party, I tried to do a cool dive but slipped on the edge and belly-flopped instead. It was loud enough that everyone stopped what they were doing to check on me. I popped up and yelled, 'Nailed it!' The lifeguard gave me a high-five, and it turned into the highlight of the party.", 
    tags: ["Epic Nights", "Funny"], 
    likes: 35 
  },
  { 
    id: 50, 
    title: "The Best Karaoke Ever", 
    content: "I went to a karaoke bar alone and sang a ridiculous song as a joke. The entire bar started cheering, and by the end of the night, I had formed a band with three random strangers. We performed five songs together, and people still talk about it whenever I go back. We even have a group name now.", 
    tags: ["Epic Nights", "Funny"], 
    likes: 44 
  },
  { 
    id: 51, 
    title: "The Mystery Mailman", 
    content: "For two weeks, I kept receiving someone else’s mail. I returned it to the post office every time, but one day, I decided to open a letter by mistake. It was a love letter... to me! I was so confused. Turns out, it was from my neighbor who had a crush but didn’t know how to tell me.", 
    tags: ["Close Calls", "Funny"], 
    likes: 38 
  },
   {
    id: 52,
    title: "The Accidental Wedding Crasher",
    content: "I was invited to a wedding but showed up at the wrong venue. I didn’t realize my mistake until halfway through the reception when I was introduced as 'the groom’s long-lost cousin.' I played along and even gave a toast. The bride and groom were so nice that I ended up staying for the entire event.",
    tags: ["Epic Nights", "Unexpected"],
    likes: 47
  },
  {
    id: 53,
    title: "The Time I Beat a Chess Master... by Accident",
    content: "I joined a local chess tournament for fun and somehow made it to the finals against a grandmaster. I had no idea what I was doing and was making random moves. Turns out, my chaotic strategy threw him off so badly that I won. The crowd went wild, and I pretended like I planned the whole thing.",
    tags: ["Funny", "Epic Nights"],
    likes: 53
  },
  {
    id: 54,
    title: "The Elevator Dance-Off",
    content: "On my way to a job interview, the elevator got stuck between floors. Instead of panicking, I jokingly started a dance-off with the other passengers. It went on for 20 minutes until we were rescued. The craziest part? One of the people in the elevator was the interviewer. I got the job.",
    tags: ["Epic Nights", "Unexpected"],
    likes: 42
  },
  {
    id: 55,
    title: "The Fake Tour Guide",
    content: "While visiting a museum, I started making up facts about the exhibits to entertain my friends. A group of tourists overheard and thought I was a real tour guide. By the end of the day, I was leading a group of 15 people, confidently explaining things I made up on the spot. I never got caught.",
    tags: ["Pranks", "Funny"],
    likes: 61
  },
  {
    id: 56,
    title: "The Lost Suitcase Saga",
    content: "I lost my suitcase during a layover in Paris. When it finally arrived, three days later, it had been to four different countries. My clothes were neatly folded, and there was a note from a stranger saying, 'Your suitcase had an adventure, too!' It was the most well-traveled luggage I’ve ever owned.",
    tags: ["Unexpected", "Funny"],
    likes: 39
  },
  {
    id: 57,
    title: "The 2 AM Ice Cream Heist",
    content: "My roommate and I had a sudden craving for ice cream at 2 AM, but the freezer was empty. We decided to sneak out, climb over a fence into a closed convenience store’s back door, and ‘borrow’ a pint from the freezer. We left money on the counter and never got caught. Best ice cream ever.",
    tags: ["Epic Nights", "Pranks"],
    likes: 45
  },
  {
    id: 58,
    title: "The Time I Caught the Bouquet... By Accident",
    content: "At my cousin’s wedding, I was minding my business when the bouquet flew through the air and hit me in the face. I wasn’t even trying to catch it, but there I was, holding the bouquet with everyone cheering. I’m still single, but at least I’ve got a funny story about my ‘future wedding.’",
    tags: ["Funny", "Close Calls"],
    likes: 50
  },
  {
    id: 59,
    title: "The Great Camping Prank",
    content: "During a camping trip, I convinced my friends that I had spotted a bear. They freaked out and ran for cover while I laughed from the safety of the tent. It wasn’t until later that night when we actually saw a bear that my prank backfired — no one believed me until the bear was right in front of us!",
    tags: ["Pranks", "Funny"],
    likes: 36
  },
  {
    id: 60,
    title: "The Most Awkward Flash Mob",
    content: "I was invited to participate in a flash mob proposal, but I showed up at the wrong place. Instead of the intended couple, I ended up dancing in front of two random people having coffee. Their confused faces as I danced my heart out will forever be one of the most awkward moments of my life.",
    tags: ["Epic Nights", "Funny"],
    likes: 41
  },
  {
    id: 61,
    title: "The Midnight Skinny Dipping Dare",
    content: "On a dare, I went skinny dipping in a public fountain at midnight. Everything was going fine until security showed up. I grabbed my clothes and ran through the park in nothing but my birthday suit. I’ve never run so fast in my life. My friends still call me 'The Fountain Streaker.'",
    tags: ["Epic Nights", "Pranks"],
    likes: 48
  },
  {
    id: 62,
    title: "The Mismatched Shoes Debacle",
    content: "I was late for a meeting and grabbed two different shoes without realizing it. One was a black loafer, and the other was a sneaker. I didn’t notice until I walked into the conference room. I played it off as a 'fashion statement,' but I’ve never lived it down. Now, I triple-check my shoes.",
    tags: ["Funny", "Close Calls"],
    likes: 38
  },
  {
    id: 63,
    title: "The Time I Won a Dance Battle... at a Wedding",
    content: "At a wedding, the DJ started a dance-off, and I got pulled into the circle. Not wanting to embarrass myself, I pulled out every dance move I knew (and some I didn’t). Somehow, I ended up winning. The prize? A bottle of champagne and the title of 'Wedding Dance Champion.' I still have the trophy.",
    tags: ["Epic Nights", "Funny"],
    likes: 52
  },
  {
    id: 64,
    title: "The Great Airport Pretender",
    content: "I missed my flight but pretended to be a pilot to get through security faster. Wearing sunglasses and confidently walking through the airport, no one questioned me. I even gave directions to other passengers. I made it to the gate just in time for the next flight. I’ve never felt so important.",
    tags: ["Pranks", "Unexpected"],
    likes: 63
  },
  {
    id: 65,
    title: "The Epic Water Balloon Fight",
    content: "What started as a small water balloon fight in my backyard turned into a neighborhood-wide battle. People were joining from all over, with hoses, water guns, and buckets. By the end, the streets were soaked, and someone had even set up a slip ‘n slide. It was the most fun summer day ever.",
    tags: ["Epic Nights", "Pranks"],
    likes: 47
  },
  {
    id: 66,
    title: "The Fake Parking Ticket Prank",
    content: "I printed fake parking tickets and placed them on my friends' cars. The tickets were filled with ridiculous offenses like 'parking too awesome' and 'excessive use of air freshener.' They freaked out at first, but when they read the fine print, they couldn’t stop laughing. Now they park better just in case.",
    tags: ["Pranks", "Funny"],
    likes: 54
  },
  {
    id: 67,
    title: "The Great Office Chair Race",
    content: "At work, we got bored during a meeting, so we decided to have an office chair race down the hallway. It started with just two people, but soon the whole office was involved, racing around corners and dodging cubicles. We may have gotten in trouble afterward, but it was totally worth it.",
    tags: ["Epic Nights", "Funny"],
    likes: 42
  },
  {
    id: 68,
    title: "The Time I Won a Burrito-Eating Contest",
    content: "I entered a burrito-eating contest for fun, thinking I’d be out after a few rounds. To everyone’s surprise, I kept winning. By the end, I had eaten six massive burritos and won a year’s worth of free burritos from the restaurant. I didn’t eat another burrito for three months after that.",
    tags: ["Epic Nights", "Funny"],
    likes: 57
  },
  {
    id: 69,
    title: "The Ice Cream Truck Showdown",
    content: "I was at the park when two ice cream trucks showed up at the same time. It quickly turned into a showdown with each truck blasting their music louder to attract customers. In the end, I bought ice cream from both just to end the standoff. It was the most intense ice cream experience of my life.",
    tags: ["Unexpected", "Funny"],
    likes: 40
  },
  {
    id: 70,
    title: "The Time I Got Locked in a Porta-Potty",
    content: "At an outdoor festival, I got locked in a porta-potty when the door jammed. After 20 minutes of trying to escape, I started banging on the door until a group of people helped me out. I’ve never been so relieved to breathe fresh air. I now avoid porta-potties at all costs.",
    tags: ["Close Calls", "Funny"],
    likes: 43
  },
  {
    id: 71,
    title: "The Impromptu Speech",
    content: "I was at a wedding when the best man got too nervous to give his speech, so I was asked to step in. I had no idea what to say, so I made up a heartfelt story about the couple. Everyone was in tears by the end, and they still think I was best friends with the groom. I’ve never told them the truth.",
    tags: ["Epic Nights", "Unexpected"],
    likes: 50
  }
];

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const StoryCard = ({ story, onOpen, handleLike, likedStories }) => (
  <Card sx={{ bgcolor: '#222222', color: '#FFD700', border: '2px solid #FFD700', borderRadius: '12px', boxShadow: '0 0 10px #FFD700', transition: 'transform 0.2s ease-in-out' }}>
    <CardContent>
      <Typography variant="h5" component="div" gutterBottom>{story.title}</Typography>
      <Typography variant="body2" className='h-10 overflow-hidden'>{story.content}...</Typography>
      <Box mt={2} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          {story.tags.map(tag => (
            <Chip key={tag} label={tag} color="primary" size="small" sx={{ bgcolor: '#FFD700', color: '#222222', fontWeight: 'bold', marginRight: '4px' }} />
          ))}
        </Box>
        <Typography variant="body2" className='flex items-center' sx={{ color: '#FFD700', fontWeight: 'bold' }}>
          <p className='pt-2'>{story.likes} </p>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ThumbUpAlt 
              className='cursor-pointer pt-2' 
              sx={{ color: likedStories.includes(story.id) ? '#FFD700' : '#FFFFFF' }} // Change color based on like status
              onClick={() => handleLike(story.id)} 
            />
          </motion.div>
        </Typography>
      </Box>
    </CardContent>
    <CardActions sx={{ justifyContent: 'center' }}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button size="small" onClick={() => onOpen(story)} sx={{ color: '#FFD700', '&:hover': { color: '#222222', backgroundColor: '#FFD700' } }}>
          Read More
        </Button>
      </motion.div>
    </CardActions>
  </Card>
);

const StoryDetail = ({ story, open, onClose }) => (
  <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={onClose} PaperProps={{ sx: { bgcolor: '#222222', color: '#FFD700', borderRadius: '12px', border: '2px solid #FFD700', boxShadow: '0 0 10px #FFD700' } }}>
    <DialogTitle sx={{ color: '#FFD700', textAlign: 'center' }}>{story.title}</DialogTitle>
    <DialogContent>
      <Typography variant="body2" sx={{ color: '#FFD700' }}>{story.content}</Typography>
    </DialogContent>
    <DialogActions sx={{ justifyContent: 'center' }}>
      <Button onClick={onClose} sx={{ color: '#FFD700', '&:hover': { color: '#222222', backgroundColor: '#FFD700' } }}>Close</Button>
    </DialogActions>
  </Dialog>
);

const LegendaryStoriesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStory, setSelectedStory] = useState(null);
  const [likedStories, setLikedStories] = useState([]); // Keep track of liked stories
  const [storiesData, setStoriesData] = useState(stories);

  // Handle like/unlike functionality
  const handleLike = (id) => {
    const isLiked = likedStories.includes(id);
    const updatedStories = storiesData.map(story => {
      if (story.id === id) {
        return { ...story, likes: isLiked ? story.likes - 1 : story.likes + 1 };
      }
      return story;
    });

    setStoriesData(updatedStories);

    if (isLiked) {
      setLikedStories(likedStories.filter(storyId => storyId !== id)); // Remove from liked stories
    } else {
      setLikedStories([...likedStories, id]); // Add to liked stories
    }
  };

  const filteredStories = storiesData.filter(story => story.title.toLowerCase().includes(searchTerm.toLowerCase()));
  
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, bgcolor: '#181818', color: '#FFD700', minHeight: '100vh', padding: '20px' }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <EmojiEvents sx={{ mr: 2, color: '#FFD700' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Legendary Stories</Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search for stories..."
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              input: { color: '#FFD700' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#FFD700' },
                '&:hover fieldset': { borderColor: '#FFD700' },
                '&.Mui-focused fieldset': { borderColor: '#FFD700' }
              }
            }}
          />
        </Toolbar>
      </AppBar>

      <Masonry breakpointCols={breakpointColumnsObj} className="flex w-auto -ml-4" columnClassName="pl-4 bg-clip-padding">
        {filteredStories.map(story => (
          <Box key={story.id} mb={3}>
            <StoryCard story={story} onOpen={setSelectedStory} handleLike={handleLike} likedStories={likedStories} />
          </Box>
        ))}

        {filteredStories.length === 0 && (
          <Box textAlign="center" sx={{ mt: 5 }}>
            <Typography variant="h5" sx={{ color: '#FFD700', mb: 3 }}>
              <SentimentVeryDissatisfied sx={{ fontSize: 60 }} />
              <br />
              No legendary stories found. Time to create your own!
            </Typography>
          </Box>
        )}
      </Masonry>

      {selectedStory && <StoryDetail story={selectedStory} open={Boolean(selectedStory)} onClose={() => setSelectedStory(null)} />}
    </Container>
  );
};

export default LegendaryStoriesPage;