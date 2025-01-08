// Create a web server
// Create a route for comments that returns an array of comments
// Start the server
const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
    res.send([
        {
            username: 'Todd',
            comment: 'lol that is so funny'
        },
        {
            username: 'Skyler',
            comment: 'I like to go birdwatching with my dog'
        },
        {
            username: 'Sk8erBoi',
            comment: 'Plz delete your account, Todd'
        },
        {
            username: 'onlysayswoof',
            comment: 'woof woof woof'
        }
    ]);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});