const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router.js');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({exetended:true}));
app.use('/', routes);

app.listen(3002, ()=>{
    console.log('server initialize on http://localhost:3002');
});