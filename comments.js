// Create web server and listen for requests
// 1. Import express
const express = require('express');
// 2. Create an instance of express
const app = express();
// 3. Define a port
const port = 3000;
// 4. Define a route
app.get('/', (req, res) => {
    res.send('This is a GET request');
});
// 5. Start the server
app.listen(port, () => console.log(`Listening on port ${port}...`));

// npm install express
// node comments.js
// https://cuddly-space-computing-machine-977jgr95pvg6h97w4-3000.app.github.dev/
// returns: This is a GET request