module.exports = (app)=>{
    app.use('/',(req,res,next)=>{
        console.log(req.url);
        next();
    });
    
    app.get('/',(req,res)=>{
        res.render('index');
    });
    
    app.get('/api',(req,res)=>{
        res.json({firstName:'Ashok',lastName:'kumar'});
    });
}