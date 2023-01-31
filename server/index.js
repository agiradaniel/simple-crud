const express = require('express');
const app = express();
const mysql2 = require('mysql2');
const cors = require('cors')

app.use(cors());
app.use(express.json());

//connecting to the database
const db = mysql2.createConnection({
    user: 'agiradaniel',
    host: 'localhost',
    password: '9223',
    database: 'employeeSystem',
});

//sending data to the database
app.post('/create', (req, res) =>{
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query('INSERT INTO alure (name, age, country, position, wage) VALUES (?,?,?,?,?)',
     [name, age, country, position, wage]), (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send('Values inserted');
        }
     }

})

app.get('/employees', (req,res) => {
    db.query('SELECT * FROM alure', (err, result) =>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.put('/update', (req,res) => {
    const id = req.body.id;
    const wage = req.body.wage;
    db.query('UPDATE alure SET wage = ? WHERE id = ?', [wage, id], (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
})

app.delete('/delete/:id', (req,res) => {
    const id = req.params.id;
    db.query('DELETE FROM alure WHERE id = ?', id, (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    })
})

app.listen(3001, ()=> {
    console.log("Yay, your server is running on port 3001")
}) 