const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const jokes = [
    'Why don’t scientists trust atoms? Because they make up everything!',
    'Parallel lines have so much in common. It’s a shame they’ll never meet.',
    'Why did the scarecrow win an award? Because he was outstanding in his field!',
    'What do you get when you cross a snowman and a vampire? Frostbite!',
    'I told my wife she was drawing her eyebrows too high. She looked surprised!',
    'Why don’t skeletons fight each other? They don’t have the guts.',
    'Why was the math book sad? It had too many problems.',
    'I’m reading a book on anti-gravity. It’s impossible to put down!',
    'I used to play piano by ear, but now I use my hands.',
    'I’m on a seafood diet. I see food and I eat it.',
    'What do you call fake spaghetti? An impasta!',
    'Why did the bicycle fall over? Because it was two-tired!',
    'I told my computer I needed a break, and now it won’t stop sending me vacation ads.',
    'Why did the tomato turn red? Because it saw the salad dressing!',
    'I used to be a baker, but I couldn’t make enough dough.',
    'What did one ocean say to the other ocean? Nothing, they just waved.',
    'Why did the scarecrow become a successful neurosurgeon? Because he was outstanding in his field!',
    'I told my wife she should embrace her mistakes. She gave me a hug.',
    'What did the janitor say when he jumped out of the closet? Supplies!',
    'Why don’t scientists trust atoms? Because they make up everything!',
  ];
  

app.get('/random-joke', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ joke: randomJoke }));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
