const express = require('express');
const app = express();
const port = 3001;
app.use(express.static('public'))

app.get('/rest/shows', (req, res) => {
    res.sendFile('shows.json', { root: __dirname });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));