const express = require('express');


const app = express();

app.get('/', (req,res) => {
    res.send('Welcome');
})

app.listen(8008, () => {
    console.log('Server is running')
})