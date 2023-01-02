const express = require('express')
const app = express()

app.listen(1337, () => {
    console.log('Server started on 1337.')
})

app.get('/gregs-message', (req,res) => {
    res.send('<h1>hi</h1>')
})