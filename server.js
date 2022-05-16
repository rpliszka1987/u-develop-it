// Import express
const express = require('express');
// Port designation
const PORT = process.env.PORT || 3001;
// app expression
const app = express();
// Import mysql
const mysql = require('mysql2');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username
        user: 'root',
        // Your MySQL password
        password: '',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// Get test request. 
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// Retrive all data from db

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// Get single candidate from db

// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) =>{
//     if (err) {
//         console.log(err);
//     }

//     console.log(row);
// });

// Delete a candidate from db

// db.query(`DELETE FROM candidates WHERE id=?`, 1, (err, result) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(result);
// });

// Create a cadidate in the db

// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//             VALUES (?, ?, ?, ?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(result);
// });
            

// Deafult response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start Express server
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});