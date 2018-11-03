const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const app = express();

const api = new ParseServer({
    databaseURI: 'mongodb://127.0.0.1:27017/test-parse',
    appId: 'parse123456',
    cloud: './cloud/main.js', // Absolute path to your Cloud Code
    masterKey: '123456',
    serverURL: 'http://localhost:1337/parse',
    liveQuery: {
        classNames: ['NewsFeed']
    }
});

let port = 1337;

// Initialize a LiveQuery server instance, app is the express app of your Parse Server
// const httpServer = require('http').createServer(app);
// httpServer.listen(p÷ort);


// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

let httpServer = app.listen(port, function () {
    console.log('parse-server running on port 1337.');
});

const parseLiveQueryServer = ParseServer.createLiveQueryServer(httpServer);
