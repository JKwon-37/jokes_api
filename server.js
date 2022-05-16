const express = require('express');
const app = express();
const PORT = 8000;
const DB_NAME = 'jokes_db';

// ----- middleware -----
app.use(express.json(), express.urlencoded({extended: true}));

// double paranthesis executes export function from config file and passes the variable name
require('./config/mongoose.config')(DB_NAME);

//import routes after DB connects
require('./routes/jokes.routes')(app);

app.listen(PORT, () => {
    console.log(`Server up on PORT: ${PORT} and is listening for requests to respond.`);
})