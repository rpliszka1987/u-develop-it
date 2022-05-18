// Import express
const express = require('express');
// Import db connection
const db = require('./db/connection');
// Import API routes
const apiRoutes = require('./routes/apiRoutes');
// Port designation
const PORT = process.env.PORT || 3001;
// app expression
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

            
// Deafult response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected');

    // Start Express server
    app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
    });
    
});