const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.json({
        pinto: "soap"
    })
})

app.listen(3000);