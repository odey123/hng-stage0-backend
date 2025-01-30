const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


// API route
app.get('/api', (req, res) => {
    const email = 'ohotujude@gmail.com';
    const githubUrl = 'https://github.com/odey123/hng-stage0-backend';


    const now = new Date();

    
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;

    
    const response = {
        email: email,
        current_datetime: currentTime, 
        github_url: githubUrl
    };

    res.status(200).json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});