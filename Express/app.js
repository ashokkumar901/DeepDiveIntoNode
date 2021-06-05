const express = require('express');
const app = express();
const personCtrl = require('./controllers/personController');
const httpCtrl = require('./controllers/httpController');

app.use('/static',express.static(__dirname+'/public'));

app.set('view engine','ejs');

personCtrl(app);
httpCtrl(app);

let PORT = process.env.PORT || 3000;
app.listen(PORT);