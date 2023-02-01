const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

//connecting to the database
const db = mysql.createPool({
    user: 'agiradaniel',
    host: 'localhost',
    password: '9223',
    database: 'crud_contact',
});

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/display', (req, res) => {
    const sqlGet = 'SELECT * FROM contact_db';
    db.query(sqlGet, (error, result) => {
        res.send(result);
    })
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})