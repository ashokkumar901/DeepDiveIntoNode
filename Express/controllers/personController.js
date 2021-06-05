const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({extended:false});
const jsonParser = bodyParser.json();

module.exports = (app)=>{
    app.get('/person/:id', (req, res)=>{
        res.render('person',
        {
            ID: req.params.id,
            Qstr: req.query.qstr
        });
    });
    
    app.post('/person',urlencodedParser,(req,res)=>{
        res.send('Thank you');
        console.log(req.body.firstName);
        console.log(req.body.lastName);
    });
    
    app.post('/personJson',jsonParser,(req,res)=>{
        res.send('Thank you for the jsondata');
        console.log(req.body.firstName);
        console.log(req.body.lastName);
    });
}