const express = require('express');
require('./config/database');
const app = express();



app.listen(7777, () => {
    console.log('Server started on http://localhost:7777');
})