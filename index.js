const express = require('express')

const app = express()
const PORT = 4001

app.get('/', (req, res) => {
    res.send('Welcome To Our API')
})

app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT}`)
})


