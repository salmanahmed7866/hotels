const express = require('express')
const app = express()
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.get('/', function (req, res) {
    res.send('Hello World Beta')
})

const pesonRoutes = require('./routes/personRoutes');
const menuItem=require('./routes/menu_item');
app.use('/person', pesonRoutes)
app.use('/menuItem',menuItem)

app.listen(3000, () => {
    console.log("listening on port 3000")
})