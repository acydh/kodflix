const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')))

app.get('/rest/shows', (req, res) => {
    res.sendFile('shows.json', { root: __dirname });
});

app.get('*', function (req, res) {
    res.sendFile('index.html', { root: "build" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));