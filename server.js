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
        // Your MySQL usernam
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

// Deafult response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start Express server
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});