const express = require('express');


const app = express();

app.get('/', (req,res) => {
    res.send('Welcome');
})

app.get('/first-get', (req,res) => {
    res.status(200).send({
        success: true
    })
})

app.listen(8008, () => {
    console.log('Server is running')
})