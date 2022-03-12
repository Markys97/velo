const express= require('express');
const mysql =require('mysql');
const bodyParser= require('body-parser');

const app= express();
const Port=7000;
const connection= mysql.createConnection({
    database:'velo',
    user:'root',
    password:''
})

connection.connect(()=> console.log('database connecting'))


app.set('view engine','ejs')

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    connection.query('SELECT * FROM marque_velo', (err,dataMarque)=>{
        if(err) throw err

       
        res.render('home',{dataMarque});
    })





    
})

app.get('/velo/:id',(req,res)=>{
    let idVelo= req.params.id;
    connection.query(`
        SELECT * FROM marque_velo RIGHT JOIN velo ON id= idVelo WHERE idVelo=?
    `,[idVelo],(error,dataVelo)=>{
        if(error) throw error

        res.render('velo',{dataVelo})
    })

    
})

app.get('/start/:id/:place',(req,res)=>{
    const idVideo= req.params.id;
    const place= req.params.place;
    connection.query('SELECT * FROM velo WHERE idVelo=?',[idVideo],(err,data)=>{
        if (err) throw err

      console.log(data)
        res.render('order',{data})
    })
    
})


app.listen(Port,()=> console.log('app run on Port '+ Port))
