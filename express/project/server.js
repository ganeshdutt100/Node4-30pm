const express = require('express');
const path = require('path');
const app = express();

// --- MIDDLEWARES ---

// 1. Static files serve karne ke liye (HTML dikhane ke liye)
app.use(express.static('public'));

// 2. Form data (req.body) ko samajhne ke liye (Sabse important middleware)
app.use(express.urlencoded({ extended: true }));

// -------------------

// Home Route: HTML file serve karega
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Feedback Submit Route
app.post('/submit-feedback', (req, res) => {
    // req.body ka use karke form data nikal rahe hain
    const name = req.body.userName;
    const rating = req.body.userRating;
    const message = req.body.userMessage;

    console.log("--- Naya Feedback Mila! ---");
    console.log(`Naam: ${name}`);
    console.log(`Rating: ${rating}`);
    console.log(`Message: ${message}`);

    // Response bhejna
    res.send(`
        <div style="font-family: sans-serif; text-align: center; margin-top: 50px;">
            <h1>Shukriya, ${name}!</h1>
            <p>Aapka ${rating} star feedback humein mil gaya hai.</p>
            <a href="/">Wapas Jayein</a>
        </div>
    `);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server chalu hai: http://localhost:${PORT}`);
});