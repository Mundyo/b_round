const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
// const axios = require('axios');



const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"Kasongi2014!",
    database:"bround",
});

db.connect((err)=>{
    if(err) {
        console.error('Error connecting to Mysql:', err);

    } else {
        console.log('Connected to MySQL');
    }
})






app.post('/createAccount', (req, res, next) => {
    const { firstName, lastName, year, month, day, phoneNumber, email,  password} = req.body;

    console.log('Received data:', { firstName, lastName, year, month, day , phoneNumber, email,  password});

 

                const sql = 'INSERT INTO users (first_name, last_name, date_of_birth, phoneNumber, email,  password_hash) VALUES (?, ?, ?, ?, ?, ?)';
                const formattedDate = `${year}-${month}-${day}`;

                db.query(sql, [firstName, lastName, formattedDate, phoneNumber, email,  password], (err, result) => {
                    if (err) {
                        console.error('Error executing SQL query:', err);
                        res.status(500).json({ success: false, message: 'Internal server error' });
                    } else {
                        console.log('Account created successfully!');
                        res.status(201).json({ success: true, message: 'Account created successfully.' });
                    }
                    next();
                });

});







app.get('/', (req, res)=>{
    res.json("hello this is the backend")
})
app.listen(3006, ()=>{
   console.log('Listening...') 
})




  
    // const sql = 'INSERT INTO users (first_name, last_name, date_of_birth, phoneNumber, email) VALUES (NULL,NULL,NULL,NULL,NULL)';
//     const sql = 'INSERT INTO users (first_name, last_name, date_of_birth, phoneNumber, email, password) VALUES (?, ?, ?, ?, ?)';
//     const formattedDate = `${year}-${month}-${day}`;

//      db.query(sql, [firstName, lastName, formattedDate, phoneNumber, email, password],  (err, result) => {
//         // db.query(sql, [firstName, lastName, `${year}-${month}-${day}`, phoneNumber, email], (err, result) => {

//         if (err) {
//             console.error('Error executing SQL query:', err);
//             res.status(500).json({ success: false, message: 'Internal server error' });
//         } else {
//             console.log('Account created successfully!');
//             res.status(201).json({ success: true, message: 'Account created successfully.' });
//         }
//         next();
//     });