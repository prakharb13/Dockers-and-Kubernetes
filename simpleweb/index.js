const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi there');

});

app.listen(5050, () => {

    console.log('Listening on port 5050');
});