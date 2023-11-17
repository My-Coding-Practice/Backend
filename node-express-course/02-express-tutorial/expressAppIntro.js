const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Home page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About page')
})

app.all('*', (req, res) => { 
    res.status(404).send('Oops, we could not find the page you were looking for')
})

app.listen(5000, () => {
    console.log('Listening on post 5000...');
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen