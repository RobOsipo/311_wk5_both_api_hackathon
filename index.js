const express = require('express')
const bodyParser = require("body-parser");
const employeeRoutes = require('./routes/employees')
const app = express()
const PORT = 4001

// app.get('/', (req, res) => {
//     res.send('Welcome To Our API')
// })

app.use(bodyParser.json())

app.use('/employees', employeeRoutes)

app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT}`)
})


