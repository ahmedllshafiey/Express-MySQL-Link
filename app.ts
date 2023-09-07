const express = require('express')
const app = express()
const mysql = require('mysql2')
const port = 3000;
const assert = require('assert')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
})

connection.connect((err)=>{
     if (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }
  console.log('Connected to MySQL database');
})

app.use(express.json());

// Post 
app.post('/', (req,res)=>{
    let name = req.body.name
    let age = req.body.age

    let query = `insert into users (name, age) values("${name}",${age})`
    connection.query(query,(err,result)=>{
        assert.equal(null,err)
        console.log("name added")
    })
    res.send("sent")
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})