const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Generate random Lorem Ipsum text
const generateLoremIpsum = () => {
  const loremIpsum = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
    "Donec eu libero sit amet quam egestas semper.",
    "Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    "Quisque sit amet est et sapien ullamcorper pharetra.",
    "Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.",
    "Donec non enim in turpis pulvinar facilisis. Ut felis.",
    "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
    "Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.",
  ];

  // Return a random sentence
  return loremIpsum[Math.floor(Math.random() * loremIpsum.length)];
};

// Chat endpoint
app.post('/api/chat', (req, res) => {
  const { message } = req.body;

  // Simulate a delay for realism
  setTimeout(() => {
    const reply = generateLoremIpsum();
    res.json({ reply });
  }, 1000); // 1 second delay
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});