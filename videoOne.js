const express = require('express')

const app = express()

app.listen(8080, () => {
    console.log('server on!!!!')
})

app.get('/gregs-favorite-tv-show', (req, res) => {
    res.send('The Bear')
})