// function requireHTTPS(req, res, next) {
//     // The 'x-forwarded-proto' check is for Heroku
//     if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//         return res.redirect('https://' + req.get('host') + req.url);
//     }
//     next();
// }

// const https = require('https');
// const fs = require('fs');
const express = require('express');
const app = express();

// Redirect all traffic from http to https.
// app.use(requireHTTPS);

// Serve the static files
app.use(express.static('./dist/path'));

// Wait for a request to any path and redirect all of the requests to index.html.
app.get('/*', function(request, response) {
    response.sendFile('index.html', {root: 'dist/path/'});
});

// Listen for requests at the PORT specified by env variables or the default Heroku port, which is 8080.
app.listen(process.env.PORT || 8080);