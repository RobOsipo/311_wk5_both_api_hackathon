const express = require('express')
const bodyParser = require("body-parser");
const employeeRoutes = require('./routes/employees')
const connection = require('./connection.js');
require('dotenv').config();
const app = express()
const PORT = 4001

// Our basic middleware
app.use(bodyParser.json())
// Our Controller/Routes middleware
app.use('/employees', employeeRoutes)


// basic API home page
app.get('/', (req, res) => {
    res.send('Welcome To Our API!')
})


app.get('/users', (req, res) => {
 console.log('inside get /users route');
 const sql = 'SELECT * FROM employees'
 connection.query(sql, (err, rows) => {
     if (err) {
         console.log(err)
         res.status(404).send('A problem occured' + err.sqlMessage)
     } else {
         res.json(rows)
     }
 })
})

// If we access the wrong endpoint throw error
app.all("*", (req, res) => {
    res.status(404).send('<h1>That End-Point/Route does not exist</h1>')
})

// Our PORT to listen on
app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT}`)
})


