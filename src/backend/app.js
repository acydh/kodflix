require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
const db = require('./db');


app.use(express.static(path.join(__dirname, '../../build')));


app.get('/rest/shows', (req, res) => {
    db.connect("kodflix").then(dbo => {
        const cursor = dbo.collection("shows");
        cursor.find({}).toArray((err, results) => {
            if (err) throw err;
            res.send(results);
        });
    })
});

app.get('/rest/shows/:id', (req, res) => {
    db.connect("kodflix").then(dbo => {
        const cursor = dbo.collection("shows");
        cursor.find({}).toArray((err, results) => {
            if (err) throw err;
            const show = results.find(movie => {
                let title = req.params.id
                    .split('-')
                    .join(' ');
                return title.toLowerCase() === movie.title.toLowerCase();
            });
            res.send(show);
        });
    })
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port);